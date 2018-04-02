import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./client.route";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule, } from "@angular/forms";
import { ComponentsModule } from "../components/compontns.module";
import { SettingsComponent } from "./settings/settings.component";
import { MyLayerComponent } from './my-layer/my-layer.component';
import { MyClassComponent } from './my-class/my-class.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent,
    SettingsComponent,
    MyLayerComponent,
    MyClassComponent
  ],
  entryComponents: [
  ]
})
export class ClientModule { }
