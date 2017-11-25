import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from "./dashboard/layout/layout.component";
import { LayerComponent } from './layer/layer.component';

export const routes: Routes = [
    { path: "", redirectTo: "layout", pathMatch: "full" },
    {
        path: "layout", component: LayoutComponent, children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: DashboardComponent },
            { path: "layer/:id", component: LayerComponent }
        ]
    }

];
