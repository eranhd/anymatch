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
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var Message = (function () {
    function Message() {
        this.from = "";
        this.text = "";
        this.date = new Date();
        this.isRead = {};
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Message.prototype, "from", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Message.prototype, "text", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Date)
    ], Message.prototype, "date", void 0);
    return Message;
}());
exports.Message = Message;
var MessageView = (function (_super) {
    __extends(MessageView, _super);
    function MessageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageView;
}(Message));
exports.MessageView = MessageView;
//# sourceMappingURL=message.model.js.map