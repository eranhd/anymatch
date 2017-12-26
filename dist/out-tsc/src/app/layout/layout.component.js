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
var index_1 = require("../service/index");
var nav_service_1 = require("../service/nav/nav.service");
var LayoutComponent = (function () {
    function LayoutComponent(authService, navService, msgService) {
        this.authService = authService;
        this.navService = navService;
        this.msgService = msgService;
        if (this.authService.permission != "") {
            this.authService.permission != "student" ? this.navService.navForAdmin() : this.navService.navForClient();
        }
    }
    LayoutComponent = __decorate([
        core_1.Component({
            selector: "app-layout",
            templateUrl: "./layout.component.html",
            styleUrls: ["./layout.component.scss"]
        }),
        __metadata("design:paramtypes", [index_1.AuthService,
            nav_service_1.NavService,
            index_1.MessageService])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.component.js.map