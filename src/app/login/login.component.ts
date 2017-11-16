import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from "@angular/forms";
import { SchoolService, AuthService } from "../service";
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from "../models";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;
  public list;
  public title: string = "Login";
  private _createNewSchool: boolean = false;

  constructor( @Inject(FormBuilder) fb: FormBuilder,
    private schoolService: SchoolService,
    private authService: AuthService,
    private router: Router) {
    this.form = fb.group({
      login: fb.group({
        username: ["", Validators.required],
        pass: fb.group({
          password: ["", Validators.required],
          verifyPassword: [""]
        }, { validator: this.areEqual })
      }),
      newSchool: fb.group({
        name: ["", Validators.required],
        code: ["", Validators.required]
      })

    });


  }

  public changeCreateSchool() {
    this._createNewSchool = true;
    this.title = "Sign Up";
  }

  public async login() {

    let u = {};
    u["username"] = this.form.controls.login["controls"].username.value;
    u["password"] = this.form.controls.login["controls"].pass.value.password;
    let user = await this.authService.login(u);
    console.log(user);
    if (!user["success"]) {
      if (user["code"] == 1) {
        console.log("not found");
      }
      else {
        console.log("password invalid");
      }
    }
    else
      this.router.navigate(["/admin"])
    this.router.navigate(["/admin"])
  }

  public async signup() {
    if (this.form.status === "VALID") {
      // console.log(this.form);
      let school = await this.schoolService.createSchool(this.form.controls.newSchool.value);
      let user = {};
      user["username"] = this.form.controls.login["controls"].username.value;
      user["password"] = this.form.controls.login["controls"].pass.value.password;
      await this.authService.signup(user, school["lists"]._id);
      this.login();
      // await this.authService.addSchool(school["_id"]);
    }
  }

  public clear() {
    this.form.reset();
  }

  public get createNewSchool() {
    return this._createNewSchool;
  }

  areEqual(group: FormGroup) {
    let valid = false;
    // console.log(group.controls["password"].value === group.controls["verifyPassword"].value);
    return group.controls["password"].value === group.controls["verifyPassword"].value;
  }


}
