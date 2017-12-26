webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module"
	],
	"app/client/client.module": [
		"../../../../../src/app/client/client.module.ts",
		"client.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dialog new layer/dialog-new-layer.conponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogNewLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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



var DialogNewLayer = (function () {
    function DialogNewLayer(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = fb.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            classes: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    DialogNewLayer.prototype.onNoClick = function () {
        this.dialogRef.close({ success: false });
    };
    DialogNewLayer.prototype.addLayer = function () {
        this.dialogRef.close({ success: true, layer: this.form.value });
    };
    DialogNewLayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-new-layer',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dialog new layer/dialog-new-layer.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogNewLayer);
    return DialogNewLayer;
}());



/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dialog new layer/dialog-new-layer.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>יצירת שכבה חדשה</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"form\">\r\n            <mat-form-field>\r\n                <input matInput text=\"text\" formControlName=\"name\" placeholder=\"שם\" />\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"classes\" placeholder=\"מספר כיתות\" />\r\n            </mat-form-field>\r\n        </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button (click)=\"addLayer()\">Add</button>\r\n        <button mat-button>Clear</button>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>עריכת שכבה</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"form\">\r\n            <mat-form-field>\r\n                <input matInput text=\"text\" formControlName=\"name\" placeholder=\"שם השכבה\" />\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"classes\" placeholder=\"מספר הכיתות\" />\r\n            </mat-form-field>\r\n        </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button (click)=\"addLayer()\">שמור</button>\r\n        <button mat-button (click)=\"openLayer()\">פתח שכבה</button>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogEditLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var DialogEditLayer = (function () {
    function DialogEditLayer(dialogRef, router, data, fb) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
        this.layer = data;
        this.form = fb.group({
            name: [this.layer.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            classes: [this.layer.classes, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-edit-layer',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogEditLayer);
    return DialogEditLayer;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  width: 100vw;\n  height: 100vh; }\n\napp-layout {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_compontns_module__ = __webpack_require__("../../../../../src/app/components/compontns.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layout_header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_nav_nav_component__ = __webpack_require__("../../../../../src/app/layout/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_nav_nav_service__ = __webpack_require__("../../../../../src/app/service/nav/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_dashboard_dialog_new_layer_dialog_new_layer_conponent__ = __webpack_require__("../../../../../src/app/admin/dashboard/dialog new layer/dialog-new-layer.conponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_dashboard_dialog_edit_layer_dialog_edit_layerconponent__ = __webpack_require__("../../../../../src/app/admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_size_directive__ = __webpack_require__("../../../../../src/app/directives/size.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var config = { url: 'http://localhost:3000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__layout_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_dashboard_dialog_new_layer_dialog_new_layer_conponent__["a" /* DialogNewLayer */],
                __WEBPACK_IMPORTED_MODULE_19__admin_dashboard_dialog_edit_layer_dialog_edit_layerconponent__["a" /* DialogEditLayer */],
                __WEBPACK_IMPORTED_MODULE_20__directives_size_directive__["a" /* SizeDirective */]
                // DashboardComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_route__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_13__components_compontns_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_dashboard_dialog_new_layer_dialog_new_layer_conponent__["a" /* DialogNewLayer */],
                __WEBPACK_IMPORTED_MODULE_19__admin_dashboard_dialog_edit_layer_dialog_edit_layerconponent__["a" /* DialogEditLayer */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__["a" /* LayoutComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service__["c" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_6__service__["f" /* SchoolService */],
                __WEBPACK_IMPORTED_MODULE_6__service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__service__["b" /* ClassService */],
                __WEBPACK_IMPORTED_MODULE_6__service__["d" /* LayerService */],
                __WEBPACK_IMPORTED_MODULE_6__service__["g" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__["b" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_17__service_nav_nav_service__["a" /* NavService */],
                __WEBPACK_IMPORTED_MODULE_6__service__["e" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_20__directives_size_directive__["a" /* SizeDirective */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");



var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    {
        path: "layout", component: __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__["a" /* LayoutComponent */], children: [
            { path: "", redirectTo: "admin", pathMatch: "full" },
            { path: "admin", loadChildren: "app/admin/admin.module#AdminModule", canActivate: [__WEBPACK_IMPORTED_MODULE_1__guard_auth_guard__["a" /* AdminGuard */]] },
            { path: "client", loadChildren: "app/client/client.module#ClientModule", canActivate: [__WEBPACK_IMPORTED_MODULE_1__guard_auth_guard__["b" /* AuthGuard */]] },
        ]
    },
];


/***/ }),

/***/ "../../../../../src/app/components/card-student/card-student.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-student\" [style.background-color]=\"color ? color : 'white'\">\n  <mat-card-header>\n    <mat-card-title>\n      <img width=\"24px\" matTooltip=\"תמונת התלמיד\" src=\"http://excadetsforum.com/profile_images/no_img.png\" /> {{user.fname}} {{user.lname}} {{user.username}}\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <div class=\"prefer\">\n      <div class=\"positive_prefer\" matTooltip=\"התלמיד בחר העדפות חיוביות\" *ngIf=\"user.positivePrefer?.length > 0\">\n\n      </div>\n\n      <div class=\"negative_prefer\" matTooltip=\"התלמיד בחר העדפות שליליות\" *ngIf=\"user.negativePrefer?.length > 0\">\n\n\n      </div>\n      <i *ngIf=\"user?.isLogin\" matTooltip=\"משתמש ביצע כניסה ראשונית\" class=\"material-icons\">verified_user</i>\n    </div>\n  </mat-card-content>\n\n  <mat-card-actions *ngIf=\"showActions\">\n    <button mat-icon-button (click)=\"open.emit(user)\">\n      <mat-icon>\n        open_in_new\n      </mat-icon>\n      <!-- פתח -->\n    </button>\n    <button mat-icon-button (click)=\"msgClick()\">\n      <mat-icon>\n        message\n      </mat-icon>\n      <!-- שלח הודעה -->\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/card-student/card-student.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-student {\n  box-sizing: border-box;\n  width: 100%; }\n  .card-student .prefer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .card-student .prefer .positive_prefer, .card-student .prefer .negative_prefer {\n      width: 8px;\n      height: 8px;\n      border-radius: 100%;\n      margin: 2px; }\n    .card-student .prefer .positive_prefer {\n      background-color: green; }\n    .card-student .prefer .negative_prefer {\n      background-color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-student/card-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardStudentComponent = (function () {
    function CardStudentComponent(msgService, router) {
        this.msgService = msgService;
        this.router = router;
        this.showActions = false;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.message = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CardStudentComponent.prototype.ngOnInit = function () {
    };
    CardStudentComponent.prototype.msgClick = function () {
        this.msgService.startConversationWith(this.user._id);
        this.router.navigate(["/layout/admin/messages"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */])
    ], CardStudentComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], CardStudentComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardStudentComponent.prototype, "showActions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CardStudentComponent.prototype, "open", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CardStudentComponent.prototype, "message", void 0);
    CardStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-student',
            template: __webpack_require__("../../../../../src/app/components/card-student/card-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card-student/card-student.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_index__["e" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CardStudentComponent);
    return CardStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/compontns.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_student_card_student_component__ = __webpack_require__("../../../../../src/app/components/card-student/card-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graph_graph_component__ = __webpack_require__("../../../../../src/app/components/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_header_pages_header_component__ = __webpack_require__("../../../../../src/app/components/pages-header/pages-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message_component__ = __webpack_require__("../../../../../src/app/components/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__card_student_card_student_component__["a" /* CardStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_header_pages_header_component__["a" /* PagesHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__card_student_card_student_component__["a" /* CardStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_header_pages_header_component__["a" /* PagesHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* ReactiveFormsModule */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message_div\" (click)=\"open.emit()\">\n  <img src=\"http://excadetsforum.com/profile_images/no_img.png\">\n  <div class=\"data\">\n    <div class=\"title\">\n      <div class=\"name\">\n        {{name}}\n      </div>\n      <div class=\"time\">\n        {{time | date:\"dd.MM.yy HH:mm\"}}\n      </div>\n    </div>\n    <div class=\"last_message\">\n      <!-- <mat-icon>\n        done\n      </mat-icon> -->\n      {{lastMessage}}\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message_div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 45px;\n  margin: 6px 0;\n  cursor: pointer;\n  -webkit-transform: background-color 0.5s;\n          transform: background-color 0.5s; }\n  .message_div img {\n    width: 44px;\n    height: 44px; }\n  .message_div .data {\n    border-bottom: 1px solid #cacaca8f;\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .message_div .data .title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      .message_div .data .title .time {\n        color: #cacaca;\n        font-size: 70%; }\n      .message_div .data .title .name {\n        font-weight: bold; }\n    .message_div .data .last_message {\n      text-align: right;\n      font-size: 80%;\n      color: #787878;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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


var ContactComponent = (function () {
    function ContactComponent(userService) {
        this.userService = userService;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ContactComponent.prototype.ngOnInit = function () {
        var n = this.userService.getUserById(this.name);
        // console.log(n)
        if (n)
            this.name = n.fname + " " + n.lname;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "lastMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ContactComponent.prototype, "open", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["g" /* UserService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div_canvas\">\n\n  <canvas #can [width]=width [height]=height id=\"cancas\" \n    (click)=\"click($event)\" \n    (mousedown)=\"selectPosition($event)\"\n    (mousemove)=\"changePosotion($event)\"\n    (mouseup)=\"pointToCahnge = null\">\n\n  </canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/graph/graph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div_canvas {\n  text-align: center;\n  padding: 5px; }\n  .div_canvas canvas {\n    border: 1px solid black; }\n\n.div_canvas {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
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

var GraphComponent = (function () {
    function GraphComponent() {
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
        this.radius = 10;
        this.height = 300;
    }
    GraphComponent.prototype.ngOnInit = function () {
        // this.width = window.screen.width * 0.8;
        this.width = this.canvas.nativeElement.parentElement.clientWidth - 10;
        // console.log(this.canvas.nativeElement.parentElement.clientWidth)
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
    };
    GraphComponent.prototype.addVertex = function (id, text, color, rangex, offsetx, rangey) {
        var p;
        if (!this.points) {
            this.points = [];
        }
        var i = Math.random() * (this.height / 10 - 4);
        i = +i.toFixed(0) + 2;
        // let j = Math.random() * (this.width / 10 - 4);
        var j = Math.random() * (rangex);
        j = +j.toFixed(0) + offsetx;
        this.points.push(new Point(j, i * 10, id, text, color));
    };
    GraphComponent.prototype.addLine = function (from, to, weight) {
        var f = this.points.find(function (res) { return res.id === from; });
        var t = this.points.find(function (res) { return res.id === to; });
        if (!this.lines)
            this.lines = [];
        this.lines.push(new Line(f, t, weight));
    };
    GraphComponent.prototype.drawVertex = function () {
        var _this = this;
        this.context = this.canvas.nativeElement.getContext("2d");
        // this.context.strokeStyle = "#FF0000";
        this.context.clearRect(0, 0, this.width, this.height);
        this.points.forEach(function (p) {
            // console.log(p)
            _this.context.fillStyle = p.color;
            _this.context.beginPath();
            _this.context.arc(p.x, p.y, 8, 0, 2 * Math.PI);
            _this.context.fill();
        });
    };
    GraphComponent.prototype.drawEdge = function () {
        var _this = this;
        this.context = this.canvas.nativeElement.getContext("2d");
        if (!this.lines)
            return;
        this.lines.forEach(function (l) {
            if (l.w >= 0 && l.b && l.a) {
                if (l.w > 0) {
                    _this.context.strokeStyle = "blue";
                    _this.context.setLineDash([]);
                }
                else {
                    _this.context.strokeStyle = "green";
                    _this.context.setLineDash([5, 15]);
                }
                _this.context.beginPath();
                _this.context.moveTo(l.a.x, l.a.y);
                _this.context.lineTo(l.b.x, l.b.y);
                _this.context.stroke();
            }
            else if (l.b && l.a) {
                _this.context.strokeStyle = "red";
                _this.context.setLineDash([2, 15]);
                _this.context.beginPath();
                // for(let i = 0; i < 20; i++){
                _this.context.moveTo(l.a.x, l.a.y);
                _this.context.lineTo(l.b.x, l.b.y);
                _this.context.stroke();
            }
            if (l.b) {
                _this.context.rect(l.b.x, l.b.y, 3, 3);
                _this.context.stroke();
            }
        });
    };
    GraphComponent.prototype.addGroup = function (v) {
        var _this = this;
        v.forEach(function (res) {
            // console.log(res.edges)
            if (res.edges)
                res.edges.forEach(function (e) {
                    if (v.find(function (r) { return r.id == e.to; }))
                        _this.addLine(res.id, e.to, e.weight);
                    else if (e.weight < 0)
                        _this.addLine(res.id, e.to, e.weight);
                    else {
                        console.log(e);
                        _this.addLine(res.id, e.to, 0);
                    }
                });
        });
    };
    GraphComponent.prototype.ngOnChanges = function (data) {
        var _this = this;
        console.log(this.graph);
        if (this.graph) {
            // console.log("dd");
            var rangex_1 = this.width / this.graph.length;
            this.graph.forEach(function (g, i) {
                g.forEach(function (res) {
                    _this.addVertex(res.id, res._text, _this.colors[i], rangex_1, rangex_1 * i);
                });
            });
            this.graph.forEach(function (g) {
                _this.addGroup(g);
            });
            this.drawVertex();
            this.drawEdge();
        }
    };
    GraphComponent.prototype.getMousePos = function (evt) {
        var rect = this.canvas.nativeElement.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    GraphComponent.prototype.click = function (e) {
    };
    GraphComponent.prototype.selectPosition = function (e) {
        var pos = this.getMousePos(e);
        if (this.points) {
            this.pointToCahnge = this.getVertexByPosition(pos);
        }
    };
    GraphComponent.prototype.getVertexByPosition = function (pos) {
        var _this = this;
        return this.points.find(function (res) {
            return Math.abs(pos.x - res.x) < _this.radius && Math.abs(pos.y - res.y) < _this.radius;
        });
    };
    GraphComponent.prototype.changePosotion = function (e) {
        var pos = this.getMousePos(e);
        if (this.points) {
            this.drawVertex();
            this.drawEdge();
        }
        if (this.points) {
            var u = this.getVertexByPosition(pos);
            // console.log(u)
            if (u)
                this.context.fillText(u["text"], pos.x, pos.y - 10);
        }
        if (this.pointToCahnge) {
            // console.log(this.pointToCahnge)
            this.pointToCahnge.x = pos.x;
            this.pointToCahnge.y = pos.y;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("can"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], GraphComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "graph", void 0);
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-graph',
            template: __webpack_require__("../../../../../src/app/components/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/graph/graph.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());

var Point = (function () {
    function Point(x, y, id, text, color) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.text = text;
        this.color = color;
    }
    return Point;
}());
var Line = (function () {
    function Line(a, b, w) {
        this.a = a;
        this.b = b;
        this.w = w;
    }
    return Line;
}());


/***/ }),

/***/ "../../../../../src/app/components/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conversation_div\">\n\n  <div class=\"messages\">\n    <div class=\"message\"  *ngFor=\"let m of conversation.messages\">\n      <div class=\"inner_message\" [class.right]=\"m.from == authService.id\">\n        <div class=\"buble\">\n          <div>\n            {{m?.text}}\n          </div>\n          <div>\n            {{m?.date | date:\"dd.MM.yy HH:mm\"}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"send_div\">\n    <mat-form-field>\n      <input [(ngModel)]=\"msg\" matInput placeholder=\"כתוב הודעה\">\n    </mat-form-field>\n    <button mat-raised-button #sendButton (click)=\"send()\" color=\"primary\">\n      <mat-icon>\n        send\n      </mat-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".conversation_div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 80%; }\n  .conversation_div .messages {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    overflow: scroll;\n    height: 85%;\n    width: 100%; }\n    .conversation_div .messages .message {\n      display: block;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .conversation_div .messages .message .inner_message {\n        width: 100%;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .conversation_div .messages .message .inner_message .buble {\n          box-shadow: 1px 1px 1px;\n          border: 1px solid #cacaca;\n          background: #94c7e8;\n          max-width: 60%;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          border-radius: 10px;\n          margin: 12px;\n          padding: 8px;\n          box-sizing: border-box;\n          min-width: 30%;\n          text-align: right;\n          border-top-right-radius: 0; }\n          .conversation_div .messages .message .inner_message .buble :last-child {\n            font-size: 60%; }\n      .conversation_div .messages .message .right {\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n        .conversation_div .messages .message .right :first-child {\n          border-radius: 10px;\n          border-top-left-radius: 0; }\n  .conversation_div .send_div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 10%; }\n    .conversation_div .send_div mat-form-field {\n      width: 80%; }\n    .conversation_div .send_div button {\n      width: 10%;\n      border-radius: 10px; }\n      .conversation_div .send_div button mat-icon {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder, .mat-form-field-empty.mat-form-field-placeholder {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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



var MessageComponent = (function () {
    function MessageComponent(messageService, authService) {
        this.messageService = messageService;
        this.authService = authService;
        this.msg = "";
    }
    MessageComponent.prototype.keypress = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    MessageComponent.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.conversation._id)
                            this.messageService.conversationOpen(this.conversation._id);
                        if (!(this.msg != "")) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.messageService.sendMessage(this.conversation, this.msg)];
                    case 1:
                        _a.conversation = _b.sent();
                        this.msg = "";
                        _b.label = 2;
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.ngOnChanges = function (data) {
        if (data.conversation) {
            if (this.conversation._id)
                this.messageService.conversationOpen(this.conversation._id);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_index__["b" /* Conversation */])
    ], MessageComponent.prototype, "conversation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MessageComponent.prototype, "keypress", null);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/components/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/message/message.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_index__["e" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__service_index__["a" /* AuthService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messages_div\">\n  <div class=\"members\">\n    <app-contact *ngFor=\"let c of con\" [name]=\"getName(c)\" [time]=\"c.messages[0]?.date\" [lastMessage]=\"c.messages[0]?.text\"\n      (open)=\"messageService.currentConversation = c\"></app-contact>\n\n\n\n\n  </div>\n  <div class=\"messages\">\n    <app-message *ngIf=\"messageService.currentConversation\" [conversation]=messageService.currentConversation>\n      <!-- pass conversation -->\n    </app-message>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages_div {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .messages_div .members {\n    width: 24%;\n    padding: 1%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-left: 1px solid #a0a0a0;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    overflow: scroll; }\n  .messages_div .messages {\n    width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
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


var MessagesComponent = (function () {
    function MessagesComponent(messageService, authService) {
        this.messageService = messageService;
        this.authService = authService;
        this.conversation = this.messageService.currentConversation;
        // this.sub = this.messageService._currentConversation.subscribe(c => {
        //   this.conversation = c;
        //   console.log(c)
        // })
    }
    Object.defineProperty(MessagesComponent.prototype, "con", {
        get: function () {
            return this.messageService.conversations;
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.prototype.getName = function (c) {
        var _this = this;
        if (c)
            return c.participants.find(function (res) { return res != _this.authService.id; });
    };
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["e" /* MessageService */], __WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages-header/pages-header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"page_header\">\n  <div *ngFor=\"let item of items\" class=\"section\">\n\n    <div class=\"circle_icon\" [style.background]=\"item.color\">\n      <mat-icon>\n        {{item.icon}}\n      </mat-icon>\n    </div>\n    <div class=\"title\">\n      {{item.title}}\n    </div>\n    <div class=\"number\">\n      {{item.num}}\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/pages-header/pages-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page_header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 28px; }\n  .page_header .section {\n    width: 25%;\n    border-left: 1px solid #eeeeee;\n    border-right: 1px solid #eeeeee;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .page_header .section .number {\n      font-weight: bold;\n      font-size: 2em; }\n  .page_header :last-child, .page_header :first-child {\n    border: none; }\n  .page_header .circle_icon {\n    padding: 8px;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages-header/pages-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesHeaderComponent; });
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

var PagesHeaderComponent = (function () {
    function PagesHeaderComponent() {
    }
    PagesHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PagesHeaderComponent.prototype, "items", void 0);
    PagesHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pages-header',
            template: __webpack_require__("../../../../../src/app/components/pages-header/pages-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages-header/pages-header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], PagesHeaderComponent);
    return PagesHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/size.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeDirective; });
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

var SizeDirective = (function () {
    function SizeDirective() {
    }
    SizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appSize]'
        }),
        __metadata("design:paramtypes", [])
    ], SizeDirective);
    return SizeDirective;
}());



/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, schoolService, layerService, classService, router) {
        this.authService = authService;
        this.schoolService = schoolService;
        this.layerService = layerService;
        this.classService = classService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        // console.log("in auth guard");
        var _this = this;
        if (this.authService.isAuth()) {
            return new Promise(function (resolve, rej) {
                if (_this.authService.getUser().permission != "student") {
                    _this.schoolService.initSchool(_this.authService.schoolId)
                        .then(function (res) {
                        _this.layerService.getAllLayers(_this.authService.schoolId).then(function (_) {
                            _this.classService.getAllClass(_this.authService.schoolId).then(function (_) {
                                resolve(true);
                            });
                        });
                    });
                }
                else if (_this.authService.permission === "student") {
                    console.log(2);
                    _this.router.navigate(["/layout/client"]);
                }
            });
        }
        else {
            var user = JSON.parse(localStorage.getItem("auth"));
            if (user)
                this.authService.login(user).then(function (u) {
                    if (_this.authService.isAuth()) {
                        return new Promise(function (resolve, rej) {
                            if (_this.authService.getUser().permission != "student") {
                                _this.schoolService.initSchool(_this.authService.getUser().schoolId)
                                    .then(function (res) {
                                    _this.layerService.getAllLayers(_this.authService.getUser().schoolId).then(function (_) {
                                        _this.classService.getAllClass(_this.authService.getUser().schoolId).then(function (_) {
                                            _this.router.navigate(["/layout/admin"]);
                                            resolve(true);
                                        });
                                    });
                                });
                            }
                            else if (_this.authService.getUser().permission === "student") {
                                // console.log(1);
                                _this.router.navigate(["/layout/client"]);
                            }
                        });
                    }
                    else {
                        console.log(3);
                        _this.router.navigate(["/login"]);
                        return false;
                    }
                });
            else {
                console.log(4);
                this.router.navigate(["/login"]);
                return false;
            }
        }
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["f" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["d" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["b" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());

var AuthGuard = (function () {
    function AuthGuard(authService, schoolService, layerService, classService, router) {
        this.authService = authService;
        this.schoolService = schoolService;
        this.layerService = layerService;
        this.classService = classService;
        this.router = router;
        console.log("in auth guard");
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        console.log("in auth guards");
        if (this.authService.isAuth()) {
            return new Promise(function (resolve, rej) {
                _this.schoolService.initSchool(_this.authService.getUser().schoolId)
                    .then(function (res) {
                    _this.layerService.getAllLayers(_this.authService.getUser().schoolId).then(function (_) {
                        _this.classService.getAllClass(_this.authService.getUser().schoolId).then(function (_) {
                            resolve(true);
                        });
                    });
                });
            });
        }
        else {
            var user = JSON.parse(localStorage.getItem("auth"));
            if (user)
                this.authService.login(user).then(function (u) {
                    if (_this.authService.isAuth()) {
                        return new Promise(function (resolve, rej) {
                            _this.schoolService.initSchool(_this.authService.getUser().schoolId)
                                .then(function (res) {
                                _this.layerService.getAllLayers(_this.authService.getUser().schoolId).then(function (_) {
                                    _this.classService.getAllClass(_this.authService.getUser().schoolId).then(function (_) {
                                        _this.router.navigate(["/layout/client"]);
                                        resolve(true);
                                    });
                                });
                            });
                        });
                    }
                    else {
                        _this.router.navigate(["/login"]);
                        return false;
                    }
                });
            else {
                this.router.navigate(["/login"]);
                return false;
            }
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["f" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["d" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_1__service__["b" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"navbar\">\n\n    <div class=\"container-fluid\">\n      <div class=\"navbar-holder d-flex align-items-center justify-content-between\">\n        <!-- Navbar Header-->\n        <div class=\"navbar-header\">\n          <!-- Navbar Brand -->\n          <a class=\"navbar-brand\">\n            <div class=\"brand-text brand-big\">\n              <span>Any Match </span>\n              <strong>Dashboard</strong>\n            </div>\n            <div class=\"brand-text brand-small\">\n              <strong>AM</strong>\n            </div>\n          </a>\n          <!-- Toggle Button-->\n          <a id=\"toggle-btn\" class=\"menu-btn active\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </a>\n        </div>\n        <!-- Navbar Menu -->\n        <div class=\"nav-menu list-unstyled d-flex flex-md-row align-items-md-center\">\n          <!-- Search-->\n\n          <mat-form-field class=\"search-form-field\">\n            <input matInput type=\"text\" placeholder=\"חיפוש\" [(ngModel)]=\"searchValue\" (change)=\"search.emit(searchValue)\" />\n            <button mat-button *ngIf=\"searchValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"search.emit(searchValue)\">\n              <mat-icon>search</mat-icon>\n            </button>\n          </mat-form-field>\n\n\n\n          <!-- <span class=\"badge bg-orange\">10</span> -->\n          <button mat-icon-button [matMenuTriggerFor]=\"menuNotification\">\n            <mat-icon>notifications_none</mat-icon>\n          </button>\n          <mat-menu #menuNotification=\"matMenu\">\n            <div class=\"notification\">\n              <div>You have 6 new messages</div>\n              <small>4 minutes ago</small>\n            </div>\n            <button mat-menu-item disabled>\n              <mat-icon>voicemail</mat-icon>\n              <span>Check voicemail</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>notifications_off</mat-icon>\n              <strong>view all notifications </strong>\n            </button>\n          </mat-menu>\n\n          <div>\n            <span class=\"badge bg-orange\" *ngIf=\"newMessage != 0\">{{newMessage}}</span>\n            <button mat-icon-button [matMenuTriggerFor]=\"menuMessage\">\n              <mat-icon>message</mat-icon>\n            </button>\n          </div>\n          <mat-menu #menuMessage=\"matMenu\">\n            <app-contact *ngFor=\"let c of msgService.recent | async\" \n              [name]=\"getName(c)\" \n              [time]=\"c.messages[0]?.date\" \n              [lastMessage]=\"c.messages[0]?.text\" \n              (open)=\"open(c)\"\n              [routerLink]=\"authService.permission != 'student' ? 'admin/messages' : 'client/messages'\">\n            </app-contact>\n            <button mat-menu-item [routerLink]=\"authService.permission != 'student' ? 'admin/messages' : 'client/messages'\">\n              <mat-icon>notifications_off</mat-icon>\n              <strong>כל ההודעות</strong>\n            </button>\n          </mat-menu>\n\n\n\n          <!-- Logout    -->\n\n          <button mat-icon-button [routerLink]=\"'/login'\">התנתק\n            <mat-icon>exit_to_app</mat-icon>\n          </button>\n\n        </div>\n      </div>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header .mat-icon-button {\n  margin: 0 8px !important; }\n\n.header nav.navbar {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important; }\n\n.header .search-form-field {\n  margin: 0 20px; }\n\n.header .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder, .header .mat-form-field-empty.mat-form-field-placeholder {\n  color: white; }\n\n.header .badge {\n  position: absolute;\n  z-index: 9; }\n\n@media screen and (max-width: 500px) {\n  .header .search-form-field {\n    visibility: hidden; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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


var HeaderComponent = (function () {
    function HeaderComponent(msgService, authService) {
        this.msgService = msgService;
        this.authService = authService;
        this.newMessage = 0;
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getName = function (c) {
        var _this = this;
        if (c)
            return c.participants.find(function (res) { return res != _this.authService.id; });
    };
    HeaderComponent.prototype.open = function (c) {
        this.msgService.currentConversation = this.msgService.getConversationById(c._id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], HeaderComponent.prototype, "newMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "search", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["e" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div_layout\">\r\n    <app-header \r\n        (search)=\"navService.search($event)\"\r\n        [newMessage]=\"msgService.numOfNewMessage | async\"></app-header>\r\n    <div class=\"main_layout\">\r\n        <app-nav class=\"app-nav\"></app-nav>\r\n        <div class=\"content\">\r\n            <mat-card class=\"page_title\">\r\n                {{navService.pageName}}\r\n            </mat-card>\r\n            <div class=\"content-inner\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div_layout {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.main_layout {\n  background-image: url(\"http://sewuka.co/wp-content/uploads/2017/08/23310840-light-gray-rough-concrete-wall-seamless-background-a-texturedecorative-tiles--textured-paint-991x660.jpg\");\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 90%; }\n  .main_layout .app-nav {\n    display: -ms-grid;\n    display: grid; }\n  .main_layout .content {\n    width: 100%;\n    overflow: scroll; }\n  .main_layout .page_title {\n    font-size: 2em;\n    font-weight: bold;\n    padding: 16px;\n    text-align: right; }\n  .main_layout .content-inner {\n    padding: 28px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(200, 194, 250, 0.3); }\n\napp-header {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_nav_nav_service__ = __webpack_require__("../../../../../src/app/service/nav/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(authService, navService, msgService) {
        this.authService = authService;
        this.navService = navService;
        this.msgService = msgService;
        if (this.authService.permission != "") {
            this.authService.permission != "student" ? this.navService.navForAdmin() : this.navService.navForClient();
        }
    }
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-layout",
            template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__service_nav_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_1__service_index__["e" /* MessageService */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"side-navbar\">\n\n  <div class=\"sidebar-header d-flex align-items-center\">\n    <div class=\"avatar\">\n      <img src=\"/assets/person.png\" class=\"img-fluid rounded-circle\">\n    </div>\n    <div class=\"title\">\n      <h1 class=\"h4\">{{auth.displayName}}</h1>\n      <p>{{title}}</p>\n    </div>\n  </div>\n\n  <button *ngFor=\"let item of navService.items\" (click)=\"navService.select(item)\" [style.background]=\"item.isSelect ? '#eef5f9' : 'white'\"\n    [routerLink]=\"item.url\" mat-button class=\"list-unstyled\">\n    <mat-icon>{{item.icon}}</mat-icon>\n    {{item.text}}\n  </button>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/layout/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-navbar {\n  height: 100%; }\n  .side-navbar .list-unstyled {\n    width: 100%;\n    text-align: start !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_nav_nav_service__ = __webpack_require__("../../../../../src/app/service/nav/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(navService, auth) {
        this.navService = navService;
        this.auth = auth;
        this.title = "";
        if (this.auth.permission != "") {
            this.auth.permission == "student" ? this.title = "תלמיד" : this.title = "אחראי";
        }
        // console.log(this.navService.items)
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/nav/nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_nav_nav_service__["a" /* NavService */], __WEBPACK_IMPORTED_MODULE_2__service_index__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page login-page\">\r\n  <div class=\"container d-flex align-items-center\">\r\n    <div class=\"form-holder has-shadow\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"info d-flex align-items-center\">\r\n            <div class=\"content\">\r\n              <div class=\"logo\">\r\n                <h1>Any Match</h1>\r\n              </div>\r\n              <p>Connecting Pepole To Optimal Group</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6 bg-white\">\r\n          <div class=\"form d-flex align-items-center\">\r\n            <div class=\"content\">\r\n\r\n\r\n\r\n              <form id=\"login-form\" [formGroup]=\"form\">\r\n\r\n                <div formGroupName=\"login\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" formControlName=username placeholder=\"שם משתמש\">\r\n                  </mat-form-field>\r\n                  <div formGroupName=\"pass\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"password\" formControlName=password placeholder=\"סיסמה\">\r\n                    </mat-form-field>\r\n                    <mat-form-field *ngIf=\"createNewSchool\">\r\n                      <input matInput type=\"password\" formControlName=verifyPassword placeholder=\"אימות סיסמה\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"createNewSchool\" formGroupName=\"newSchool\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" formControlName=name placeholder=\"שם בית הספר\">\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" formControlName=code placeholder=\"קוד בית הספר\">\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <mat-spinner [diameter]=24 *ngIf=\"showProgress\" [strokeWidth]=\"5\"></mat-spinner>\r\n                <button *ngIf=\"!createNewSchool && !showProgress\" id=\"login\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\r\n                <button *ngIf=\"createNewSchool && !showProgress\" mat-raised-button color=primary (click)=\"signup()\">Sign Up</button>\r\n\r\n\r\n              </form>\r\n\r\n\r\n\r\n              <a href=\"#\" class=\"forgot-pass\">Forgot Password?</a>\r\n              <br>\r\n              <small *ngIf=\"!createNewSchool\">Do not have an account? </small>\r\n              <button *ngIf=\"!createNewSchool\" class=\"signup\" class=\"btn btn-primary\" (click)=\"changeCreateSchool()\">Create new school</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n\r\n\r\n.app_main{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    mat-card{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        width: 100vw;\r\n        height: 100vh;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll; \r\n        input{\r\n            font-size: 50px;\r\n        }\r\n        mat-form-field{\r\n            display: block;\r\n        }\r\n        mat-card-actions{\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    h3{\r\n        border-bottom: 3px solid black;\r\n        margin-top: 50x;\r\n    }\r\n\r\n    mat-card-actions{\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var LoginComponent = (function () {
    function LoginComponent(fb, schoolService, authService, router) {
        this.schoolService = schoolService;
        this.authService = authService;
        this.router = router;
        this.title = "כניסה";
        this._createNewSchool = false;
        this._showProgress = false;
        this.form = fb.group({
            login: fb.group({
                username: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                pass: fb.group({
                    password: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                    verifyPassword: [""]
                }, { validator: this.areEqual })
            }),
            newSchool: fb.group({
                name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                code: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            })
        });
    }
    LoginComponent.prototype.changeCreateSchool = function () {
        this._createNewSchool = true;
        this.title = "הרשמה";
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var u, user, permiossion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._showProgress = true;
                        u = {};
                        u["username"] = this.form.controls.login["controls"].username.value;
                        u["password"] = this.form.controls.login["controls"].pass.value.password;
                        return [4 /*yield*/, this.authService.login(u)];
                    case 1:
                        user = _a.sent();
                        // console.log(user);
                        this._showProgress = false;
                        if (!user["success"]) {
                            if (user["code"] == 1) {
                                console.log("not found");
                            }
                            else {
                                console.log("password invalid");
                            }
                        }
                        else {
                            permiossion = user["user"].permission;
                            if (permiossion === "student")
                                this.router.navigate(["/layout/client"]);
                            else
                                this.router.navigate(["/layout/admin"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var school, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.status === "VALID")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.schoolService.createSchool(this.form.controls.newSchool.value)];
                    case 1:
                        school = _a.sent();
                        user = {};
                        user["username"] = this.form.controls.login["controls"].username.value;
                        user["password"] = this.form.controls.login["controls"].pass.value.password;
                        return [4 /*yield*/, this.authService.signup(user, school._id)];
                    case 2:
                        _a.sent();
                        this.login();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.clear = function () {
        this.form.reset();
    };
    Object.defineProperty(LoginComponent.prototype, "createNewSchool", {
        get: function () {
            return this._createNewSchool;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.areEqual = function (group) {
        var valid = false;
        // console.log(group.controls["password"].value === group.controls["verifyPassword"].value);
        return group.controls["password"].value === group.controls["verifyPassword"].value;
    };
    Object.defineProperty(LoginComponent.prototype, "showProgress", {
        get: function () { return this._showProgress; },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__service__["f" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_2__service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MatMomentDateModule } from "@angular/material-moment-adapter";
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/Item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
        this.isActive = true;
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/models/ItemWithIcon.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemWithIcon; });
var ItemWithIcon = (function () {
    function ItemWithIcon(icon) {
        this.icon = icon;
    }
    return ItemWithIcon;
}());



/***/ }),

/***/ "../../../../../src/app/models/class.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_model__ = __webpack_require__("../../../../../src/app/models/Item.model.ts");
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

var Class = (function (_super) {
    __extends(Class, _super);
    function Class() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Class;
}(__WEBPACK_IMPORTED_MODULE_0__Item_model__["a" /* Item */]));



/***/ }),

/***/ "../../../../../src/app/models/conversation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversation; });
/* unused harmony export ConversationView */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_model__ = __webpack_require__("../../../../../src/app/models/Item.model.ts");
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

var Conversation = (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Conversation;
}(__WEBPACK_IMPORTED_MODULE_0__Item_model__["a" /* Item */]));

var ConversationView = (function (_super) {
    __extends(ConversationView, _super);
    function ConversationView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConversationView;
}(Conversation));



/***/ }),

/***/ "../../../../../src/app/models/headerCard.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ItemWithIcon_model__ = __webpack_require__("../../../../../src/app/models/ItemWithIcon.model.ts");
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

var HeaderCard = (function (_super) {
    __extends(HeaderCard, _super);
    function HeaderCard(icon, title, num, color) {
        var _this = _super.call(this, icon) || this;
        _this.title = title;
        _this.num = num;
        _this.color = color;
        return _this;
    }
    return HeaderCard;
}(__WEBPACK_IMPORTED_MODULE_0__ItemWithIcon_model__["a" /* ItemWithIcon */]));



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__school_model__ = __webpack_require__("../../../../../src/app/models/school.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_model__ = __webpack_require__("../../../../../src/app/models/layer.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_model__ = __webpack_require__("../../../../../src/app/models/class.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__class_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__headerCard_model__ = __webpack_require__("../../../../../src/app/models/headerCard.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__headerCard_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__message_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conversation_model__ = __webpack_require__("../../../../../src/app/models/conversation.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__conversation_model__["a"]; });









/***/ }),

/***/ "../../../../../src/app/models/layer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Layer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_model__ = __webpack_require__("../../../../../src/app/models/Item.model.ts");
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

var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classes = 0;
        return _this;
    }
    return Layer;
}(__WEBPACK_IMPORTED_MODULE_0__Item_model__["a" /* Item */]));



/***/ }),

/***/ "../../../../../src/app/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* unused harmony export MessageView */
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
var Message = (function () {
    function Message() {
        this.from = "";
        this.text = "";
        this.date = new Date();
        this.isRead = {};
    }
    return Message;
}());

var MessageView = (function (_super) {
    __extends(MessageView, _super);
    function MessageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageView;
}(Message));



/***/ }),

/***/ "../../../../../src/app/models/school.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export School */
/* unused harmony export SchoolViewModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_model__ = __webpack_require__("../../../../../src/app/models/Item.model.ts");
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

var School = (function (_super) {
    __extends(School, _super);
    function School() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return School;
}(__WEBPACK_IMPORTED_MODULE_0__Item_model__["a" /* Item */]));

var SchoolViewModel = (function (_super) {
    __extends(SchoolViewModel, _super);
    function SchoolViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchoolViewModel;
}(School));



/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_model__ = __webpack_require__("../../../../../src/app/models/Item.model.ts");
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

var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(__WEBPACK_IMPORTED_MODULE_0__Item_model__["a" /* Item */]));



/***/ }),

/***/ "../../../../../src/app/service/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path_enum__ = __webpack_require__("../../../../../src/app/service/path.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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



var SIGNUP = "signup";
var LOGIN = "login";
var UPDATE = "user/update";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signup = function (user, id) {
        return __awaiter(this, void 0, void 0, function () {
            var u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_2__path_enum__["a" /* path */].SIGNUP, user)];
                    case 1:
                        u = _a.sent();
                        if (!u["success"]) return [3 /*break*/, 3];
                        u["user"].schoolId = id;
                        this._user = u["user"];
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.adduser = function (user, id) {
        return __awaiter(this, void 0, void 0, function () {
            var u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_2__path_enum__["a" /* path */].SIGNUP, user)];
                    case 1:
                        u = _a.sent();
                        if (!u["success"]) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, u];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (res, error) {
            // console.log("in auth");
            _this.http.post(LOGIN, user).then(function (u) {
                if (u["success"]) {
                    _this._user = u["user"];
                    localStorage.setItem("auth", JSON.stringify(user));
                    console.log(_this._user);
                }
                res(u);
            });
        });
    };
    AuthService.prototype.getUser = function () {
        return this._user;
    };
    Object.defineProperty(AuthService.prototype, "schoolId", {
        get: function () {
            if (this._user)
                return this._user.schoolId;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            if (this._user)
                return this._user._id;
            return "";
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.update = function () {
        var _this = this;
        return new Promise(function (res, error) {
            // console.log("in auth");
            _this.http.post(UPDATE, _this._user).then(function (r) {
                if (r["success"])
                    _this._user = r["user"];
                res(r["success"]);
            });
        });
    };
    AuthService.prototype.addSchool = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._user.schoolId = id;
                        return [4 /*yield*/, this.update()];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, item];
                }
            });
        });
    };
    AuthService.prototype.changePassword = function (password, newPassword) {
        var _this = this;
        this.http.post("user/changePassword", { user: this._user, password: password, newPassword: newPassword }).then(function (u) {
            if (u["success"]) {
                _this._user = u["user"];
                _this._user.isLogin = true;
            }
        });
    };
    AuthService.prototype.addPositive = function (id) {
        if (!this._user.positivePrefer)
            this._user.positivePrefer = [];
        this._user.positivePrefer.push(id);
        return true;
    };
    AuthService.prototype.addNegative = function (id) {
        if (!this._user.negativePrefer)
            this._user.negativePrefer = [];
        this._user.negativePrefer.push(id);
        return true;
    };
    AuthService.prototype.isAuth = function () {
        return !!this._user;
    };
    Object.defineProperty(AuthService.prototype, "permission", {
        get: function () {
            return this._user ? this._user.permission : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "displayName", {
        get: function () {
            return this._user.fname + " " + this._user.lname;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/service/class/class.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controlerService_model__ = __webpack_require__("../../../../../src/app/service/controlerService.model.ts");
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



var ClassService = (function (_super) {
    __extends(ClassService, _super);
    function ClassService(http) {
        return _super.call(this, "class", http) || this;
    }
    ClassService.prototype.getAllClass = function (schoolId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(schoolId)];
                    case 1:
                        _a._class = _b.sent();
                        console.log(this._class);
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassService.prototype.addClass = function (clas, schoolId) {
        // if (!this._class)
        //   this._class = [];
        var _this = this;
        return new Promise(function (res, rej) {
            _this.create({ schoolId: schoolId, clas: clas })
                .then(function (c) {
                // this._class[c._id] = c;
                _this.getAllClass(schoolId).then(function (_) { res(clas); });
            });
        });
    };
    ClassService.prototype.addUser = function (id, classId) {
        if (!this._class[classId].usersId)
            this._class[classId].usersId = [];
        this._class[classId].usersId.push(id);
        this.updateClass(classId);
    };
    ClassService.prototype.updateClass = function (id) {
        var _this = this;
        this.update(this._class[id]).then(function (res) {
            _this._class[id] = res[0];
        });
    };
    ClassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */]])
    ], ClassService);
    return ClassService;
}(__WEBPACK_IMPORTED_MODULE_2__controlerService_model__["a" /* ControlerService */]));



/***/ }),

/***/ "../../../../../src/app/service/controlerService.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var ControlerService = (function () {
    function ControlerService(path, http) {
        this.http = http;
        this.CREATE = "create";
        this.ALL = "all";
        this.UPDATE = "update";
        this.GETBYID = "getById";
        this.path = path + "/";
        this.socketReplay = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
    }
    ControlerService.prototype.connectToSocket = function (socket, event) {
        var _this = this;
        var s = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__["connect"](this.http.path + socket);
        console.log(s);
        s
            .on("connect", function () {
            console.log("connect to " + socket);
        });
        s
            .on((event), function (data) {
            console.log("new message");
            _this.socketReplay.next({ data: data, event: event });
        });
        s
            .on("disconnect", function () {
            console.log("disconnect");
        });
    };
    ControlerService.prototype.getAll = function (id) {
        return this.http.post(this.path + this.ALL, { id: id });
    };
    ControlerService.prototype.update = function (item) {
        return this.http.post(this.path + this.UPDATE, item);
    };
    ControlerService.prototype.create = function (item) {
        return this.http.post(this.path + this.CREATE, item);
    };
    ControlerService.prototype.getById = function (id) {
        var temp = { _id: id };
        return this.http.post(this.path + this.GETBYID, temp);
    };
    return ControlerService;
}());



/***/ }),

/***/ "../../../../../src/app/service/http/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.path = (window.location.host == "localhost:3000" ? "http://" : "https://") + window.location.host + "/";
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.header });
    }
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.http.post(_this.path + url, body, _this.options).subscribe(function (response) {
                res(response.json());
            });
        });
    };
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.http.get(_this.path + url, _this.options).subscribe(function (response) {
                res(response.json());
            });
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__http_http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__school_school_service__ = __webpack_require__("../../../../../src/app/service/school/school.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__school_school_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/service/auth/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/service/user/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layer_layer_service__ = __webpack_require__("../../../../../src/app/service/layer/layer.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__layer_layer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_class_service__ = __webpack_require__("../../../../../src/app/service/class/class.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__class_class_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message_service__ = __webpack_require__("../../../../../src/app/service/message/message.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__message_message_service__["a"]; });









/***/ }),

/***/ "../../../../../src/app/service/layer/layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controlerService_model__ = __webpack_require__("../../../../../src/app/service/controlerService.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/service/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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





var LayerService = (function (_super) {
    __extends(LayerService, _super);
    function LayerService(http, authService) {
        var _this = _super.call(this, "layer", http) || this;
        _this.authService = authService;
        if (!_this.obLayers)
            _this.initObservable([]);
        return _this;
    }
    LayerService.prototype.initObservable = function (data) {
        var _this = this;
        this.obLayers = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (o) {
            _this.ob = o;
            if (_this._layers)
                _this.ob.next(_this._layers);
            else
                o.next(data);
        });
    };
    LayerService.prototype.getAllLayers = function (schoolId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(schoolId)];
                    case 1:
                        _a._layers = _b.sent();
                        this._layers = this._layers
                            .map(function (res, index) {
                            res["position"] = index;
                            if (res.isActive == undefined) {
                                res.isActive = true;
                                _this.updateLayer(res);
                            }
                            return res;
                        }).filter(function (res) { return res.isActive; });
                        if (this.ob)
                            this.ob.next(this._layers);
                        return [2 /*return*/];
                }
            });
        });
    };
    LayerService.prototype.addLayer = function (layer, schoolId) {
        var _this = this;
        layer.isActive = true;
        return new Promise(function (res, rej) {
            _this.create({ schoolId: schoolId, layer: layer })
                .then(function (l) {
                _this.getAllLayers(schoolId).then(function (_) {
                    if (_this.ob)
                        _this.ob.next(_this._layers);
                    res(l);
                });
            });
        });
    };
    Object.defineProperty(LayerService.prototype, "layers", {
        get: function () {
            if (this.ob)
                this.ob.next(this._layers ? this._layers : []);
            return this.obLayers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerService.prototype, "num", {
        get: function () {
            return this._layers ? this._layers.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    LayerService.prototype.getIdByName = function (name) {
        for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.name === name)
                return l._id;
        }
        return null;
    };
    LayerService.prototype.getLayerById = function (id) {
        return this._layers.find(function (res) {
            return res._id == id;
        });
    };
    LayerService.prototype.addClass = function (id, layerId) {
        var l = this.getLayerById(layerId);
        if (!l.classesId)
            l.classesId = [];
        l.classesId.push(id);
        this.updateLayer(l);
    };
    LayerService.prototype.updateLayer = function (l) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.update({ layer: l }).then(function (layer) {
                _this._layers = _this._layers.map(function (r) {
                    if (layer._id === r._id)
                        return layer;
                    return r;
                });
                res(true);
            });
        });
    };
    LayerService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var layer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._layers)
                            return [2 /*return*/];
                        layer = null;
                        if (confirm("מחיקה זו לא תאפשר לשחזר את הנתונים. האם למחקו?")) {
                            this._layers = this._layers.filter(function (l) {
                                if (l._id == id) {
                                    l.isActive = false;
                                    layer = l;
                                }
                                return l._id != id;
                            });
                        }
                        return [4 /*yield*/, this.updateLayer(layer)];
                    case 1:
                        _a.sent();
                        this.ob.next(this._layers ? this._layers : []);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    LayerService.prototype.getGraph = function (id, classes) {
        return this.http.post("graph/graph", { layerId: id, groups: classes });
    };
    LayerService.prototype.saveMatch = function (groups, layerId) {
        var _this = this;
        var arr = [];
        if (groups) {
            groups.forEach(function (a) {
                var group = [];
                a.forEach(function (v) {
                    group.push(v.id);
                });
                arr.push(group);
            });
            var l_1 = this.getLayerById(layerId);
            l_1.groups = arr;
            return new Promise(function (res, rej) {
                _this.updateLayer(l_1).then(function (layer) {
                    res(true);
                });
            });
        }
    };
    LayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], LayerService);
    return LayerService;
}(__WEBPACK_IMPORTED_MODULE_2__controlerService_model__["a" /* ControlerService */]));



