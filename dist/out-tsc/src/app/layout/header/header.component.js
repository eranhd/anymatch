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
var HeaderComponent = (function () {
    function HeaderComponent(msgService, authService) {
        this.msgService = msgService;
        this.authService = authService;
        this.newMessage = 0;
        this.search = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getName = function (c) {
        var _this = this;
        if (c)
            return c.participants.find(function (res) { return res != _this.authService.id; });
    };
    HeaderComponent.prototype.open = function (c) {
        this.msgService.currentConversation = this.msgService.getConversationById(c._id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HeaderComponent.prototype, "newMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HeaderComponent.prototype, "search", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.MessageService,
            index_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map