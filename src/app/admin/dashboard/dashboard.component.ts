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
export class DashboardComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  school;

  displayedColumns = ['position', 'name', 'class_rooms', 'students'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public schoolService: SchoolService,
    private authService: AuthService,
    @Inject(FormBuilder) fb: FormBuilder,
    public layerService: LayerService,
    private classService: ClassService,
    public userService: UserService,
    public dialog: MatDialog) {

    this.layerService.layers.subscribe(res => {
      this.dataSource = new MatTableDataSource<Layer>(res);
    })

  }

  public update() {
    // this.schoolService.update();
  }

  public addLayer() {


    let dialogRef = this.dialog.open(DialogNewLayer, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.success)
        this.layerService.addLayer(result.layer, this.authService.getUser().schoolId).then(res => {
        });
    });
  }

  public addClass() {
    let c = new Class();
    c.name = this.form.controls.addClass["controls"].name.value;
    let lId = this.layerService.getIdByName(this.form.controls.addClass["controls"].name.value)
    this.classService.addClass(c, this.authService.getUser().schoolId)
      .then(
      res => {
        this.layerService.addClass(res._id, lId);
        console.log(res)
      });
  }

  public addUser() {
    let u = new User();
    u.username = this.form.controls.addUser["controls"].name.value;
    u.schoolId = this.authService.getUser().schoolId;
    u.password = "pass" + u.username;
    this.authService.adduser(u, u.schoolId).then(user => {
      this.schoolService.addUser(user._id);
    })
  }



  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectRow(layer: Layer) {
    console.log(layer);
    let dialogRef = this.dialog.open(DialogEditLayer, {
      width: '350px',
      data: layer
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result && result.success)
        this.layerService.updateLayer(result.layer);
    });

  }

}


