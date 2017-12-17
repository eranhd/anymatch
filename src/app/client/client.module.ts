import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogNewLayer } from "./dashboard/dialog new layer/dialog-new-layer.conponent"
import { RouterModule } from "@angular/router";
import { routes } from "./client.route";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule,  } from "@angular/forms";
// import { LayoutComponent } from './dashboard/layout/layout.component';
import { DialogEditLayer } from "./dashboard/dialog-edit-layer/dialog-edit-layerconponent";
import { ComponentsModule } from "../components/compontns.module";


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    DialogNewLayer,
    // LayoutComponent,
    DialogEditLayer
  ],
  entryComponents: [
    DialogNewLayer,
    DialogEditLayer
  ]
})
export class ClientModule { }
