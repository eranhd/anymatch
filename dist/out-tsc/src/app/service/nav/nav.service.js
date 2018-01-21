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
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ItemWithIcon_model_1 = require("../../models/ItemWithIcon.model");
var NavService = (function () {
    function NavService() {
        var _this = this;
        this._pageName = "";
        this._items = [];
        this.searchObservable = new rxjs_1.Observable(function (o) {
            _this.searchObsrver = o;
        });
    }
    NavService.prototype.navForAdmin = function () {
        this._items = [
            new NavItem("ראשי", "admin/dashboard", "home", true),
            new NavItem("שכבות", "admin/layers", "class", false),
            new NavItem("תלמידים", "admin/students", "group", false),
            new NavItem("הגדרות", "admin/setting", "settings", false),
            new NavItem("דואר", "admin/messages", "message", false),
            new NavItem("עזרה", "admin/help", "help", false),
        ];
        this.select(this._items[0]);
    };
    NavService.prototype.navForClient = function () {
        this._items = [
            new NavItem("ראשי", "client/dashboard", "home", true),
            new NavItem("השכבה שלי", "client/myLayer", "school", false),
            new NavItem("הכיתה שלי", "client/myClass", "class", false),
            new NavItem("הגדרות", "client/setting", "settings", false),
            new NavItem("דואר", "client/messages", "message", false),
            new NavItem("עזרה", "", "help", false),
        ];
        this.select(this._items[0]);
    };
    Object.defineProperty(NavService.prototype, "pageName", {
        get: function () {
            return this._pageName;
        },
        enumerable: true,
        configurable: true
    });
    NavService.prototype.select = function (item) {
        this._items.forEach(function (i) { return i.isSelect = false; });
        item.isSelect = true;
        this._pageName = item.text;
    };
    Object.defineProperty(NavService.prototype, "items", {
        get: function () {
            return this._items ? this._items : [];
        },
        enumerable: true,
        configurable: true
    });
    NavService.prototype.search = function (term) {
        this.searchObsrver.next(term);
    };
    Object.defineProperty(NavService.prototype, "searchObser", {
        get: function () {
            return this.searchObservable;
        },
        enumerable: true,
        configurable: true
    });
    NavService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());
exports.NavService = NavService;
var NavItem = (function (_super) {
    __extends(NavItem, _super);
    function NavItem(text, url, icon, isSelect) {
        var _this = _super.call(this, icon) || this;
        _this.text = text;
        _this.url = url;
        _this.isSelect = isSelect;
        return _this;
    }
    return NavItem;
}(ItemWithIcon_model_1.ItemWithIcon));
exports.NavItem = NavItem;
//# sourceMappingURL=nav.service.js.map