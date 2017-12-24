import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";
import { User } from "../../models";
import { Observable } from "rxjs";


@Injectable()
export class UserService extends ControlerService {

  private _users: User[];
  private obUsers: Observable<User[]>;
  private ob;


  constructor(http: HttpService) {
    super("user", http);
    if (!this.obUsers)
      this.initObservable([]);
  }

  public addUser(user, schoolId) {
    return this.create(user);
  }

  public updateUser(user) {
    return new Promise((res, rej) => {
      this.update<User>(user).then(updateduser => {
        this._users.map(u => {
          if (u._id != user._id)
            return u
        });
        this._users.push(user);
        this.ob.next(this._users);
        res(updateduser);
      });
    })

  }


  private initObservable(data) {
    this.obUsers = new Observable(o => {
      this.ob = o;
      if (this._users)
        this.ob.next(this._users);
      else
        o.next(data);
    });
  }


  public async getAllUsers(schoolId: string) {
    this._users = await this.getAll<User[]>(schoolId);
    this._users = this._users
      .map(
      (res, index) => {
        res["position"] = index;
        return res;
      });
    // console.log(this._users);
    if (this.ob)
      this.ob.next(this._users)
  }

  public get users(): Observable<User[]> {
    if (this.ob)
      this.ob.next(this._users ? this._users : [])
    return this.obUsers;
  }

  public get num() {
    return this._users ? this._users.length : 0;
  }

  public getUsersByLayer(id: string) {
    return this._users.filter(res => {
      return res.layerId === id;
    })
  }

  public getUserById(id: string){
    return this._users.find(u=> u._id == id)
  }

  

}
