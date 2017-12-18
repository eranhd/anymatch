import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule } from "@angular/router";
import { routes } from "./admin.route";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { LayoutComponent } from '../layout/layout.component';

import { LayerComponent } from './layer/layer.component';
import { ComponentsModule } from "../components/compontns.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayersComponent } from './layers/layers.component';
import { StudentsComponent } from './students/students.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { OpenStudentDialogComponent } from './layer/open-student-dialog/open-student-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,

    LayerComponent,
    LayersComponent,
    StudentsComponent,
    SettingsComponent,
    HelpComponent,
    OpenStudentDialogComponent
  ],
  entryComponents: [
    OpenStudentDialogComponent
  ]
})
export class AdminModule { }
