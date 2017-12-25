"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/dashboard.component");
var settings_component_1 = require("./settings/settings.component");
var my_layer_component_1 = require("./my-layer/my-layer.component");
var my_class_component_1 = require("./my-class/my-class.component");
var messages_component_1 = require("../components/messages/messages.component");
exports.routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "setting", component: settings_component_1.SettingsComponent },
    { path: "myLayer", component: my_layer_component_1.MyLayerComponent },
    { path: "myClass", component: my_class_component_1.MyClassComponent },
    { path: "messages", component: messages_component_1.MessagesComponent },
];
//# sourceMappingURL=client.route.js.map