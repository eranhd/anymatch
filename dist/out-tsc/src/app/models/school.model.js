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
var School = (function (_super) {
    __extends(School, _super);
    function School() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return School;
}(Item_model_1.Item));
exports.School = School;
var SchoolViewModel = (function (_super) {
    __extends(SchoolViewModel, _super);
    function SchoolViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchoolViewModel;
}(School));
exports.SchoolViewModel = SchoolViewModel;
//# sourceMappingURL=school.model.js.map