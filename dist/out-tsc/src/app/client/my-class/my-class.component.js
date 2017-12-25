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
var MyClassComponent = (function () {
    function MyClassComponent(userService, layerService, authService) {
        var _this = this;
        this.userService = userService;
        this.layerService = layerService;
        this.authService = authService;
        this.groups = [];
        this.groups = layerService.getLayerById(this.authService.getUser().layerId).groups;
        // console.log(this.groups)
        this.groups = this.groups.map(function (g) {
            if (g.includes(_this.authService.id))
                return g;
        });
        this.userService.users.subscribe(function (users) {
            _this._students = users.filter(function (user) {
                return _this.groups[0].includes(user._id);
            });
        });
    }
    Object.defineProperty(MyClassComponent.prototype, "students", {
        get: function () {
            return this._students ? this._students : [];
        },
        enumerable: true,
        configurable: true
    });
    MyClassComponent.prototype.ngOnInit = function () {
    };
    MyClassComponent = __decorate([
        core_1.Component({
            selector: 'app-my-class',
            templateUrl: './my-class.component.html',
            styleUrls: ['./my-class.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.UserService, index_1.LayerService, index_1.AuthService])
    ], MyClassComponent);
    return MyClassComponent;
}());
exports.MyClassComponent = MyClassComponent;
//# sourceMappingURL=my-class.component.js.map