import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";

@Injectable()
export class UserService extends ControlerService {

  constructor(private http: HttpService) {
    super("user");
  }

}
