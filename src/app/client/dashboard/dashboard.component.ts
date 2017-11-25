import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { School, Class, User, Layer } from "../../models";
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DialogNewLayer } from "./dialog new layer/dialog-new-layer.conponent";
import { DialogEditLayer } from "./dialog-edit-layer/dialog-edit-layerconponent";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {


}


