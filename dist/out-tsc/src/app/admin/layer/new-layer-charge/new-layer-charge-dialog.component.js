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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var NewLayerChargeDialogComponent = (function () {
    function NewLayerChargeDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewLayerChargeDialogComponent.prototype.ngOnInit = function () {
    };
    NewLayerChargeDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close({ success: false });
    };
    NewLayerChargeDialogComponent.prototype.save = function () {
        this.dialogRef.close({ success: true, user: this.data.user });
    };
    NewLayerChargeDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-new-layer-charge-dialog',
            templateUrl: './new-layer-charge-dialog.component.html',
            styleUrls: ['./new-layer-charge-dialog.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], NewLayerChargeDialogComponent);
    return NewLayerChargeDialogComponent;
}());
exports.NewLayerChargeDialogComponent = NewLayerChargeDialogComponent;
//# sourceMappingURL=new-layer-charge-dialog.component.js.map