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
var forms_1 = require("@angular/forms");
var service_1 = require("../service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(fb, schoolService, authService, router) {
        this.schoolService = schoolService;
        this.authService = authService;
        this.router = router;
        this.title = "כניסה";
        this._createNewSchool = false;
        this._showProgress = false;
        this.rememberMe = false;
        this.move = false;
        this.form = fb.group({
            login: fb.group({
                username: ["", forms_1.Validators.required],
                pass: fb.group({
                    password: ["", forms_1.Validators.required],
                    verifyPassword: [""]
                }, { validator: this.areEqual })
            }),
            newSchool: fb.group({
                name: ["", forms_1.Validators.required],
                code: ["", forms_1.Validators.required]
            })
        });
    }
    LoginComponent.prototype.changeCreateSchool = function () {
        this._createNewSchool = true;
        this.title = "הרשמה";
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var u, user, permiossion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._showProgress = true;
                        u = {};
                        u["username"] = this.form.controls.login["controls"].username.value;
                        u["password"] = this.form.controls.login["controls"].pass.value.password;
                        return [4 /*yield*/, this.authService.login(u, this.rememberMe)];
                    case 1:
                        user = _a.sent();
                        // console.log(user);
                        this._showProgress = false;
                        if (!user["success"]) {
                            if (user["code"] == 1) {
                                console.log("not found");
                            }
                            else {
                                console.log("password invalid");
                            }
                        }
                        else {
                            permiossion = user["user"].permission;
                            if (permiossion === "student")
                                this.router.navigate(["/layout/client"]);
                            else
                                this.router.navigate(["/layout/admin"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var school, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.status === "VALID")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.schoolService.createSchool(this.form.controls.newSchool.value)];
                    case 1:
                        school = _a.sent();
                        user = {};
                        user["username"] = this.form.controls.login["controls"].username.value;
                        user["password"] = this.form.controls.login["controls"].pass.value.password;
                        return [4 /*yield*/, this.authService.signup(user, school._id)];
                    case 2:
                        _a.sent();
                        this.login();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.clear = function () {
        this.form.reset();
    };
    Object.defineProperty(LoginComponent.prototype, "createNewSchool", {
        get: function () {
            return this._createNewSchool;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.areEqual = function (group) {
        var valid = false;
        // console.log(group.controls["password"].value === group.controls["verifyPassword"].value);
        return group.controls["password"].value === group.controls["verifyPassword"].value;
    };
    Object.defineProperty(LoginComponent.prototype, "showProgress", {
        get: function () { return this._showProgress; },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder)),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            service_1.SchoolService,
            service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map