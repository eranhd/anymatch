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
var material_1 = require("@angular/material");
var service_1 = require("../../../service");
var OpenStudentDialogComponent = (function () {
    function OpenStudentDialogComponent(dialogRef, data, layerService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.layerService = layerService;
    }
    OpenStudentDialogComponent.prototype.ngOnInit = function () {
    };
    OpenStudentDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close({ success: false });
    };
    OpenStudentDialogComponent.prototype.removeStudent = function (id, positive) {
        if (positive) {
            this.data.user.positivePrefer = this.data.user.positivePrefer.filter(function (i) { return i != id; });
            this.data.positive = this.data.positive.filter(function (u) { return u._id != id; });
        }
        else {
            this.data.user.negativePrefer = this.data.user.negativePrefer.filter(function (i) { return i != id; });
            this.data.negative = this.data.negative.filter(function (u) { return u._id != id; });
        }
    };
    OpenStudentDialogComponent.prototype.save = function () {
        this.dialogRef.close({ success: true, user: this.data.user });
    };
    Object.defineProperty(OpenStudentDialogComponent.prototype, "students", {
        get: function () {
            return this._students;
            // return this.data.students.map(u =>  u.fname + " " + u.lname );
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenStudentDialogComponent.prototype, "addUser", {
        get: function () {
            if (typeof this._addUser !== "string" && this._addUser) {
                return this._addUser.fname + " " + this._addUser.lname;
            }
            return this._addUser;
        },
        set: function (u) {
            if (typeof u === "string") {
                this._students = this.data.students.filter(function (user) { return user.fname.includes(u) || user.lname.includes(u); });
                // this._addUser = u
                this._addUser = null;
            }
            else
                this._addUser = u;
        },
        enumerable: true,
        configurable: true
    });
    OpenStudentDialogComponent.prototype.addtoPositive = function () {
        if (typeof this._addUser !== "string" && this._addUser) {
            var u = this._addUser;
            this.data.user.positivePrefer.push(u._id);
            this.data.positivePrefer ? this.data.positivePrefer.push(u) : this.data.positivePrefer = [u];
            console.log(this.data.user);
            this._addUser = "";
        }
    };
    OpenStudentDialogComponent.prototype.addToNegative = function () {
        if (typeof this._addUser !== "string" && this._addUser) {
            var u = this._addUser;
            this.data.user.negativePrefer.push(u._id);
            this.data.negativePrefer ? this.data.negativePrefer.push(u) : this.data.negativePrefer = [u];
            this._addUser = "";
        }
    };
    OpenStudentDialogComponent.prototype.addForbidden = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this._addUser !== "string" && this._addUser)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.layerService.forbidden(this._addUser, this.data.user._id, this.data.layerId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(OpenStudentDialogComponent.prototype, "pos", {
        get: function () {
            return this.data.positivePrefer ? this.data.positivePrefer : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenStudentDialogComponent.prototype, "neg", {
        get: function () {
            return this.data.negativePrefer ? this.data.negativePrefer : [];
        },
        enumerable: true,
        configurable: true
    });
    OpenStudentDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-open-student-dialog',
            templateUrl: './open-student-dialog.component.html',
            styleUrls: ['./open-student-dialog.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, service_1.LayerService])
    ], OpenStudentDialogComponent);
    return OpenStudentDialogComponent;
}());
exports.OpenStudentDialogComponent = OpenStudentDialogComponent;
//# sourceMappingURL=open-student-dialog.component.js.map