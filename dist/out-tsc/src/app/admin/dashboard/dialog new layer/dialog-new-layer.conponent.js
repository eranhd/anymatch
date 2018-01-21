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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var DialogNewLayer = (function () {
    function DialogNewLayer(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = fb.group({
            name: ["", forms_1.Validators.required],
            classes: [0, forms_1.Validators.required],
            maleAndFemale: [false],
            maleClasses: [0],
            femaleClasses: [0]
        });
    }
    DialogNewLayer.prototype.onNoClick = function () {
        this.dialogRef.close({ success: false });
    };
    DialogNewLayer.prototype.addLayer = function () {
        this.dialogRef.close({ success: true, layer: this.form.value });
    };
    DialogNewLayer = __decorate([
        core_1.Component({
            selector: 'dialog-new-layer',
            templateUrl: './dialog-new-layer.html',
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)), __param(2, core_1.Inject(forms_1.FormBuilder)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder])
    ], DialogNewLayer);
    return DialogNewLayer;
}());
exports.DialogNewLayer = DialogNewLayer;
//# sourceMappingURL=dialog-new-layer.conponent.js.map