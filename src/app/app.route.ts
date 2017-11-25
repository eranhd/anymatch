import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AuthGuard, AdminGuard } from "./guard/auth.guard";


export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    // { path: "admin", component: DashboardComponent }
    { path: "admin", loadChildren: "app/admin/admin.module#AdminModule", canActivate: [AdminGuard] },
    { path: "client", loadChildren: "app/client/client.module#ClientModule", canActivate: [AuthGuard] },
];
