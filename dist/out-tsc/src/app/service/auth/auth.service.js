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
var http_service_1 = require("../http/http.service");
var path_enum_1 = require("../path.enum");
var SIGNUP = "signup";
var LOGIN = "login";
var UPDATE = "user/update";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signup = function (user, id) {
        return __awaiter(this, void 0, void 0, function () {
            var u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(path_enum_1.path.SIGNUP, user)];
                    case 1:
                        u = _a.sent();
                        if (!u["success"]) return [3 /*break*/, 3];
                        u["user"].schoolId = id;
                        this._user = u["user"];
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.adduser = function (user, id) {
        return __awaiter(this, void 0, void 0, function () {
            var u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(path_enum_1.path.SIGNUP, user)];
                    case 1:
                        u = _a.sent();
                        if (!u["success"]) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, u];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (res, error) {
            // console.log("in auth");
            _this.http.post(LOGIN, user).then(function (u) {
                if (u["success"]) {
                    _this._user = u["user"];
                    localStorage.setItem("auth", JSON.stringify(user));
                    console.log(_this._user);
                }
                res(u);
            });
        });
    };
    AuthService.prototype.getUser = function () {
        return this._user;
    };
    Object.defineProperty(AuthService.prototype, "schoolId", {
        get: function () {
            if (this._user)
                return this._user.schoolId;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            if (this._user)
                return this._user._id;
            return "";
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.update = function () {
        var _this = this;
        return new Promise(function (res, error) {
            // console.log("in auth");
            _this.http.post(UPDATE, _this._user).then(function (r) {
                if (r["success"])
                    _this._user = r["user"];
                res(r["success"]);
            });
        });
    };
    AuthService.prototype.addSchool = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._user.schoolId = id;
                        return [4 /*yield*/, this.update()];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, item];
                }
            });
        });
    };
    AuthService.prototype.changePassword = function (password, newPassword) {
        var _this = this;
        this.http.post("user/changePassword", { user: this._user, password: password, newPassword: newPassword }).then(function (u) {
            if (u["success"]) {
                _this._user = u["user"];
                _this._user.isLogin = true;
            }
        });
    };
    AuthService.prototype.addPositive = function (id) {
        if (!this._user.positivePrefer)
            this._user.positivePrefer = [];
        this._user.positivePrefer.push(id);
        return true;
    };
    AuthService.prototype.addNegative = function (id) {
        if (!this._user.negativePrefer)
            this._user.negativePrefer = [];
        this._user.negativePrefer.push(id);
        return true;
    };
    AuthService.prototype.isAuth = function () {
        return !!this._user;
    };
    Object.defineProperty(AuthService.prototype, "permission", {
        get: function () {
            return this._user ? this._user.permission : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "displayName", {
        get: function () {
            return this._user.fname + " " + this._user.lname;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map