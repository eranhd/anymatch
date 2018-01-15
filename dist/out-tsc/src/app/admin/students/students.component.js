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
var index_1 = require("../../service/index");
var componentBase_model_1 = require("../../componentBase.model");
var nav_service_1 = require("../../service/nav/nav.service");
var index_2 = require("../../models/index");
var StudentsComponent = (function (_super) {
    __extends(StudentsComponent, _super);
    function StudentsComponent(userService, authService, layerService, navService) {
        var _this = _super.call(this, navService) || this;
        _this.userService = userService;
        _this.authService = authService;
        _this.layerService = layerService;
        if (_this.userService.num == 0)
            _this.userService.getAllUsers(_this.authService.schoolId).then(function (u) {
                _this.obs = _this.userService.users.subscribe(function (users) {
                    _this._students = users;
                });
            });
        else {
            _this.obs = _this.userService.users.subscribe(function (users) {
                _this._students = users;
            });
        }
        return _this;
    }
    Object.defineProperty(StudentsComponent.prototype, "students", {
        get: function () {
            var _this = this;
            return this.searchTerm != "" ? this._students.filter(function (s) {
                return s.fname.includes(_this.searchTerm) || s.lname.includes(_this.searchTerm) || s.username.includes(_this.searchTerm);
            }) : this._students;
        },
        enumerable: true,
        configurable: true
    });
    StudentsComponent.prototype.ngOnInit = function () {
        this.headerCards = [
            new index_2.HeaderCard("group", "תלמדים שמילאו העדפות", this.userService.hasPreferd, "#ffc36d"),
            new index_2.HeaderCard("supervisor_account", "מספר תלמידים", this.userService.num, "#63c3ff"),
        ];
    };
    StudentsComponent.prototype.ngOnDestroy = function () {
        if (this.obs)
            this.obs.unsubscribe();
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'app-students',
            templateUrl: './students.component.html',
            styleUrls: ['./students.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.UserService,
            index_1.AuthService,
            index_1.LayerService,
            nav_service_1.NavService])
    ], StudentsComponent);
    return StudentsComponent;
}(componentBase_model_1.ComponentBase));
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map