import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpService, SchoolService, AuthService, ClassService, LayerService, UserService } from "./service";

import { MaterialModule } from "./material/material.module";
import { LoginComponent } from './login/login.component';

import { RouterModule } from "@angular/router";
import { routes } from "./app.route";
import { AuthGuard } from "./guard/auth.guard";




/**need to remove */
import { DashboardComponent } from "./admin/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpService,
    SchoolService,
    AuthService,
    ClassService,
    LayerService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
