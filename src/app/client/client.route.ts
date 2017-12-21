import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from "../layout/layout.component";
import { SettingsComponent } from "./settings/settings.component";
import { MyLayerComponent } from './my-layer/my-layer.component';
import { MyClassComponent } from './my-class/my-class.component';
import { MessagesComponent } from "../components/messages/messages.component";

export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "setting", component: SettingsComponent },
    { path: "myLayer", component: MyLayerComponent },
    { path: "myClass", component: MyClassComponent },
    { path: "messages", component: MessagesComponent },



];