/***/ }),

/***/ "../../../../../src/app/service/message/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/service/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controlerService_model__ = __webpack_require__("../../../../../src/app/service/controlerService.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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







var MessageService = (function (_super) {
    __extends(MessageService, _super);
    function MessageService(http, authService, userService) {
        var _this = _super.call(this, "message", http) || this;
        _this.authService = authService;
        _this.userService = userService;
        _this.conversations = [];
        _this._currentConversation = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["ReplaySubject"]();
        _this.numOfNewMessage = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["ReplaySubject"]();
        _this.recent = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["ReplaySubject"]();
        _this.getAllMessages().then(function (c) {
            _this.conversations = c;
            _this.numOfNewMessage.next(_this.notReadCount());
        });
        _this.connectToSocket("massage/" + _this.authService.id, "newMessage");
        _this.socketReplay.subscribe(function (res) {
            if (res["event"] == "newMessage") {
                var c = _this.getConversationById(res["data"].conversation._id);
                if (!c)
                    _this.conversations.push(res["data"].conversation);
                _this.conversations = _this.conversations.map(function (c, i) {
                    if (!c._id)
                        return res["data"].conversation;
                    else if (c._id === res["data"].conversation._id) {
                        return res["data"].conversation;
                    }
                    return c;
                });
                // console.log(this.conversations)
                if (_this.currentConversation)
                    if (_this.currentConversation._id == res["data"].conversation._id) {
                        _this.currentConversation = res["data"].conversation;
                        console.log(_this.currentConversation);
                        _this._currentConversation.next(_this.currentConversation);
                    }
            }
            _this.numOfNewMessage.next(_this.notReadCount());
        });
        return _this;
    }
    MessageService.prototype.notReadCount = function () {
        var _this = this;
        var count = 0;
        this.conversations.forEach(function (c) {
            if (c)
                count += _this.notCountMessages(c._id);
        });
        // console.log(count)
        this.recent.next(this.conversations.slice(0, this.conversations.length > 6 ? 6 : this.conversations.length));
        return count;
    };
    MessageService.prototype.notCountMessages = function (id) {
        var c = this.getConversationById(id);
        var count = 0;
        if (c)
            if (!c.messages[0].isRead[this.authService.id])
                return 1;
        return 0;
    };
    MessageService.prototype.getConversationById = function (id) {
        return this.conversations.find(function (res) { return res._id === id; });
    };
    MessageService.prototype.conversationOpen = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var c;
            return __generator(this, function (_a) {
                c = this.getConversationById(id);
                c.messages[0].isRead[this.authService.id] = true;
                // await this.create({ conversation: c });
                this.numOfNewMessage.next(this.notReadCount());
                return [2 /*return*/, true];
            });
        });
    };
    MessageService.prototype.sendMessage = function (conversation, message) {
        return __awaiter(this, void 0, void 0, function () {
            var m;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        m = new __WEBPACK_IMPORTED_MODULE_1__models_index__["d" /* Message */]();
                        m.date = new Date();
                        m.from = this.authService.id;
                        m.text = message;
                        m.isRead[this.authService.id] = true;
                        conversation.messages.unshift(m);
                        return [4 /*yield*/, this.create({ conversation: conversation })];
                    case 1:
                        // this.socket.emit("message", conversation);
                        conversation = (_a.sent());
                        return [4 /*yield*/, this.getAllMessages()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, conversation];
                }
            });
        });
    };
    MessageService.prototype.startConversationWith = function (id) {
        this.conversations = this.conversations.filter(function (c) { return c._id; });
        var c = this.conversations.find(function (con) { return con.participants.includes(id); });
        if (!c) {
            c = new __WEBPACK_IMPORTED_MODULE_1__models_index__["b" /* Conversation */]();
            c.messages = [];
            c.participants = [this.authService.id, id];
            this.conversations.push(c);
        }
        this.currentConversation = c;
        return c;
    };
    MessageService.prototype.getAllMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(this.authService.id)];
                    case 1:
                        _a.conversations = _b.sent();
                        this.currentConversation = this.conversations[0] ? this.conversations[0] : null;
                        if (this.conversations) {
                            this.numOfNewMessage.next(this.notReadCount());
                            return [2 /*return*/, this.conversations
                                    .sort(function (a, b) {
                                    if (b.messages.length == 0)
                                        return -1;
                                    else if (a.messages.length == 0)
                                        return 1;
                                    else {
                                        var dateA = a.messages[0].date;
                                        var dateB = b.messages[0].date;
                                        return (dateB + "").localeCompare(dateA + "");
                                    }
                                })];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]])
    ], MessageService);
    return MessageService;
}(__WEBPACK_IMPORTED_MODULE_5__controlerService_model__["a" /* ControlerService */]));



