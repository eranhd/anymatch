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

  public _user: User;
  private _feedback: number[] = [];

  constructor(private http: HttpService) {
  }

  public async signup(user, id: string) {
    let u = await this.http.post(path.SIGNUP, user);
    if (u["success"]) {
      u["user"].schoolId = id;
      this._user = u["user"];
      await this.update();
      return true;
    }
  }

  public async adduser(user, id: string): Promise<User> {
    let u = await this.http.post(path.SIGNUP, user);
    if (u["success"]) {
      await this.update();
      return u;
    }
  }

  public login(user) {
    return new Promise((res, error) => {
      // console.log("in auth");
      this.http.post(LOGIN, user).then(u => {
        if (u["success"]) {
          this._user = u["user"];
          localStorage.setItem("auth", JSON.stringify(user));
          // console.log(this._user)
          if (this._user.permission != "student") {
            this.http.post<number[]>("feedback/all", null).then(res => {
              this._feedback = res["results"];
              this._feedback.unshift(0);
              // console.log(this._feedback);
            });
          }
        }
        res(u);
      });
    });
  }

  public getUser() {
    return this._user;
  }

  public get schoolId() {
    if (this._user)
      return this._user.schoolId;
    return null;
  }

  public get id() {
    if (this._user)
      return this._user._id;
    return "";
  }

  public update() {
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



  public changePassword(password, newPassword) {
    this.http.post("user/changePassword", { user: this._user, password: password, newPassword: newPassword }).then(u => {
      if (u["success"]) {
        this._user = u["user"];
        this._user.isLogin = true;
      }
    });

  }

  public addPositive(id) {
    if (!this._user.positivePrefer)
      this._user.positivePrefer = [];
    this._user.positivePrefer.push(id);
    return true;
  }

  public addNegative(id) {
    if (!this._user.negativePrefer)
      this._user.negativePrefer = [];
    this._user.negativePrefer.push(id);
    return true;
  }

  public isAuth() {
    return !!this._user
  }

  public get permission() {
    return this._user ? this._user.permission : ""
  }

  public get displayName() {
    return this._user.fname + " " + this._user.lname;
  }

  public async addOperation(text, icon) {
    let operation = {
      text: text,
      icon: icon
    }
    this._user.lastOperation ?
      this._user.lastOperation.unshift(operation) : this._user.lastOperation = [operation];
    if (this._user.lastOperation.length > 5)
      this._user.lastOperation = this._user.lastOperation.slice(0, 5);
    // });
    await this.update()
    console.log("add operation")
  }

  public get lastOperation() {
    return this._user.lastOperation;
  }

  public async sendFeedback(result) {
    await this.http.post("feedback/create", { feedback: { schoolId: this.schoolId, result: result } })
    // this._user
  }

  public get feedback() {
    return this._feedback;
  }



}
