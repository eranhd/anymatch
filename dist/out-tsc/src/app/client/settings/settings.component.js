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
var index_1 = require("../../service/index");
var SettingsComponent = (function () {
    function SettingsComponent(authService) {
        this.authService = authService;
        this.hobbies = [
            "משחקי מחשב", "ציור", "צילום", "מוזיקה", "ספרות", "ריצה",
            "כדורגל", "כדורסל", "אומנות לחימה", "טבע", "גינון", "סרטים"
        ];
        this.user = authService.getUser();
    }
    Object.defineProperty(SettingsComponent.prototype, "errMessage", {
        get: function () {
            if (!this.password || !this.verifyPassword)
                return "חובה למלא סיסמה ואימות סיסמה";
            if (this.password != this.verifyPassword)
                return "הסיסמאות אינן תואמות";
            return "";
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.svae = function (pass) {
        // console.log(this.authService.getUser())
        this.authService._user = this.user;
        this.authService.changePassword(pass, this.password);
    };
    SettingsComponent.prototype.clear = function () {
        this.password = "";
        this.verifyPassword = "";
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.AuthService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map