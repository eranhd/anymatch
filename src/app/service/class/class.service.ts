import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";
import { Class } from "../../models";


@Injectable()
export class ClassService extends ControlerService {


  private _class: Class[];


  constructor(http: HttpService) {
    super("class", http);
  }

  public async getAllClass(schoolId: string) {
    this._class = await this.getAll<Class[]>(schoolId);
    console.log(this._class);
  }

  public addClass(clas, schoolId): Promise<Class> {
    // if (!this._class)
    //   this._class = [];

    return new Promise(
      (res, rej) => {
        this.create<Class>({ schoolId: schoolId, clas: clas })
          .then(
          (c) => {
            // this._class[c._id] = c;
            this.getAllClass(schoolId).then(_=>{res(clas)});
          });
      });
  }


  public addUser(id: string, classId: string) {
    if (!this._class[classId].usersId)
      this._class[classId].usersId = [];
    this._class[classId].usersId.push(id);
    this.updateClass(classId);
  }

  public updateClass(id: string) {
    this.update(this._class[id]).then(res => {
      this._class[id] = res[0];
    });
  }


}
