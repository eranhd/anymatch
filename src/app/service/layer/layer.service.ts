import { Injectable } from '@angular/core';

import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";

@Injectable()
export class LayerService extends ControlerService {

  constructor(private http: HttpService) {
    super("layer");
  }

  public addLayer(layer, schoolId) {
    return this.http.post("layer/create", { schoolId: "5a115c57c6c7fc2534a12e64", layer: { name: layer.name } });
  }

}