/***/ }),

/***/ "../../../../../src/app/service/nav/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* unused harmony export NavItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ItemWithIcon_model__ = __webpack_require__("../../../../../src/app/models/ItemWithIcon.model.ts");
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



var NavService = (function () {
    function NavService() {
        var _this = this;
        this._pageName = "";
        this._items = [];
        this.searchObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (o) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());

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
}(__WEBPACK_IMPORTED_MODULE_2__models_ItemWithIcon_model__["a" /* ItemWithIcon */]));



/***/ }),

/***/ "../../../../../src/app/service/path.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return path; });
var path;
(function (path) {
    path["SIGNUP"] = "signup";
    path["LOGIN"] = "login";
    path["USERUPDATE"] = "user/update";
    path["GETBYID"] = "getById";
    path["UPDATE"] = "/update";
})(path || (path = {}));


/***/ }),

/***/ "../../../../../src/app/service/school/school.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controlerService_model__ = __webpack_require__("../../../../../src/app/service/controlerService.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_layer_service__ = __webpack_require__("../../../../../src/app/service/layer/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/service/user/user.service.ts");
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





var SchoolService = (function (_super) {
    __extends(SchoolService, _super);
    function SchoolService(http, layerService, userService) {
        var _this = _super.call(this, "school", http) || this;
        _this.layerService = layerService;
        _this.userService = userService;
        return _this;
    }
    SchoolService.prototype.createSchool = function (body) {
        return this.create(body);
    };
    SchoolService.prototype.initSchool = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log(id)
                        this.userService.getAllUsers(id).then(function (res) { });
                        return [4 /*yield*/, this.getById(id)];
                    case 1:
                        s = _a.sent();
                        this._school = s;
                        return [2 /*return*/, this._school];
                }
            });
        });
    };
    SchoolService.prototype.getSchool = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._school)
                            return [2 /*return*/, this._school];
                        return [4 /*yield*/, this.initSchool(id)];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, item];
                }
            });
        });
    };
    Object.defineProperty(SchoolService.prototype, "school", {
        get: function () {
            if (this._school)
                return this._school;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    SchoolService.prototype.updateSchool = function () {
        var _this = this;
        this.update(this._school).then(function (res) {
            _this._school = res;
        });
    };
    SchoolService.prototype.addLayer = function (id) {
        if (!this._school.layersId)
            this._school.layersId = [];
        this._school.layersId.push(id);
        this.updateSchool();
    };
    SchoolService.prototype.addUser = function (id) {
        if (!this._school.usersId)
            this._school.usersId = [];
        this._school.usersId.push(id);
        this.updateSchool();
    };
    SchoolService.prototype.addClass = function () {
    };
    SchoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__layer_layer_service__["a" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]])
    ], SchoolService);
    return SchoolService;
}(__WEBPACK_IMPORTED_MODULE_2__controlerService_model__["a" /* ControlerService */]));



