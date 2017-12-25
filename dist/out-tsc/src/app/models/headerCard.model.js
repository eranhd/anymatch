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
var ItemWithIcon_model_1 = require("./ItemWithIcon.model");
var HeaderCard = (function (_super) {
    __extends(HeaderCard, _super);
    function HeaderCard(icon, title, num, color) {
        var _this = _super.call(this, icon) || this;
        _this.title = title;
        _this.num = num;
        _this.color = color;
        return _this;
    }
    return HeaderCard;
}(ItemWithIcon_model_1.ItemWithIcon));
exports.HeaderCard = HeaderCard;
//# sourceMappingURL=headerCard.model.js.map