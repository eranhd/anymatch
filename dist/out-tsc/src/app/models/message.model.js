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
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message() {
        this.from = "";
        this.text = "";
        this.date = new Date();
        this.isRead = {};
    }
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