/***/ }),

/***/ "../../../../../src/app/service/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_service__ = __webpack_require__("../../../../../src/app/service/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controlerService_model__ = __webpack_require__("../../../../../src/app/service/controlerService.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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




var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, "user", http) || this;
        if (!_this.obUsers)
            _this.initObservable([]);
        return _this;
    }
    UserService.prototype.addUser = function (user, schoolId) {
        return this.create(user);
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.update(user).then(function (updateduser) {
                _this._users.map(function (u) {
                    if (u._id != user._id)
                        return u;
                });
                _this._users.push(user);
                _this.ob.next(_this._users);
                res(updateduser);
            });
        });
    };
    UserService.prototype.initObservable = function (data) {
        var _this = this;
        this.obUsers = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (o) {
            _this.ob = o;
            if (_this._users)
                _this.ob.next(_this._users);
            else
                o.next(data);
        });
    };
    UserService.prototype.getAllUsers = function (schoolId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAll(schoolId)];
                    case 1:
                        _a._users = _b.sent();
                        this._users = this._users
                            .map(function (res, index) {
                            res["position"] = index;
                            return res;
                        });
                        // console.log(this._users);
                        if (this.ob)
                            this.ob.next(this._users);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            if (this.ob)
                this.ob.next(this._users ? this._users : []);
            return this.obUsers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "num", {
        get: function () {
            return this._users ? this._users.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUsersByLayer = function (id) {
        return this._users.filter(function (res) {
            return res.layerId === id;
        });
    };
    UserService.prototype.getUserById = function (id) {
        return this._users.find(function (u) { return u._id == id; });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__controlerService_model__["a" /* ControlerService */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map