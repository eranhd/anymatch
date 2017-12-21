import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from "../layout/layout.component";
import { LayerComponent } from './layer/layer.component';
import { LayersComponent } from './layers/layers.component';
import { StudentsComponent } from './students/students.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { MessagesComponent } from "../components/messages/messages.component";

export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "layer/:id", component: LayerComponent },
    { path: "layers", component: LayersComponent },
    { path: "students", component: StudentsComponent },
    { path: "messages", component: MessagesComponent },
    { path: "setting", component: SettingsComponent },
    { path: "help", component: HelpComponent },



];
