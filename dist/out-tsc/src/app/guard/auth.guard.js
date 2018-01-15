"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("../service");
var router_1 = require("@angular/router");
var AdminGuard = (function () {
    function AdminGuard(authService, schoolService, layerService, classService, router) {
        this.authService = authService;
        this.schoolService = schoolService;
        this.layerService = layerService;
        this.classService = classService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        // console.log("in auth guard");
        var _this = this;
        if (this.authService.isAuth()) {
            return new Promise(function (resolve, rej) {
                if (_this.authService.getUser().permission != "student") {
                    _this.schoolService.initSchool(_this.authService.schoolId)
                        .then(function (res) {
                        _this.layerService.getAllLayers(_this.authService.schoolId).then(function (_) {
                            _this.layerService.initSocket();
                            _this.classService.getAllClass(_this.authService.schoolId).then(function (_) {
                                resolve(true);
                            });
                        });
                    });
                }
                else if (_this.authService.permission === "student") {
                    console.log(2);
                    _this.router.navigate(["/layout/client"]);
                }
            });
        }
        else {
            var user = JSON.parse(localStorage.getItem("auth"));
            if (user)
                this.authService.login(user).then(function (u) {
                    if (_this.authService.isAuth()) {
                        return new Promise(function (resolve, rej) {
                            if (_this.authService.getUser().permission != "student") {
                                _this.schoolService.initSchool(_this.authService.getUser().schoolId)
                                    .then(function (res) {
                                    _this.layerService.getAllLayers(_this.authService.getUser().schoolId).then(function (_) {
                                        _this.layerService.initSocket();
                                        _this.classService.getAllClass(_this.authService.getUser().schoolId).then(function (_) {
                                            _this.router.navigate(["/layout/admin"]);
                                            resolve(true);
                                        });
                                    });
                                });
                            }
                            else if (_this.authService.getUser().permission === "student") {
                                // console.log(1);
                                _this.router.navigate(["/layout/client"]);
                            }
                        });
                    }
                    else {
                        // console.log(3);
                        _this.router.navigate(["/login"]);
                        return false;
                    }
                });
            else {
                // console.log(4);
                this.router.navigate(["/login"]);
                return false;
            }
        }
    };
    AdminGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [service_1.AuthService,
            service_1.SchoolService,
            service_1.LayerService,
            service_1.ClassService,
            router_1.Router])
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;
var AuthGuard = (function () {
    function AuthGuard(authService, schoolService, layerService, classService, router) {
        this.authService = authService;
        this.schoolService = schoolService;
        this.layerService = layerService;
        this.classService = classService;
        this.router = router;
        // console.log("in auth guard");
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // console.log("in auth guards");
        var _this = this;
        if (this.authService.isAuth()) {
            return new Promise(function (resolve, rej) {
                _this.schoolService.initSchool(_this.authService.getUser().schoolId)
                    .then(function (res) {
                    _this.layerService.getAllLayers(_this.authService.getUser().schoolId).then(function (_) {
                        _this.layerService.initSocket();
                        _this.classService.getAllClass(_this.authService.getUser().schoolId).then(function (_) {
                            resolve(true);
                        });
                    });
                });
            });
        }
        else {
            var user = JSON.parse(localStorage.getItem("auth"));
            if (user)
                this.authService.login(user).then(function (u) {
                    if (_this.authService.isAuth()) {
                        return new Promise(function (resolve, rej) {
                            _this.schoolService.initSchool(_this.authService.getUser().schoolId)
                                .then(function (res) {
                                _this.layerService.getAllLayers(_this.authService.getUser().schoolId).then(function (_) {
                                    _this.layerService.initSocket();
                                    _this.classService.getAllClass(_this.authService.getUser().schoolId).then(function (_) {
                                        _this.router.navigate(["/layout/client"]);
                                        resolve(true);
                                    });
                                });
                            });
                        });
                    }
                    else {
                        _this.router.navigate(["/login"]);
                        return false;
                    }
                });
            else {
                this.router.navigate(["/login"]);
                return false;
            }
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [service_1.AuthService,
            service_1.SchoolService,
            service_1.LayerService,
            service_1.ClassService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map