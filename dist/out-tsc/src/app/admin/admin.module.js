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
var admin_route_1 = require("./admin.route");
var material_module_1 = require("../material/material.module");
var forms_1 = require("@angular/forms");
// import { LayoutComponent } from '../layout/layout.component';
var layer_component_1 = require("./layer/layer.component");
var compontns_module_1 = require("../components/compontns.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var layers_component_1 = require("./layers/layers.component");
var students_component_1 = require("./students/students.component");
var settings_component_1 = require("./settings/settings.component");
var help_component_1 = require("./help/help.component");
var open_student_dialog_component_1 = require("./layer/open-student-dialog/open-student-dialog.component");
var new_layer_charge_dialog_component_1 = require("./layer/new-layer-charge/new-layer-charge-dialog.component");
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild(admin_route_1.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                compontns_module_1.ComponentsModule,
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                layer_component_1.LayerComponent,
                layers_component_1.LayersComponent,
                students_component_1.StudentsComponent,
                settings_component_1.SettingsComponent,
                help_component_1.HelpComponent,
                open_student_dialog_component_1.OpenStudentDialogComponent,
                new_layer_charge_dialog_component_1.NewLayerChargeDialogComponent
            ],
            entryComponents: [
                open_student_dialog_component_1.OpenStudentDialogComponent,
                new_layer_charge_dialog_component_1.NewLayerChargeDialogComponent
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map