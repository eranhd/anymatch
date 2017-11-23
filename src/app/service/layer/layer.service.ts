import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";

import { Layer } from "../../models";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class LayerService extends ControlerService {

  private _layers: Layer[];
  private obLayers: Observable<Layer[]>;
  private ob;

  constructor(http: HttpService, private authService: AuthService) {
    super("layer", http);
    if (!this.obLayers)
      this.initObservable([]);
  }

  private initObservable(data) {
    this.obLayers = new Observable(o => {
      this.ob = o;
      if (this._layers)
        this.ob.next(this._layers);
      else
        o.next(data);
    });
  }

  public async getAllLayers(schoolId: string) {
    this._layers = await this.getAll<Layer[]>(schoolId);
    this._layers = this._layers
      .map(
      (res, index) => {
        res["position"] = index;
        return res;
      });
    if (this.ob)
      this.ob.next(this._layers)
  }

  public addLayer(layer, schoolId): Promise<Layer> {
    return new Promise(
      (res, rej) => {
        this.create({ schoolId: schoolId, layer: layer })
          .then(
          l => {
            this.getAllLayers(schoolId).then(_ => {
              if (this.ob)
                this.ob.next(this._layers)
              res(<Layer>l);
            })

          });
      });
  }

  public get layers(): Observable<Layer[]> {
    if (this.ob)
      this.ob.next(this._layers ? this._layers : [])
    return this.obLayers;
  }

  public get num() {

    return this._layers ? this._layers.length : 0;
  }

  public getIdByName(name: string) {
    for (let l of this._layers)
      if (l.name === name)
        return l._id;
    return null;
  }

  public getLayerById(id: string) {
    return this._layers.find(res => {
      return res._id == id;
    })
  }


  public addClass(id: string, layerId: string) {
    let l = this.getLayerById(layerId);
    if (!l.classesId)
      l.classesId = [];
    l.classesId.push(id);
    this.updateLayer(l);
  }

  public updateLayer(l: Layer) {
    this.update({ layer: l, schoolId: this.authService.getUser()._id }).then(res => {
      this._layers[l._id] = res;
    });
  }


}
