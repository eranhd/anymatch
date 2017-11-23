import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogNewLayer } from "./dashboard/dialog new layer/dialog-new-layer.conponent"
import { RouterModule } from "@angular/router";
import { routes } from "./admin.route";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from './dashboard/layout/layout.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    DialogNewLayer,
    LayoutComponent
  ],
  entryComponents: [
    DialogNewLayer
  ]
})
export class AdminModule { }
