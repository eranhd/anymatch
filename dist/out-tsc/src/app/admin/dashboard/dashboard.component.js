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
var service_1 = require("../../service");
var models_1 = require("../../models");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var dialog_edit_layerconponent_1 = require("./dialog-edit-layer/dialog-edit-layerconponent");
var material_2 = require("@angular/material");
var models_2 = require("../../models");
var DashboardComponent = (function () {
    function DashboardComponent(schoolService, authService, fb, layerService, classService, userService, dialog) {
        var _this = this;
        this.schoolService = schoolService;
        this.authService = authService;
        this.layerService = layerService;
        this.classService = classService;
        this.userService = userService;
        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'class_rooms', 'students'];
        this.layerService.layers.subscribe(function (res) {
            _this.dataSource = new material_1.MatTableDataSource(res);
        });
    }
    DashboardComponent.prototype.update = function () {
        // this.schoolService.update();
    };
    DashboardComponent.prototype.addClass = function () {
        var _this = this;
        var c = new models_1.Class();
        c.name = this.form.controls.addClass["controls"].name.value;
        var lId = this.layerService.getIdByName(this.form.controls.addClass["controls"].name.value);
        this.classService.addClass(c, this.authService.getUser().schoolId)
            .then(function (res) {
            _this.layerService.addClass(res._id, lId);
            console.log(res);
        });
    };
    DashboardComponent.prototype.addUser = function () {
        var _this = this;
        var u = new models_1.User();
        u.username = this.form.controls.addUser["controls"].name.value;
        u.schoolId = this.authService.getUser().schoolId;
        u.password = "pass" + u.username;
        this.authService.adduser(u, u.schoolId).then(function (user) {
            _this.schoolService.addUser(user._id);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.headerCards = [
            new models_2.HeaderCard("person", "מספר סטודנטים", this.userService.num, "#ff7676"),
            new models_2.HeaderCard("school", "מספר שכבות", this.layerService.num, "#796aee"),
            new models_2.HeaderCard("done", "שיבוצים שבוצעו", this.schoolService.numOfMatch, "#ffc36d"),
            new models_2.HeaderCard("sync", "שיבוצים בתהליך", this.userService.num, "#54e69d")
        ];
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    DashboardComponent.prototype.selectRow = function (layer) {
        var _this = this;
        console.log(layer);
        var dialogRef = this.dialog.open(dialog_edit_layerconponent_1.DialogEditLayer, {
            width: '350px',
            data: layer
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result && result.success)
                _this.layerService.updateLayer(result.layer);
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(2, core_1.Inject(forms_1.FormBuilder)),
        __metadata("design:paramtypes", [service_1.SchoolService,
            service_1.AuthService,
            forms_1.FormBuilder,
            service_1.LayerService,
            service_1.ClassService,
            service_1.UserService,
            material_2.MatDialog])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map