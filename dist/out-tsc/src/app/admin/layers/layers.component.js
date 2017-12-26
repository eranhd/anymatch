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
var models_1 = require("../../models");
var material_1 = require("@angular/material");
var dialog_new_layer_conponent_1 = require("../dashboard/dialog new layer/dialog-new-layer.conponent");
var dialog_edit_layerconponent_1 = require("../dashboard/dialog-edit-layer/dialog-edit-layerconponent");
var componentBase_model_1 = require("../../componentBase.model");
var nav_service_1 = require("../../service/nav/nav.service");
var LayersComponent = (function (_super) {
    __extends(LayersComponent, _super);
    function LayersComponent(layerService, dialog, authService, userService, navService) {
        var _this = _super.call(this, navService) || this;
        _this.layerService = layerService;
        _this.dialog = dialog;
        _this.authService = authService;
        _this.userService = userService;
        return _this;
    }
    LayersComponent.prototype.addLayer = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_new_layer_conponent_1.DialogNewLayer, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result && result.success) {
                _this.layerService.addLayer(result.layer, _this.authService.getUser().schoolId).then(function (res) {
                    _this.authService.addOperation("הוספת שכבת לימוד חדשה", "add");
                });
            }
        });
    };
    LayersComponent.prototype.ngOnInit = function () {
        this.headerCards = [
            new models_1.HeaderCard("class", "מספר שכבות", this.layerService.num, "#796aee"),
            new models_1.HeaderCard("sort", "ממוצע תלמידים לשכבה", +(this.userService.num / this.layerService.num).toFixed(0), "#ffc36d"),
            new models_1.HeaderCard("show_chart", "ממוצע כיתות לשכבה", this.layerService.num, "#63c3ff")
        ];
    };
    LayersComponent.prototype.editLayer = function (layer) {
        var _this = this;
        console.log(layer);
        var dialogRef = this.dialog.open(dialog_edit_layerconponent_1.DialogEditLayer, {
            width: '350px',
            data: layer
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.success) {
                layer.classes = result.layer.classes;
                layer.name = result.layer.name;
                _this.layerService.updateLayer(layer);
            }
        });
    };
    LayersComponent.prototype.search = function (str) {
    };
    LayersComponent = __decorate([
        core_1.Component({
            selector: 'app-layers',
            templateUrl: './layers.component.html',
            styleUrls: ['./layers.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.LayerService,
            material_1.MatDialog,
            index_1.AuthService,
            index_1.UserService,
            nav_service_1.NavService])
    ], LayersComponent);
    return LayersComponent;
}(componentBase_model_1.ComponentBase));
exports.LayersComponent = LayersComponent;
//# sourceMappingURL=layers.component.js.map