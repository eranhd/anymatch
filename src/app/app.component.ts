import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SchoolService, AuthService } from "./service";
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;
  list;

  constructor( @Inject(FormBuilder) fb: FormBuilder,
    private schoolService: SchoolService,
    private authService: AuthService) {
    this.form = fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });


  }

  public async createSchool() {
    // if (this.form.validator)
    // this.schoolService.createSchool(this.form.value).subscribe(res => {
    //   console.log(res.json());
    // })
    let user = await this.authService.signup(this.form.value)
    console.log(user)

  }

  public async login() {
    let user = await this.authService.login(this.form.value);
    console.log(user);
    if (!user["success"]) {
      if (user["code"] == 1) {
        console.log("not found");
      }
      else{
        console.log("password invalid");
      }
    }

  }

  public clear() {
    this.form.reset();
  }


}
