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
var MessagesComponent = (function () {
    function MessagesComponent(messageService, authService) {
        this.messageService = messageService;
        this.authService = authService;
        this.conversation = this.messageService.currentConversation;
        // this.sub = this.messageService._currentConversation.subscribe(c => {
        //   this.conversation = c;
        //   console.log(c)
        // })
    }
    Object.defineProperty(MessagesComponent.prototype, "con", {
        get: function () {
            return this.messageService.conversations;
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.prototype.getName = function (c) {
        var _this = this;
        if (c)
            return c.participants.find(function (res) { return res != _this.authService.id; });
    };
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.MessageService, index_1.AuthService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map