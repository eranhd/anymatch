"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/dashboard.component");
var layer_component_1 = require("./layer/layer.component");
var layers_component_1 = require("./layers/layers.component");
var students_component_1 = require("./students/students.component");
var settings_component_1 = require("./settings/settings.component");
var help_component_1 = require("./help/help.component");
var messages_component_1 = require("../components/messages/messages.component");
exports.routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "layer/:id", component: layer_component_1.LayerComponent },
    { path: "layers", component: layers_component_1.LayersComponent },
    { path: "students", component: students_component_1.StudentsComponent },
    { path: "messages", component: messages_component_1.MessagesComponent },
    { path: "setting", component: settings_component_1.SettingsComponent },
    { path: "help", component: help_component_1.HelpComponent },
];
//# sourceMappingURL=admin.route.js.map