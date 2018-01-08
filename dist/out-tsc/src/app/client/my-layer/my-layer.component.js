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
var service_1 = require("../../service");
var MyLayerComponent = (function () {
    function MyLayerComponent(userService, authService, layerService) {
        var _this = this;
        this.userService = userService;
        this.authService = authService;
        this.layerService = layerService;
        this.userService.users.subscribe(function (users) {
            if (users) {
                if (users[0].fname)
                    _this._students = users.sort(function (a, b) {
                        return a.fname.localeCompare(b.fname);
                    });
                else
                    _this._students = users;
            }
        });
        this._layer = this.layerService.getLayerById(this.authService.getUser().layerId);
    }
    MyLayerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MyLayerComponent.prototype, "students", {
        get: function () {
            var _this = this;
            return this._students.filter(function (res) {
                return !_this.authService.getUser().positivePrefer.includes(res._id) && !_this.authService.getUser().negativePrefer.includes(res._id);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyLayerComponent.prototype, "positive", {
        get: function () {
            var _this = this;
            return this._students.filter(function (res) {
                return _this.authService.getUser().positivePrefer.includes(res._id);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyLayerComponent.prototype, "negative", {
        get: function () {
            var _this = this;
            return this._students.filter(function (res) {
                return _this.authService.getUser().negativePrefer.includes(res._id);
            });
        },
        enumerable: true,
        configurable: true
    });
    MyLayerComponent.prototype.addToPositive = function (id) {
        this.authService.addPositive(id);
    };
    MyLayerComponent.prototype.addToNegative = function (id) {
        this.authService.addNegative(id);
        return false;
    };
    MyLayerComponent.prototype.save = function () {
        this.authService.update().then(function (res) { });
    };
    MyLayerComponent.prototype.clear = function () {
        var ans = confirm("האם למחוק את כל העדפות");
        if (ans) {
            this.authService.getUser().negativePrefer = [];
            this.authService.getUser().positivePrefer = [];
            this.save();
        }
    };
    Object.defineProperty(MyLayerComponent.prototype, "lock", {
        get: function () {
            var d = new Date();
            if (this._layer)
                if (this._layer.lockTime) {
                    var d2 = new Date(this._layer.lockTime);
                    return d2.getFullYear() <= d.getFullYear() && d2.getMonth() <= d.getMonth() && d2.getDate() <= d.getDate();
                }
        },
        enumerable: true,
        configurable: true
    });
    MyLayerComponent = __decorate([
        core_1.Component({
            selector: 'app-my-layer',
            templateUrl: './my-layer.component.html',
            styleUrls: ['./my-layer.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [service_1.UserService, service_1.AuthService, service_1.LayerService])
    ], MyLayerComponent);
    return MyLayerComponent;
}());
exports.MyLayerComponent = MyLayerComponent;
//# sourceMappingURL=my-layer.component.js.map