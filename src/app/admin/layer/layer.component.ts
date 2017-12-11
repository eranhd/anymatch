import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Layer, User } from "../../models";
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestOptions, Headers, Http } from "@angular/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayerComponent implements OnInit {

  private _layer: Layer;
  private _addStudentFlag: boolean = false;
  public addStudentButtonText = "הוסף תלמיד";

  private _students: User[];
  public form: FormGroup;

  public colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
  ]


  public graph;
  constructor(private activatedRoute: ActivatedRoute,
    private layerService: LayerService,
    public userService: UserService,
    @Inject(FormBuilder) fb: FormBuilder,
    private authService: AuthService, private http: Http) {


    this.form = fb.group({
      username: ["", Validators.required],
      fname: "",
      lname: ""
    })


    this.activatedRoute.params.subscribe(res => {
      this._layer = this.layerService.getLayerById(res["id"]);
      // console.log(res["id"]);
      this.userService.users.subscribe(users => {

        if (users)
          this._students = users.filter(u => {
            // console.log(u.layerId + " ," + res["id"])
            return u.layerId === res["id"];
          }).sort((a, b) => {
            return a.username.localeCompare(b.username)
          })
        // console.log(this._students);
      })
    });


  }

  public get layer() {
    return this._layer;
  }

  ngOnInit() {

  }

  public get addStudentFlag() {
    return this._addStudentFlag;
  }

  public get students() {
    return this._students;
  }

  public changeFlag() {
    this._addStudentFlag = !this._addStudentFlag;
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
      this.http.post("http://localhost:3000/user/upload", formData, options).subscribe(res => {
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


  public startMatch() {
    this.http.post("http://localhost:3000/graph/graph", { layerId: this._layer._id, groups : 2 }).subscribe(res => {
      this.graph = res.json();
      this._students.forEach(u => {
        this.graph.forEach((g,i) => { 
          let group = g.find(v => v.id == u._id); 
          if(group)
            // u.group = group.group;
            u.group = i
        });


        console.log(u.group);
      })
    });
  }

}
