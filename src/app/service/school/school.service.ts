import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";
import { School } from "../../models";
import { LayerService } from "../layer/layer.service";

@Injectable()
export class SchoolService extends ControlerService {

  private _school: School;

  constructor(http: HttpService,
    private layerService: LayerService) {
    super("school", http);
  }

  public createSchool(body): Promise<School> {
    return this.create(body);
  }

  public async initSchool(id: string) {
    // console.log(id)
    const s = await this.getById(id);
    this._school = s;
    return this._school;

  }

  public async getSchool(id: string) {
    if (this._school)
      return this._school;
    let item = await this.initSchool(id);
    return item;

  }

  public get school() {
    if (this._school)
      return this._school;
    return null;
  }

  public updateSchool() {
    this.update<School>(this._school).then(res => {
      this._school = res;
    });
  }

  public addLayer(id: string) {
    if (!this._school.layersId)
      this._school.layersId = [];
    this._school.layersId.push(id);
    this.updateSchool();
  }


  public addUser(id: string) {
    if (!this._school.usersId)
      this._school.usersId = [];
    this._school.usersId.push(id);
    this.updateSchool();
  }


  public addClass() {

  }



}
