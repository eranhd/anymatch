import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
import { path } from "../path.enum";

@Injectable()
export class UserService extends ControlerService {

  constructor(http: HttpService) {
    super("user", http);
  }

  public addUser(user, schoolId) {
    return this.create({ schoolId: schoolId, user: user });
  }
}
