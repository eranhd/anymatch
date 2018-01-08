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
var user_model_1 = require("../../models/user.model");
var index_1 = require("../../service/index");
var router_1 = require("@angular/router");
var CardStudentComponent = (function () {
    function CardStudentComponent(msgService, router) {
        this.msgService = msgService;
        this.router = router;
        this.showActions = false;
        this.open = new core_1.EventEmitter();
        this.message = new core_1.EventEmitter();
    }
    CardStudentComponent.prototype.ngOnInit = function () {
    };
    CardStudentComponent.prototype.msgClick = function () {
        this.msgService.startConversationWith(this.user._id);
        console.log("/layout/" + this.msgService.rout + "/messages");
        this.router.navigate(["/layout/" + this.msgService.rout + "/messages"]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.User)
    ], CardStudentComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CardStudentComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CardStudentComponent.prototype, "showActions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CardStudentComponent.prototype, "open", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CardStudentComponent.prototype, "message", void 0);
    CardStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-card-student',
            templateUrl: './card-student.component.html',
            styleUrls: ['./card-student.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.MessageService, router_1.Router])
    ], CardStudentComponent);
    return CardStudentComponent;
}());
exports.CardStudentComponent = CardStudentComponent;
//# sourceMappingURL=card-student.component.js.map