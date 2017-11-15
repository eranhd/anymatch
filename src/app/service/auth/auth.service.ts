import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";

const SIGNUP: string = "signup"
const LOGIN: string = "login"

@Injectable()
export class AuthService {


  constructor(private http: HttpService) {
  }

  public signup(user) {
    return this.http.post(SIGNUP, user);
  }

  public login(user) {
    return new Promise((res, error) => {
      console.log("in auth");
      this.http.post(LOGIN, user).then(r=>{
        res(r);
      })
    })

  }


}
