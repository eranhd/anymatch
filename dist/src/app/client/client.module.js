"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var router_1 = require("@angular/router");
var client_route_1 = require("./client.route");
var material_module_1 = require("../material/material.module");
var forms_1 = require("@angular/forms");
var compontns_module_1 = require("../components/compontns.module");
var settings_component_1 = require("./settings/settings.component");
var my_layer_component_1 = require("./my-layer/my-layer.component");
var my_class_component_1 = require("./my-class/my-class.component");
var flex_layout_1 = require("@angular/flex-layout");
var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild(client_route_1.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                compontns_module_1.ComponentsModule,
                flex_layout_1.FlexLayoutModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                settings_component_1.SettingsComponent,
                my_layer_component_1.MyLayerComponent,
                my_class_component_1.MyClassComponent
            ],
            entryComponents: []
        })
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map