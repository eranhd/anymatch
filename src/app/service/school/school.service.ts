import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ControlerService } from "../controlerService.model";
@Injectable()
export class SchoolService extends ControlerService {

  private CREATE: string = "create";
  private ALL: string = "all";

  constructor(private http: HttpService) {
    super("school");
  }

  public createSchool(body) {
    return this.http.post(this.path + this.CREATE, body);
  }

  public getSchool(id:string){
    
  }


  public getAll() {
    return this.http.get(this.path + this.ALL);
  }

  public addUser(id: string){

  }

}
