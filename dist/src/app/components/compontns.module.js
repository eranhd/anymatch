"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var card_student_component_1 = require("./card-student/card-student.component");
var common_1 = require("@angular/common");
var material_module_1 = require("../material/material.module");
var graph_component_1 = require("./graph/graph.component");
var pages_header_component_1 = require("./pages-header/pages-header.component");
var messages_component_1 = require("./messages/messages.component");
var message_component_1 = require("./message/message.component");
var contact_component_1 = require("./contact/contact.component");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                card_student_component_1.CardStudentComponent,
                graph_component_1.GraphComponent,
                pages_header_component_1.PagesHeaderComponent,
                messages_component_1.MessagesComponent,
                message_component_1.MessageComponent,
                contact_component_1.ContactComponent
            ],
            exports: [
                card_student_component_1.CardStudentComponent,
                graph_component_1.GraphComponent,
                pages_header_component_1.PagesHeaderComponent,
                contact_component_1.ContactComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=compontns.module.js.map