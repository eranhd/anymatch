"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login/login.component");
var auth_guard_1 = require("./guard/auth.guard");
var layout_component_1 = require("./layout/layout.component");
exports.routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    {
        path: "layout", component: layout_component_1.LayoutComponent, children: [
            { path: "", redirectTo: "admin", pathMatch: "full" },
            { path: "admin", loadChildren: "app/admin/admin.module#AdminModule", canActivate: [auth_guard_1.AdminGuard] },
            { path: "client", loadChildren: "app/client/client.module#ClientModule", canActivate: [auth_guard_1.AuthGuard] },
        ]
    },
];
//# sourceMappingURL=app.route.js.map