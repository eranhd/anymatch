"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var service_1 = require("./service");
var material_module_1 = require("./material/material.module");
var login_component_1 = require("./login/login.component");
var layout_component_1 = require("./layout/layout.component");
var router_1 = require("@angular/router");
var app_route_1 = require("./app.route");
var auth_guard_1 = require("./guard/auth.guard");
var compontns_module_1 = require("./components/compontns.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_component_1 = require("./layout/header/header.component");
var nav_component_1 = require("./layout/nav/nav.component");
var nav_service_1 = require("./service/nav/nav.service");
var dialog_new_layer_conponent_1 = require("./admin/dashboard/dialog new layer/dialog-new-layer.conponent");
var dialog_edit_layerconponent_1 = require("./admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent");
var size_directive_1 = require("./directives/size.directive");
var ng2_charts_1 = require("ng2-charts");
var config = {
    url: (window.location.host == "localhost:3000" ? "http://" : "https://") + window.location.host + "/",
    options: {}
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                layout_component_1.LayoutComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent,
                dialog_new_layer_conponent_1.DialogNewLayer,
                dialog_edit_layerconponent_1.DialogEditLayer,
                size_directive_1.SizeDirective
                // DashboardComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forRoot(app_route_1.routes),
                compontns_module_1.ComponentsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                // SocketIoModule.forRoot(config)
                ng2_charts_1.ChartsModule
            ],
            entryComponents: [
                layout_component_1.LayoutComponent,
                dialog_new_layer_conponent_1.DialogNewLayer,
                dialog_edit_layerconponent_1.DialogEditLayer
            ],
            exports: [
                layout_component_1.LayoutComponent
            ],
            providers: [
                service_1.HttpService,
                service_1.SchoolService,
                service_1.AuthService,
                service_1.ClassService,
                service_1.LayerService,
                service_1.UserService,
                auth_guard_1.AuthGuard,
                auth_guard_1.AdminGuard,
                nav_service_1.NavService,
                service_1.MessageService,
                size_directive_1.SizeDirective,
                service_1.SnakService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map