webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_route__ = __webpack_require__("../../../../../src/app/admin/admin.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layer_layer_component__ = __webpack_require__("../../../../../src/app/admin/layer/layer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_compontns_module__ = __webpack_require__("../../../../../src/app/components/compontns.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layers_layers_component__ = __webpack_require__("../../../../../src/app/admin/layers/layers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__students_students_component__ = __webpack_require__("../../../../../src/app/admin/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__ = __webpack_require__("../../../../../src/app/admin/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__help_help_component__ = __webpack_require__("../../../../../src/app/admin/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layer_open_student_dialog_open_student_dialog_component__ = __webpack_require__("../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layer_new_layer_charge_new_layer_charge_dialog_component__ = __webpack_require__("../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { LayoutComponent } from '../layout/layout.component';










var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__admin_route__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_compontns_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layer_layer_component__["a" /* LayerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layers_layers_component__["a" /* LayersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__students_students_component__["a" /* StudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layer_open_student_dialog_open_student_dialog_component__["a" /* OpenStudentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__layer_new_layer_charge_new_layer_charge_dialog_component__["a" /* NewLayerChargeDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__layer_open_student_dialog_open_student_dialog_component__["a" /* OpenStudentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__layer_new_layer_charge_new_layer_charge_dialog_component__["a" /* NewLayerChargeDialogComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_layer_component__ = __webpack_require__("../../../../../src/app/admin/layer/layer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layers_layers_component__ = __webpack_require__("../../../../../src/app/admin/layers/layers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__students_students_component__ = __webpack_require__("../../../../../src/app/admin/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("../../../../../src/app/admin/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help_component__ = __webpack_require__("../../../../../src/app/admin/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");







var routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "layer/:id", component: __WEBPACK_IMPORTED_MODULE_1__layer_layer_component__["a" /* LayerComponent */] },
    { path: "layers", component: __WEBPACK_IMPORTED_MODULE_2__layers_layers_component__["a" /* LayersComponent */] },
    { path: "students", component: __WEBPACK_IMPORTED_MODULE_3__students_students_component__["a" /* StudentsComponent */] },
    { path: "messages", component: __WEBPACK_IMPORTED_MODULE_6__components_messages_messages_component__["a" /* MessagesComponent */] },
    { path: "setting", component: __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */] },
    { path: "help", component: __WEBPACK_IMPORTED_MODULE_5__help_help_component__["a" /* HelpComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n\n  <app-pages-header [items]=headerCards></app-pages-header>\n\n  <div class=\"two_column\">\n    <section>\n      <mat-card>\n        <mat-card-header>\n\n          <mat-card-title>\n            <mat-icon>\n              timer\n            </mat-icon>\n            זמן שנותר עד נעילת השיבוץ הקרוב\n          </mat-card-title>\n        </mat-card-header>\n\n      </mat-card>\n\n      <mat-card>\n        <mat-card-header>\n\n          <mat-card-title>\n            <mat-icon>\n              show_chart\n            </mat-icon>\n            פידבק מתלמידים שעברו שיבוץ\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <canvas baseChart \n          [data]=\"authService.feedback ? authService.feedback : [] \" \n          [labels]=\"[0, 1,2,3,4]\" \n          [options]=\"{ responsive: true }\" \n          [chartType]=\"'bar'\" \n          [colors]=\"[{\n            backgroundColor:'#9b9ba5'\n          }]\"\n          [labels]=\"['']\"\n          ></canvas>\n        </mat-card-content>\n      </mat-card>\n\n      <!-- \n            \n       -->\n      <mat-card>\n        <mat-card-header>\n\n          <mat-card-title>\n            <mat-icon>\n              notifications\n            </mat-icon>\n            התראות\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          בפיתוח\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <mat-icon>\n              help\n            </mat-icon>\n            עזרה וטיפים\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          בפיתוח\n        </mat-card-content>\n      </mat-card>\n    </section>\n    <section>\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <mat-icon>\n              info\n            </mat-icon>\n            פעולות אחרונות\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"last_operation_content\">\n          <div class=\"operation\" [class.odd]=\"i%2 != 0\" *ngFor=\"let o of authService.lastOperation; let i = index\">\n            <mat-icon>\n              {{o.icon}}\n            </mat-icon>\n            <span>\n              {{o.text}}\n            </span>\n          </div>\n        </mat-card-content>\n\n      </mat-card>\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <mat-icon>\n              message\n            </mat-icon>\n            הודעות אחרונות\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          בפיתוח\n        </mat-card-content>\n      </mat-card>\n    </section>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n  width: 100%; }\n  .dashboard .statistics {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 28px; }\n    .dashboard .statistics .section {\n      width: 25%;\n      border-left: 1px solid #eeeeee;\n      border-right: 1px solid #eeeeee;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n      .dashboard .statistics .section .number {\n        font-weight: bold;\n        font-size: 2em; }\n    .dashboard .statistics :last-child, .dashboard .statistics :first-child {\n      border: none; }\n  .dashboard .two_column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .dashboard .two_column section {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 50%;\n      padding: 28px;\n      box-sizing: content-box; }\n      .dashboard .two_column section mat-card {\n        margin: 14px 0;\n        direction: rtl; }\n        .dashboard .two_column section mat-card .prefers {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap; }\n          .dashboard .two_column section mat-card .prefers .inner_div {\n            max-width: 100px;\n            margin: 16px; }\n\n.last_operation_content .operation {\n  padding: 8px;\n  text-align: right;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  background-color: rgba(155, 155, 165, 0.6);\n  border-bottom: 1px solid white; }\n\n.last_operation_content .odd {\n  background-color: rgba(155, 155, 165, 0.3); }\n\n.last_operation_content :first-child {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px; }\n\n.last_operation_content :last-child {\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_edit_layer_dialog_edit_layerconponent__ = __webpack_require__("../../../../../src/app/admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent.ts");
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
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableDataSource */](res);
        });
    }
    DashboardComponent.prototype.update = function () {
        // this.schoolService.update();
    };
    DashboardComponent.prototype.addClass = function () {
        var _this = this;
        var c = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Class */]();
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
        var u = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* User */]();
        u.username = this.form.controls.addUser["controls"].name.value;
        u.schoolId = this.authService.getUser().schoolId;
        u.password = "pass" + u.username;
        this.authService.adduser(u, u.schoolId).then(function (user) {
            _this.schoolService.addUser(user._id);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.headerCards = [
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("person", "מספר סטודנטים", this.userService.num, "#ff7676"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("school", "מספר שכבות", this.layerService.num, "#796aee"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("done", "שיבוצים שבוצעו", this.schoolService.numOfMatch, "#ffc36d"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("sync", "שיבוצים בתהליך", this.userService.num, "#54e69d")
        ];
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    DashboardComponent.prototype.selectRow = function (layer) {
        var _this = this;
        console.log(layer);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialog_edit_layer_dialog_edit_layerconponent__["a" /* DialogEditLayer */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatPaginator */])
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["f" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__service__["d" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["b" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["g" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/help/help.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/admin/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/help/help.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/layer/layer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layer\">\n  <app-pages-header [items]=headerCards></app-pages-header>\n\n\n  <mat-card class=\"layer_data\" *ngIf=\"addStudentFlag\">\n\n    <div>\n      <!-- <button mat-raised-button color=\"primary\" (click)=\"changeFlag()\">{{addStudentButtonText}}</button> -->\n      <span [formGroup]=\"form\">\n        <mat-form-field>\n          <input matInput text=\"text\" formControlName=\"username\" #sname placeholder=\"ת.ז\" />\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput text=\"text\" formControlName=\"fname\" #fname placeholder=\"שם פרטי\" />\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput text=\"text\" formControlName=\"lname\" #lname placeholder=\"שם משפחה\" />\n        </mat-form-field>\n\n        <button *ngIf=\"sname.value\" mat-raised-button color=\"primary\" (click)=\"addStudent(sname.value, fname.value, lname.value)\">הוסף</button>\n\n      </span>\n    </div>\n  </mat-card>\n\n  <!-- <mat-card *ngIf=\"hasGraph\"> -->\n\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <mat-icon>\n          group\n        </mat-icon>\n        כל התלמידים |\n        <span *ngIf=\"layer.lockTime\">\n           תהליך הבחירה פתוח עד ל {{layer.lockTime | date:\"dd.MM.yy\"}}\n        </span>\n        <span *ngIf=\"!layer.lockTime\">\n          התלמידים אינם יכולים לבחור שיבוץ\n        </span>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <div class=\"div_action\">\n          <button mat-icon-button matTooltip=\"הוסף תלמיד חדש\" (click)=\"changeFlag()\">\n            <mat-icon>\n              add\n            </mat-icon>\n          </button>\n\n          <button mat-icon-button matTooltip=\"הוסף אחראי שיבוץ חדש\" (click)=\"addNewCharge()\">\n            <mat-icon>\n              add\n            </mat-icon>\n          </button>\n\n          <button mat-icon-button (click)=\"fileInput.click()\" matTooltip=\"העלה קובץ xls\">\n            <mat-icon>\n              file_upload\n            </mat-icon>\n            <span>\n              <input class=\"btn_upload\" type=\"file\" #fileInput (change)=\"fileChange($event)\" accept=\".xlsx\">\n            </span>\n          </button>\n\n          <button mat-icon-button matTooltip=\"חלק קבוצה זו\" (click)=\"startMatch()\">\n            <mat-icon>\n              group_work\n            </mat-icon>\n          </button>\n\n          <button mat-icon-button matTooltip=\"שמור שיבוץ זה\" *ngIf=\"hasGraph\" (click)=\"saveMatch()\">\n            <mat-icon>\n              save\n            </mat-icon>\n          </button>\n\n          <button mat-icon-button matTooltip=\"שנה תצוגה לטבלה\" *ngIf=\"layer.groups\" (click)=\"showTable = !showTable\">\n            <mat-icon>\n              swap_horiz\n            </mat-icon>\n          </button>\n\n\n          <mat-form-field [hidden]=\"true\">\n            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lockTime\" placeholder=\"Choose a date\">\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <button mat-icon-button matTooltip=\"פתח זמן לשיבוץ\" (click)=\"picker.open()\">\n            <mat-icon>\n              timer\n            </mat-icon>\n          </button>\n        </div>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div *ngIf=\"!showTable\" class=\"div_card_student\">\n        <div class=\"inner_div\" *ngFor=\"let u of students\">\n          <app-card-student [showActions]=true [user]=u [color]=\"colors[u.group]\" (open)=\"openStudent($event)\"></app-card-student>\n        </div>\n\n      </div>\n      <div class=\"inner_div\" *ngIf=\"layer.groups && showTable\">\n        <table>\n          <thead>\n            <th *ngFor=\"let name of classesName; let i = index\">\n              {{name}}\n            </th>\n          </thead>\n          <tbody>\n            <td *ngFor=\"let name of classesName; let i = index\">\n              <table>\n                <tr *ngFor=\"let g of layer.groups[i]\">\n                  {{displayName(g)}}\n                </tr>\n              </table>\n            </td>\n          </tbody>\n        </table>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <mat-icon>\n          show_chart\n        </mat-icon>\n        גרף\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"grapg_div\">\n        <app-graph [graph]=graph></app-graph>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/layer/layer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layer {\n  padding: 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .layer .div_action {\n    padding: 16px; }\n    .layer .div_action span {\n      position: relative;\n      overflow: hidden; }\n      .layer .div_action span .btn_upload {\n        visibility: hidden;\n        position: absolute;\n        overflow: hidden;\n        width: 0px;\n        height: 0px;\n        border: none;\n        margin: 0;\n        padding: 0; }\n  .layer mat-card-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layer .div_card_student {\n    margin: 8px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n    .layer .div_card_student .inner_div {\n      margin: 8px;\n      width: 17vw; }\n  .layer .grapg_div {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/layer/layer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__open_student_dialog_open_student_dialog_component__ = __webpack_require__("../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_layer_charge_new_layer_charge_dialog_component__ = __webpack_require__("../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_nav_nav_service__ = __webpack_require__("../../../../../src/app/service/nav/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentBase_model__ = __webpack_require__("../../../../../src/app/componentBase.model.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var LayerComponent = (function (_super) {
    __extends(LayerComponent, _super);
    function LayerComponent(activatedRoute, layerService, userService, fb, authService, http, schoolService, dialog, navService) {
        var _this = _super.call(this, navService) || this;
        _this.activatedRoute = activatedRoute;
        _this.layerService = layerService;
        _this.userService = userService;
        _this.authService = authService;
        _this.http = http;
        _this.schoolService = schoolService;
        _this.dialog = dialog;
        _this._addStudentFlag = false;
        _this.addStudentButtonText = "הוסף תלמיד";
        _this.showTable = false;
        _this.form = fb.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required],
            fname: "",
            lname: ""
        });
        _this.activatedRoute.params.subscribe(function (res) {
            _this._layer = _this.layerService.getLayerById(res["id"]);
            _this.classesName = [];
            for (var i = 0; i < _this._layer.classes; i++)
                _this.classesName.push(_this._layer.name + " " + (i + 1));
            _this.userService.users.subscribe(function (users) {
                if (users)
                    _this._students = users.filter(function (u) {
                        // console.log(u.layerId + " ," + res["id"])
                        return u.layerId === res["id"];
                    }).sort(function (a, b) {
                        return a.username.localeCompare(b.username);
                    }).sort(function (a, b) { return a.group ? (a.group > b.group ? 1 : -1) : -1; });
            });
        });
        return _this;
    }
    Object.defineProperty(LayerComponent.prototype, "layer", {
        get: function () {
            return this._layer;
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.ngOnInit = function () {
        this.headerCards = [
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("class", "מספר כיתות", this.layer.classes, "#796aee"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("done_all", "תלמדים שמילאו העדפות", this.layerService.num, "#ffc36d"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("supervisor_account", "מספר תלמידים", this.userService.getUsersByLayer(this.layer._id).length, "#63c3ff"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("show_chart", "מספר שיבוצים שבוצעו", this.layerService.num, "#63c3ff")
        ];
    };
    Object.defineProperty(LayerComponent.prototype, "addStudentFlag", {
        get: function () {
            return this._addStudentFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerComponent.prototype, "students", {
        get: function () {
            var _this = this;
            return this.searchTerm != "" ? this._students.filter(function (s) {
                return s.fname.includes(_this.searchTerm) || s.lname.includes(_this.searchTerm) || s.username.includes(_this.searchTerm);
            }) : this._students;
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.changeFlag = function () {
        this._addStudentFlag = !this._addStudentFlag;
    };
    Object.defineProperty(LayerComponent.prototype, "lockTime", {
        get: function () {
            return this._layer.lockTime;
        },
        set: function (e) {
            this._layer.lockTime = e;
            this.layerService.updateLayer(this._layer).then(function (res) { });
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.displayName = function (id) {
        var u = this._students.find(function (u) { return id == u._id; });
        return u.fname + " " + u.lname;
    };
    LayerComponent.prototype.addStudent = function (name, fname, lname) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* User */]();
        user.schoolId = this.authService.getUser().schoolId;
        user.username = name;
        user.layerId = this._layer._id;
        this.userService.addUser(user, user.schoolId).then(function (res) {
            if (res["user"]) {
                var u = res["user"];
                u.schoolId = _this.authService.schoolId;
                u.layerId = _this._layer._id;
                u.fname = fname;
                u.lname = lname;
                u.permission = "student";
                _this.authService.addOperation("הוספת משתמש חדש", "person");
                _this.userService.updateUser(u).then(function (ret) {
                    _this.form.reset();
                });
            }
        });
    };
    LayerComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(window.location.host + "/user/upload", formData, options).subscribe(function (res) {
                var users = res.json();
                if (users) {
                    users.forEach(function (e) {
                        _this.userService.addUser(e, _this.authService.schoolId).then(function (r) {
                            if (r["user"]) {
                                var u = r["user"];
                                u.schoolId = _this.authService.schoolId;
                                u.layerId = _this._layer._id;
                                u.fname = e.fname;
                                u.lname = e.lname;
                                u.permission = "student";
                                _this.userService.updateUser(u).then(function (ret) {
                                    console.log(ret);
                                });
                            }
                        });
                    });
                }
            });
        }
    };
    LayerComponent.prototype.startMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.layerService.getGraph(this._layer._id, this._layer.classes > 0 ? this._layer.classes : 1)];
                    case 1:
                        _a.graph = _b.sent();
                        this._students.forEach(function (u) {
                            _this.graph.forEach(function (g, i) {
                                var group = g.find(function (v) { return v.id == u._id; });
                                if (group)
                                    u.group = i;
                            });
                        });
                        this._students = this._students.sort(function (a, b) { return a.group > b.group ? 1 : -1; });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(LayerComponent.prototype, "hasGraph", {
        get: function () {
            return !!this.graph;
        },
        enumerable: true,
        configurable: true
    });
    LayerComponent.prototype.saveMatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.layerService.saveMatch(this.graph, this._layer._id)];
                    case 1:
                        _a.sent();
                        this.schoolService.addMatch();
                        return [2 /*return*/];
                }
            });
        });
    };
    LayerComponent.prototype.openStudent = function (s) {
        var _this = this;
        // console.log(s);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__open_student_dialog_open_student_dialog_component__["a" /* OpenStudentDialogComponent */], {
            width: '600px',
            data: {
                user: s,
                positivePrefer: this.userService.getUsersByLayer(this._layer._id).filter(function (u) { return s.positivePrefer.includes(u._id); }),
                negativePrefer: this.userService.getUsersByLayer(this._layer._id).filter(function (u) { return s.negativePrefer.includes(u._id); }),
                students: this._students,
                layerId: this._layer._id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.success)
                _this.userService.updateUser(result.user).then(function (u) { });
        });
    };
    LayerComponent.prototype.addNewCharge = function () {
        var _this = this;
        // console.log(s);
        var s = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* User */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__new_layer_charge_new_layer_charge_dialog_component__["a" /* NewLayerChargeDialogComponent */], {
            width: '600px',
            data: {
                user: s
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(result.user)
            if (result && result.success)
                _this.userService.addUser(result.user, _this.authService.schoolId).then(function (u) {
                    if (u["user"]) {
                        s = u["user"];
                        s.fname = result.user.fname;
                        s.lname = result.user.lname;
                        s.permission = "charge";
                        s.layerId = _this._layer._id;
                        s.schoolId = _this.authService.schoolId;
                        _this.userService.updateUser(s).then(function (ret) {
                            // console.log(ret)
                        });
                    }
                });
        });
    };
    LayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layer',
            template: __webpack_require__("../../../../../src/app/admin/layer/layer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/layer/layer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__service__["d" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_3__service__["g" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__service__["f" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__service_nav_nav_service__["a" /* NavService */]])
    ], LayerComponent);
    return LayerComponent;
}(__WEBPACK_IMPORTED_MODULE_10__componentBase_model__["a" /* ComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput placeholder=\"ת.ז\" [(ngModel)]=\"data.user.username\">\n</mat-form-field>\n<mat-form-field>\n  <input matInput placeholder=\"שם פרטי\" [(ngModel)]=\"data.user.fname\">\n</mat-form-field>\n<mat-form-field>\n  <input matInput placeholder=\"שם פרטי\" [(ngModel)]=\"data.user.lname\">\n</mat-form-field>\n\n<button mat-raised-button (click)=\"save()\">\n  שמור\n</button>\n<button mat-raised-button (click)=\"onNoClick()\">\n  בטל\n</button>"

/***/ }),

/***/ "../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLayerChargeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-layer-charge-dialog',
            template: __webpack_require__("../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/layer/new-layer-charge/new-layer-charge-dialog.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], NewLayerChargeDialogComponent);
    return NewLayerChargeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"show-student-card\">\n  <mat-card-header>\n    <mat-card-title>\n      {{data?.user?.fname}} {{data?.user?.lname}}\n    </mat-card-title>\n    <mat-card-subtitle>\n      בלחיצה על אחד הכרטיסיות יוסר התלמיד מהרשימה\n    </mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content>\n    <h3>\n      <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"text\" placeholder=\"הוסף לרשימה\" matInput name=\"addUserInput\" [(ngModel)]=addUser [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let u of students\" [value]=\"u.username \">\n              {{u.fname + ' ' + u.lname }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <button mat-icon-button matTooltip=\"הוסף לרשימת העדפות חיוביות\" (click)=addtoPositive()>\n          <mat-icon>\n            arrow_drop_up\n          </mat-icon>\n        </button>\n        <button mat-icon-button matTooltip=\"הוסף לרשימת העדפות שליליות\" (click)=addToNegative()>\n          <mat-icon>\n            arrow_drop_down\n          </mat-icon>\n        </button>\n        <button mat-icon-button matTooltip=\"מנע משני הסטודנטים להשתבץ יחד\">\n          <mat-icon>\n            block\n          </mat-icon>\n        </button>\n      </form>\n    </h3>\n    <h3 *ngIf=\"data?.positive?.length != 0 || data?.negative?.length != 0 \">\n      תלמידים שנבחרו\n    </h3>\n    <div class=\"div_card_student\">\n      <div class=\"inner_div\" *ngFor=\"let u of pos\">\n        <app-card-student (click)=\"removeStudent(u._id, true)\" [user]=u [color]=\"'#54e69d'\"></app-card-student>\n      </div>\n      <div class=\"inner_div\" *ngFor=\"let u of neg\">\n        <app-card-student (click)=\"removeStudent(u._id, false)\" [user]=u [color]=\"'#ff7676'\"></app-card-student>\n      </div>\n      <div *ngIf=\"data?.positive?.length == 0 && data?.negative?.length == 0 \">\n        לא נבחרו תלמידים\n      </div>\n    </div>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"save()\">\n      שמור\n    </button>\n    <button mat-raised-button (click)=\"onNoClick()\">\n      בטל\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-student-card .div_card_student {\n  margin: 8px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  .show-student-card .div_card_student .inner_div {\n    margin: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenStudentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OpenStudentDialogComponent = (function () {
    function OpenStudentDialogComponent(dialogRef, data, layerService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.layerService = layerService;
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
    Object.defineProperty(OpenStudentDialogComponent.prototype, "students", {
        get: function () {
            return this.data.students;
            // return this.data.students.map(u =>  u.fname + " " + u.lname );
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenStudentDialogComponent.prototype, "addUser", {
        get: function () {
            return this._addUser;
        },
        set: function (u) {
            console.log(u);
            this._addUser = u;
        },
        enumerable: true,
        configurable: true
    });
    OpenStudentDialogComponent.prototype.addtoPositive = function () {
        var _this = this;
        var u = this.students.find(function (u) { return u.username == _this._addUser; });
        // console.log(u)
        this.data.user.positivePrefer.push(u._id);
        this.data.positivePrefer ? this.data.positivePrefer.push(u) : this.data.positivePrefer = [u];
        console.log(this.data.user);
        this._addUser = "";
    };
    OpenStudentDialogComponent.prototype.addToNegative = function () {
        var _this = this;
        var u = this.students.find(function (u) { return u.username == _this._addUser; });
        this.data.user.negativePrefer.push(u._id);
        this.data.negativePrefer ? this.data.negativePrefer.push(u) : this.data.negativePrefer = [u];
        this._addUser = "";
    };
    OpenStudentDialogComponent.prototype.addForbidden = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.layerService.forbidden(this._addUser, this.data.user._id, this.data.layerId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(OpenStudentDialogComponent.prototype, "pos", {
        get: function () {
            return this.data.positivePrefer ? this.data.positivePrefer : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenStudentDialogComponent.prototype, "neg", {
        get: function () {
            return this.data.negativePrefer ? this.data.negativePrefer : [];
        },
        enumerable: true,
        configurable: true
    });
    OpenStudentDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-open-student-dialog',
            template: __webpack_require__("../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/layer/open-student-dialog/open-student-dialog.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__service__["d" /* LayerService */]])
    ], OpenStudentDialogComponent);
    return OpenStudentDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/layers/layers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layers\">\n\n  <app-pages-header [items]=headerCards></app-pages-header>\n\n  <div class=\"layers_card\">\n    <mat-card class=\"layer_card\" *ngFor=\"let l of this.layerService.layers | async\">\n      <mat-card-header>\n        <mat-card-title>\n          <h1>\n            {{l.name}}            \n          </h1>\n\n        </mat-card-title>\n\n\n\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          מספר כיתות {{l.classes}}\n        </div>\n        <div>\n          מספר תלמידים {{userService.getUsersByLayer(l._id).length}}\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button [routerLink]=\"['/layout/admin/layer', l._id]\">\n          <mat-icon>\n            open_in_new\n          </mat-icon>\n          פתח\n        </button>\n        <button mat-raised-button (click)=editLayer(l)>\n          <mat-icon>\n            mode_edit\n          </mat-icon>\n          ערוך\n        </button>\n        <button mat-raised-button (click)=\"layerService.remove(l._id)\">\n          <mat-icon>\n            delete\n          </mat-icon>\n          מחק\n        </button>\n\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n  <button (click)=\"addLayer()\" mat-fab matTooltip=\"הוסף שכבה חדשה\">\n    <mat-icon>\n      add\n    </mat-icon>\n  </button>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/layers/layers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layers {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .layers .layers_card {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .layers .layers_card .layer_card {\n      min-width: 23%;\n      margin: 1%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/layers/layers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dialog_new_layer_dialog_new_layer_conponent__ = __webpack_require__("../../../../../src/app/admin/dashboard/dialog new layer/dialog-new-layer.conponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dialog_edit_layer_dialog_edit_layerconponent__ = __webpack_require__("../../../../../src/app/admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentBase_model__ = __webpack_require__("../../../../../src/app/componentBase.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_nav_nav_service__ = __webpack_require__("../../../../../src/app/service/nav/nav.service.ts");
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dashboard_dialog_new_layer_dialog_new_layer_conponent__["a" /* DialogNewLayer */], {
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
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("class", "מספר שכבות", this.layerService.num, "#796aee"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("sort", "ממוצע תלמידים לשכבה", +(this.userService.num / this.layerService.num).toFixed(0), "#ffc36d"),
            new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* HeaderCard */]("show_chart", "ממוצע כיתות לשכבה", this.layerService.num, "#63c3ff")
        ];
    };
    LayersComponent.prototype.editLayer = function (layer) {
        var _this = this;
        console.log(layer);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dashboard_dialog_edit_layer_dialog_edit_layerconponent__["a" /* DialogEditLayer */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layers',
            template: __webpack_require__("../../../../../src/app/admin/layers/layers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/layers/layers.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["d" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__service_index__["g" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__service_nav_nav_service__["a" /* NavService */]])
    ], LayersComponent);
    return LayersComponent;
}(__WEBPACK_IMPORTED_MODULE_6__componentBase_model__["a" /* ComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"settings\">\n  <div class=\"first_class\">\n    <mat-card>\n      <h2>\n        <span>{{authService.getUser().username}}</span>\n      </h2>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"שם פרטי\" [(ngModel)]=\"authService.getUser().fname\" />\n        </mat-form-field>\n\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"שם פרטי\" [(ngModel)]=\"authService.getUser().lname\" />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput type=password placeholder=\"סיסמה\" #pass />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput type=password placeholder=\"סיסמה חדשה\" [(ngModel)]=\"password\" />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput type=password placeholder=\"אימות סיסמה\" [(ngModel)]=\"verifyPassword\" />\n        </mat-form-field>\n      </div>\n      <div>{{errMessage}}</div>\n      <div>\n        <button mat-raised-button (click)=\"svae(pass.value)\">שמור</button>\n        <button mat-raised-button >נקה טופס</button>\n      </div>\n\n\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .settings .first_class {\n    width: 50%; }\n    .settings .first_class .mat-form-field {\n      width: 100%;\n      text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(SettingsComponent.prototype, "errMessage", {
        get: function () {
            if (!this.password || !this.verifyPassword)
                return "חובה למלא סיסמה ואימות סיסמה";
            if (this.password != this.verifyPassword)
                return "הסיסמאות אינן תואמות";
            return "";
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.svae = function (pass) {
        // console.log(this.authService.getUser())
        this.authService.changePassword(pass, this.password);
    };
    SettingsComponent.prototype.clear = function () {
        this.password = "";
        this.verifyPassword = "";
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/admin/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/settings/settings.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"students\">\r\n  <mat-spinner class=\"spinner\" [diameter]=100 *ngIf=\"!students\" [strokeWidth]=\"5\"></mat-spinner>\r\n  <div class=\"div_card_student\">\r\n    <div class=\"inner_div\" *ngFor=\"let u of students\">\r\n      <app-card-student [user]=u></app-card-student>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/students/students.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".students .div_card_student {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .students .div_card_student .inner_div {\n    width: 30%;\n    margin: 1.5%; }\n\n.spinner {\n  position: absolute !important;\n  top: 50%;\n  left: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentBase_model__ = __webpack_require__("../../../../../src/app/componentBase.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_nav_nav_service__ = __webpack_require__("../../../../../src/app/service/nav/nav.service.ts");
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




var StudentsComponent = (function (_super) {
    __extends(StudentsComponent, _super);
    function StudentsComponent(userService, authService, navService) {
        var _this = _super.call(this, navService) || this;
        _this.userService = userService;
        _this.authService = authService;
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
    };
    StudentsComponent.prototype.ngOnDestroy = function () {
        if (this.obs)
            this.obs.unsubscribe();
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-students',
            template: __webpack_require__("../../../../../src/app/admin/students/students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/students/students.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["g" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__service_nav_nav_service__["a" /* NavService */]])
    ], StudentsComponent);
    return StudentsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__componentBase_model__["a" /* ComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/componentBase.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentBase; });
var ComponentBase = (function () {
    function ComponentBase(navService) {
        var _this = this;
        this.navService = navService;
        this.searchTerm = "";
        this.colors = [
            '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
        ];
        this.navService.searchObser.subscribe(function (s) {
            _this.search(s);
        });
    }
    ComponentBase.prototype.search = function (str) {
        this.searchTerm = str;
    };
    return ComponentBase;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map