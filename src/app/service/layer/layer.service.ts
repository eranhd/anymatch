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
        if (res.isActive == undefined) {
          res.isActive = true
          this.updateLayer(res)
        }
        return res;
      }).filter(res => res.isActive)
    if (this.ob)
      this.ob.next(this._layers)
  }

  public addLayer(layer, schoolId): Promise<Layer> {
    layer.isActive = true;
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

  public updateLayer(l: Layer): Promise<boolean> {
    return new Promise((res, rej) => {
      this.update<Layer>({ layer: l }).then(layer => {
        this._layers = this._layers.map(r => {
          if (layer._id === r._id)
            return layer;
          return r;
        })
        res(true);
      })
    })

  }

  public async remove(id) {
    if (!this._layers)
      return
    let layer = null
    if (confirm("מחיקה זו לא תאפשר לשחזר את הנתונים. האם למחקו?")) {
      this._layers = this._layers.filter(l => {
        if (l._id == id) {
          l.isActive = false;
          layer = l;
        }
        return l._id != id
      })

    }
    await this.updateLayer(layer)
    this.ob.next(this._layers ? this._layers : [])
    return true
  }

  public getGraph(id, classes) {

    return this.http.post("graph/graph", { layerId: id, groups: classes })
  }

  public async saveMatch(groups, layerId) {
    let arr = []
    if (groups) {
      groups.forEach(a => {
        let group = []
        a.forEach(v => {
          group.push(v.id)
        })
        arr.push(group)
      });
      let l = this.getLayerById(layerId);
      l.groups = arr;

      await this.updateLayer(l)
      return true;

    }


  }

  public async forbidden(id1: string, id2: string, layerId: string) {
    let item = {
      user1: id1,
      user2: id2,
    };
    let l = this.getLayerById(layerId);
    if (!l.forbidden)
      l.forbidden = [item];
    else
      l.forbidden.push(item);
    await this.updateLayer(l)
    return true;
  }

}
