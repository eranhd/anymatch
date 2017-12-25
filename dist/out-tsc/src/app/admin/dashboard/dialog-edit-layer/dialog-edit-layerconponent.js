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
var router_1 = require("@angular/router");
var DialogEditLayer = (function () {
    function DialogEditLayer(dialogRef, router, data, fb) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
        this.layer = data;
        this.form = fb.group({
            name: [this.layer.name, forms_1.Validators.required],
            classes: [this.layer.classes, forms_1.Validators.required]
        });
    }
    DialogEditLayer.prototype.onNoClick = function () {
        this.dialogRef.close({ success: false });
    };
    DialogEditLayer.prototype.addLayer = function () {
        this.dialogRef.close({ success: true, layer: this.form.value });
    };
    DialogEditLayer.prototype.openLayer = function () {
        this.router.navigate(["layout/admin/layer", this.layer._id]);
        this.dialogRef.close({ success: false });
    };
    DialogEditLayer = __decorate([
        core_1.Component({
            selector: 'dialog-edit-layer',
            templateUrl: './dialog-edit-layerconponent.html',
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __param(3, core_1.Inject(forms_1.FormBuilder)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            router_1.Router, Object, forms_1.FormBuilder])
    ], DialogEditLayer);
    return DialogEditLayer;
}());
exports.DialogEditLayer = DialogEditLayer;
//# sourceMappingURL=dialog-edit-layerconponent.js.map