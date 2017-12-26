"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var models_1 = require("../../models");
var service_1 = require("../../service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var open_student_dialog_component_1 = require("./open-student-dialog/open-student-dialog.component");
var new_layer_charge_dialog_component_1 = require("./new-layer-charge/new-layer-charge-dialog.component");
var nav_service_1 = require("../../service/nav/nav.service");
var componentBase_model_1 = require("../../componentBase.model");
var LayerComponent = (function (_super) {
    __extends(LayerComponent, _super);
    function LayerComponent(activatedRoute, layerService, userService, fb, authService, http, schoolService, dialog, navService) {
        var _this = _super.call(this, navService) || this;
        _this.activatedRoute = activatedRoute;
        _this.layerService = layerService;
        _this.userService = userService;
        _this.authService = authService;
        _this.http = http;
        _this.schoolService = schoolService;
        _this.dialog = dialog;
        _this._addStudentFlag = false;
        _this.addStudentButtonText = "הוסף תלמיד";
        _this.form = fb.group({
            username: ["", forms_1.Validators.required],
            fname: "",
            lname: ""
        });
        _this.activatedRoute.params.subscribe(function (res) {
            _this._layer = _this.layerService.getLayerById(res["id"]);
            // console.log(res["id"]);
            _this.userService.users.subscribe(function (users) {
                if (users)
                    _this._students = users.filter(function (u) {
                        // console.log(u.layerId + " ," + res["id"])
                        return u.layerId === res["id"];
                    }).sort(function (a, b) {
                        return a.username.localeCompare(b.username);
                    });
            });
        });
        return _this;
    }
    Object.defineProperty(LayerComponent.prototype, "layer", {
        get: function () {
            return this._layer;
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.ngOnInit = function () {
        this.headerCards = [
            new models_1.HeaderCard("class", "מספר כיתות", this.layer.classes, "#796aee"),
            new models_1.HeaderCard("done_all", "תלמדים שמילאו העדפות", this.layerService.num, "#ffc36d"),
            new models_1.HeaderCard("supervisor_account", "מספר תלמידים", this.userService.getUsersByLayer(this.layer._id).length, "#63c3ff"),
            new models_1.HeaderCard("show_chart", "מספר שיבוצים שבוצעו", this.layerService.num, "#63c3ff")
        ];
    };
    Object.defineProperty(LayerComponent.prototype, "addStudentFlag", {
        get: function () {
            return this._addStudentFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerComponent.prototype, "students", {
        get: function () {
            var _this = this;
            return this.searchTerm != "" ? this._students.filter(function (s) {
                return s.fname.includes(_this.searchTerm) || s.lname.includes(_this.searchTerm) || s.username.includes(_this.searchTerm);
            }) : this._students;
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.changeFlag = function () {
        this._addStudentFlag = !this._addStudentFlag;
    };
    Object.defineProperty(LayerComponent.prototype, "lockTime", {
        set: function (e) {
            this._layer.lockTime = e;
            this.layerService.updateLayer(this._layer).then(function (res) { });
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.addStudent = function (name, fname, lname) {
        var _this = this;
        var user = new models_1.User();
        user.schoolId = this.authService.getUser().schoolId;
        user.username = name;
        user.layerId = this._layer._id;
        this.userService.addUser(user, user.schoolId).then(function (res) {
            if (res["user"]) {
                var u = res["user"];
                u.schoolId = _this.authService.schoolId;
                u.layerId = _this._layer._id;
                u.fname = fname;
                u.lname = lname;
                u.permission = "student";
                _this.authService.addOperation("הוספת משתמש חדש", "person");
                _this.userService.updateUser(u).then(function (ret) {
                    _this.form.reset();
                });
            }
        });
    };
    LayerComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new http_1.Headers();
            headers.append('Accept', 'application/json');
            var options = new http_1.RequestOptions({ headers: headers });
            this.http.post(window.location.host + "/user/upload", formData, options).subscribe(function (res) {
                var users = res.json();
                if (users) {
                    users.forEach(function (e) {
                        _this.userService.addUser(e, _this.authService.schoolId).then(function (r) {
                            if (r["user"]) {
                                var u = r["user"];
                                u.schoolId = _this.authService.schoolId;
                                u.layerId = _this._layer._id;
                                u.fname = e.fname;
                                u.lname = e.lname;
                                u.permission = "student";
                                _this.userService.updateUser(u).then(function (ret) {
                                    console.log(ret);
                                });
                            }
                        });
                    });
                }
            });
        }
    };
    LayerComponent.prototype.startMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.layerService.getGraph(this._layer._id, this._layer.classes > 0 ? this._layer.classes : 1)];
                    case 1:
                        _a.graph = _b.sent();
                        this._students.forEach(function (u) {
                            _this.graph.forEach(function (g, i) {
                                var group = g.find(function (v) { return v.id == u._id; });
                                if (group)
                                    u.group = i;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(LayerComponent.prototype, "hasGraph", {
        get: function () {
            return !!this.graph;
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.saveMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.layerService.saveMatch(this.graph, this._layer._id)];
                    case 1:
                        _a.sent();
                        this.schoolService.addMatch();
                        return [2 /*return*/];
                }
            });
        });
    };
    LayerComponent.prototype.openStudent = function (s) {
        var _this = this;
        // console.log(s);
        var dialogRef = this.dialog.open(open_student_dialog_component_1.OpenStudentDialogComponent, {
            width: '600px',
            data: {
                user: s,
                positive: this.userService.getUsersByLayer(this._layer._id).filter(function (u) { return s.positivePrefer.includes(u._id); }),
                negative: this.userService.getUsersByLayer(this._layer._id).filter(function (u) { return s.negativePrefer.includes(u._id); })
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.success)
                _this.userService.updateUser(result.user).then(function (u) { });
        });
    };
    LayerComponent.prototype.addNewCharge = function () {
        var _this = this;
        // console.log(s);
        var s = new models_1.User();
        var dialogRef = this.dialog.open(new_layer_charge_dialog_component_1.NewLayerChargeDialogComponent, {
            width: '600px',
            data: {
                user: s
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(result.user)
            if (result && result.success)
                _this.userService.addUser(result.user, _this.authService.schoolId).then(function (u) {
                    if (u["user"]) {
                        s = u["user"];
                        s.fname = result.user.fname;
                        s.lname = result.user.lname;
                        s.permission = "charge";
                        s.layerId = _this._layer._id;
                        s.schoolId = _this.authService.schoolId;
                        _this.userService.updateUser(s).then(function (ret) {
                            // console.log(ret)
                        });
                    }
                });
        });
    };
    LayerComponent = __decorate([
        core_1.Component({
            selector: 'app-layer',
            templateUrl: './layer.component.html',
            styleUrls: ['./layer.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(3, core_1.Inject(forms_1.FormBuilder)),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            service_1.LayerService,
            service_1.UserService,
            forms_1.FormBuilder,
            service_1.AuthService, http_1.Http,
            service_1.SchoolService,
            material_1.MatDialog,
            nav_service_1.NavService])
    ], LayerComponent);
    return LayerComponent;
}(componentBase_model_1.ComponentBase));
exports.LayerComponent = LayerComponent;
//# sourceMappingURL=layer.component.js.map