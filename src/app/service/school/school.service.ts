import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";
import { School } from "../../models";

@Injectable()
export class SchoolService extends ControlerService {

  private CREATE: string = "create";
  private ALL: string = "all";

  private _school: School;

  constructor(private http: HttpService) {
    super("school");
  }

  public createSchool(body) {
    return this.http.post(this.path + this.CREATE, body);
  }

  public async initSchool(id: string) {
    const s = await this.http.post(this.path + "getById"/*path.GETBYID*/, { id: id });
    if (s["success"]) {
      this._school = s["school"];
      return this._school;
    }
    else
      return null;
  }

  public async getSchool(id: string) {
    if (this._school)
      return this._school;
    let item = await this.initSchool(id);
    return item;

  }

  public get school(){
    if(this._school)
      return this._school[0];
    return null;
  }


  public getAll() {
    return this.http.get(this.path + this.ALL);
  }

  public addUser(id: string) {

  }

  public update(){
    this.http.post(this.path + path.UPDATE, this._school).then(res=>{
      this._school = res[0];
    });
  }

}
