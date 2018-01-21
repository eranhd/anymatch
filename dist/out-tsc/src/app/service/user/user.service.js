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
var controlerService_model_1 = require("../controlerService.model");
var rxjs_1 = require("rxjs");
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, "user", http) || this;
        if (!_this.obUsers)
            _this.initObservable([]);
        return _this;
    }
    UserService.prototype.addUser = function (user, schoolId) {
        return this.create(user);
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.update(user).then(function (updateduser) {
                _this._users = _this._users.map(function (u) {
                    if (u._id != user._id)
                        return u;
                    return user;
                });
                // this._users.push(user);
                _this.ob.next(_this._users);
                res(updateduser);
            });
        });
    };
    UserService.prototype.initObservable = function (data) {
        var _this = this;
        this.obUsers = new rxjs_1.Observable(function (o) {
            _this.ob = o;
            if (_this._users)
                _this.ob.next(_this._users);
            else
                o.next(data);
        });
    };
    UserService.prototype.getAllUsers = function (schoolId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(schoolId)];
                    case 1:
                        _a._users = _b.sent();
                        this._users = this._users
                            .map(function (res, index) {
                            res["position"] = index;
                            return res;
                        });
                        if (this.ob)
                            this.ob.next(this._users);
                        return [2 /*return*/, this._users];
                }
            });
        });
    };
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            if (this.ob)
                this.ob.next(this._users ? this._users : []);
            return this.obUsers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "num", {
        get: function () {
            return this._users ? this._users.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUsersByLayer = function (id) {
        return this._users.filter(function (res) {
            return res.layerId === id;
        });
    };
    UserService.prototype.getUserById = function (id) {
        return this._users.find(function (u) { return u._id == id; });
    };
    Object.defineProperty(UserService.prototype, "hasPreferd", {
        get: function () {
            return this._users.filter(function (u) { return u.negativePrefer.length > 0 || u.positivePrefer.length > 0; }).length;
        },
        enumerable: true,
        configurable: true
    });
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], UserService);
    return UserService;
}(controlerService_model_1.ControlerService));
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map