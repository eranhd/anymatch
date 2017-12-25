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
var OpenStudentDialogComponent = (function () {
    function OpenStudentDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    OpenStudentDialogComponent.prototype.ngOnInit = function () {
    };
    OpenStudentDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close({ success: false });
    };
    OpenStudentDialogComponent.prototype.removeStudent = function (id, positive) {
        if (positive) {
            this.data.user.positivePrefer = this.data.user.positivePrefer.filter(function (i) { return i != id; });
            this.data.positive = this.data.positive.filter(function (u) { return u._id != id; });
        }
        else {
            this.data.user.negativePrefer = this.data.user.negativePrefer.filter(function (i) { return i != id; });
            this.data.negative = this.data.negative.filter(function (u) { return u._id != id; });
        }
    };
    OpenStudentDialogComponent.prototype.save = function () {
        this.dialogRef.close({ success: true, user: this.data.user });
    };
    OpenStudentDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-open-student-dialog',
            templateUrl: './open-student-dialog.component.html',
            styleUrls: ['./open-student-dialog.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], OpenStudentDialogComponent);
    return OpenStudentDialogComponent;
}());
exports.OpenStudentDialogComponent = OpenStudentDialogComponent;
//# sourceMappingURL=open-student-dialog.component.js.map