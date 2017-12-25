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
var Item_model_1 = require("./Item.model");
var Conversation = (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Conversation;
}(Item_model_1.Item));
exports.Conversation = Conversation;
var ConversationView = (function (_super) {
    __extends(ConversationView, _super);
    function ConversationView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConversationView;
}(Conversation));
exports.ConversationView = ConversationView;
//# sourceMappingURL=conversation.model.js.map