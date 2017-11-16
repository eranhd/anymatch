import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { User } from "../../models";
import { path } from "../path.enum";

const SIGNUP: string = "signup"
const LOGIN: string = "login"
const UPDATE: string = "user/update"

@Injectable()
export class AuthService {

  private _user: User;

  constructor(private http: HttpService) {

  }

  public async signup(user, id: string) {
    let u = await this.http.post(path.SIGNUP, user);
    if (u["success"]) {
      u["user"].schoolId = id;
      this._user = u["user"];
      await this.update();
      // await this.login(this._user);
      return true;
    }
  }

  public login(user) {
    return new Promise((res, error) => {
      // console.log("in auth");
      this.http.post(LOGIN, user).then(u => {
        if (u["success"]) {
          this._user = u["user"];
        }
        res(u);
      });
    });
  }

  public getUser() {
    return this._user;
  }

  public get id() {
    if (this._user)
      return this._user._id;
    return "";
  }

  private update() {
    return new Promise((res, error) => {
      // console.log("in auth");
      this.http.post(UPDATE, this._user).then(r => {
        if (r["success"])
          this._user = r["user"];
        res(r["success"]);
      });
    });
  }

  public async addSchool(id: string) {
    this._user.schoolId = id;
    let item = await this.update();
    return item;

  }

  public isAuth() {
    return new Promise((res, rej) => {
      res(!!this._user);
    })
  }




}
