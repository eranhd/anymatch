import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Layer, User } from "../../models";
import { SchoolService, AuthService, LayerService, ClassService, UserService } from "../../service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  constructor(private activatedRoute: ActivatedRoute,
    private layerService: LayerService,
    public userService: UserService,
    @Inject(FormBuilder) fb: FormBuilder,
    private authService: AuthService) {


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

  addStudent(name: string, fname: string, lname: string) {

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

}
