import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpService, SchoolService, AuthService, ClassService, LayerService, UserService, MessageService } from "./service";

import { MaterialModule } from "./material/material.module";
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from "./layout/layout.component";

import { RouterModule } from "@angular/router";
import { routes } from "./app.route";
import { AuthGuard, AdminGuard } from "./guard/auth.guard";

import { ComponentsModule } from "./components/compontns.module";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**need to remove */
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { NavService } from "./service/nav/nav.service";

import { DialogNewLayer } from "./admin/dashboard/dialog new layer/dialog-new-layer.conponent"
import { DialogEditLayer } from "./admin/dashboard/dialog-edit-layer/dialog-edit-layerconponent";
import { SizeDirective } from './directives/size.directive';
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    DialogNewLayer,
    DialogEditLayer,
    SizeDirective

    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    NgbModule.forRoot(),
    // SocketIoModule.forRoot(config)
  ],
  entryComponents: [
    LayoutComponent,
    DialogNewLayer,
    DialogEditLayer
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    HttpService,
    SchoolService,
    AuthService,
    ClassService,
    LayerService,
    UserService,
    AuthGuard,
    AdminGuard,
    NavService,
    MessageService,
    SizeDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
