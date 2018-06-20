import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";
import { User } from "../../models";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Injectable()
export class UserService extends ControlerService {

  private _users: User[];
  private obUsers: ReplaySubject<User[]> = new ReplaySubject();
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
        if (updateduser['user']) {
          if (!this._users.find(u => u._id == updateduser['user']._id))
            this._users.push(updateduser['user']);
          else
            this._users = this._users.map(u => {
              if (u._id != user._id)
                return u
              return user
            });
          this.obUsers.next(this._users);
          res(updateduser);
        }
        rej('update failed');
    });
  })

}


  private initObservable(data) {
  if (this._users)
    this.obUsers.next(this._users);
  else
    this.obUsers.next(data);

}


  public async getAllUsers(schoolId: string) {
  this._users = await this.getAll<User[]>(schoolId);
  this._users = this._users
    .map(
      (res, index) => {
        res["position"] = index;
        return res;
      });
  if (this.ob)
    this.obUsers.next(this._users)
  return this._users;
}

  public get users(): Observable < User[] > {

  this.obUsers.next(this._users ? this._users : [])
    return this.obUsers;
}

  public get num() {
  return this._users ? this._users.filter(u => u.permission == 'student').length : 0;
}

  public getUsersByLayer(id: string) {
  return this._users.filter(res => {
    return res.layerId === id;
  })
}

  public getUserById(id: string) {
  return this._users.find(u => u._id == id)
}

  public get hasPreferd() {
  return this._users.filter(u => u.negativePrefer.length > 0 || u.positivePrefer.length > 0).length;
}



}
