import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { School, Class, User, Layer } from "../../models";
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DialogNewLayer } from "./dialog new layer/dialog-new-layer.conponent";
import { DialogEditLayer } from "./dialog-edit-layer/dialog-edit-layerconponent";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HeaderCard } from "../../models";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  public school;
  public headerCards: HeaderCard[];

  displayedColumns = ['position', 'name', 'class_rooms', 'students'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public schoolService: SchoolService,
    public authService: AuthService,
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
    this.headerCards = [
      new HeaderCard("person", "מספר סטודנטים", this.userService.num, "#ff7676"),
      new HeaderCard("school", "מספר שכבות", this.layerService.num, "#796aee"),
      new HeaderCard("done", "שיבוצים שבוצעו", this.schoolService.numOfMatch, "#ffc36d"),
      new HeaderCard("sync", "שיבוצים בתהליך", this.userService.num, "#54e69d")
    ]
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


