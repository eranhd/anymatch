import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Layer, User, HeaderCard } from "../../models";
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestOptions, Headers, Http } from "@angular/http";
import { Observable } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OpenStudentDialogComponent } from './open-student-dialog/open-student-dialog.component';
import { NewLayerChargeDialogComponent } from "./new-layer-charge/new-layer-charge-dialog.component";
import { NavService } from '../../service/nav/nav.service';
import { ComponentBase } from "../../componentBase.model";

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayerComponent extends ComponentBase implements OnInit {

  private _layer: Layer;
  private _addStudentFlag: boolean = false;
  public addStudentButtonText = "הוסף תלמיד";

  private _students: User[];
  public form: FormGroup;
  public classesName;

  public graph;
  public showTable = false;
  constructor(private activatedRoute: ActivatedRoute,
    private layerService: LayerService,
    public userService: UserService,
    @Inject(FormBuilder) fb: FormBuilder,
    private authService: AuthService, private http: Http,
    private schoolService: SchoolService,
    public dialog: MatDialog,
    navService: NavService) {

    super(navService)
    this.form = fb.group({
      username: ["", Validators.required],
      fname: "",
      lname: ""
    });


    this.activatedRoute.params.subscribe(res => {
      this._layer = this.layerService.getLayerById(res["id"]);


      this.classesName = [];
      for (let i = 0; i < this._layer.classes; i++)
        this.classesName.push(this._layer.name + " " + (i + 1));

      this.userService.users.subscribe(users => {

        if (users)
          this._students = users.filter(u => {
            // console.log(u.layerId + " ," + res["id"])
            return u.layerId === res["id"];
          }).sort((a, b) => {
            return a.username.localeCompare(b.username)
          }).sort((a, b) => a.group ? (a.group > b.group ? 1 : -1) : -1);
      })
    });




  }

  public get layer() {
    return this._layer;
  }

  ngOnInit() {
    this.headerCards = [
      new HeaderCard("class", "מספר כיתות", this.layer.classes, "#796aee"),
      new HeaderCard("done_all", "תלמדים שמילאו העדפות", this.layerService.num, "#ffc36d"),
      new HeaderCard("supervisor_account", "מספר תלמידים", this.userService.getUsersByLayer(this.layer._id).length, "#63c3ff"),
      new HeaderCard("show_chart", "מספר שיבוצים שבוצעו", this.layerService.num, "#63c3ff")
    ]

  }

  public get addStudentFlag() {
    return this._addStudentFlag;
  }

  public get students() {
    return this.searchTerm != "" ? this._students.filter(s =>
      s.fname.includes(this.searchTerm) || s.lname.includes(this.searchTerm) || s.username.includes(this.searchTerm)
    ) : this._students
  }

  public changeFlag() {
    this._addStudentFlag = !this._addStudentFlag;
  }

  public set lockTime(e) {
    this._layer.lockTime = e;
    this.layerService.updateLayer(this._layer).then(res => { })
  }

  public get lockTime() {
    return this._layer.lockTime;
  }

  public displayName(id) {
    let u = this._students.find(u => id == u._id)
    return u.fname + " " + u.lname;
  }

  public addStudent(name: string, fname: string, lname: string) {

    let user = new User();
    user.schoolId = this.authService.getUser().schoolId;
    user.username = name;
    user.layerId = this._layer._id;

    this.userService.addUser(user, user.schoolId).then(res => {

      if (res["user"]) {
        let u = res["user"];
        u.schoolId = this.authService.schoolId;
        u.layerId = this._layer._id;
        u.fname = fname;
        u.lname = lname;
        u.permission = "student";
        this.authService.addOperation("הוספת משתמש חדש", "person");
        this.userService.updateUser(u).then(ret => {
          this.form.reset();
        });
      }
    })
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();


      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(window.location.host + "/user/upload", formData, options).subscribe(res => {
        let users = res.json();
        if (users) {
          users.forEach(e => {
            this.userService.addUser(e, this.authService.schoolId).then(r => {
              if (r["user"]) {
                let u = r["user"];
                u.schoolId = this.authService.schoolId;
                u.layerId = this._layer._id;
                u.fname = e.fname;
                u.lname = e.lname;
                u.permission = "student";
                this.userService.updateUser(u).then(ret => {
                  console.log(ret)
                });
              }
            });
          });
        }
      });
    }
  }


  public async startMatch() {
    this.graph = await this.layerService.getGraph(this._layer._id, this._layer.classes > 0 ? this._layer.classes : 1)
    this._students.forEach(u => {
      this.graph.forEach((g, i) => {
        let group = g.find(v => v.id == u._id);
        if (group)
          u.group = i;
      });
    });
    this._students = this._students.sort((a, b) => a.group > b.group ? 1 : -1);
  }

  public get hasGraph() {
    return !!this.graph
  }

  public async saveMatch() {
    await this.layerService.saveMatch(this.graph, this._layer._id);
    this.schoolService.addMatch();
  }

  public openStudent(s: User) {
    // console.log(s);
    let dialogRef = this.dialog.open(OpenStudentDialogComponent, {
      width: '600px',
      data: {
        user: s,
        positivePrefer: this.userService.getUsersByLayer(this._layer._id).filter(u => s.positivePrefer.includes(u._id)),
        negativePrefer: this.userService.getUsersByLayer(this._layer._id).filter(u => s.negativePrefer.includes(u._id)),
        students: this._students,
        layerId: this._layer._id
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result && result.success)
        this.userService.updateUser(result.user).then(u => { })
    });

  }


  public addNewCharge() {
    // console.log(s);
    let s: User = new User()
    let dialogRef = this.dialog.open(NewLayerChargeDialogComponent, {
      width: '600px',
      data: {
        user: s
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      // console.log(result.user)
      if (result && result.success)
        this.userService.addUser(result.user, this.authService.schoolId).then(u => {
          if (u["user"]) {
            s = u["user"];
            s.fname = result.user.fname;
            s.lname = result.user.lname;
            s.permission = "charge";
            s.layerId = this._layer._id;
            s.schoolId = this.authService.schoolId;

            this.userService.updateUser(s).then(ret => {
              // console.log(ret)
            });
          }
        })
    });

  }

}
