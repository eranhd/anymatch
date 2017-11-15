import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";


@Injectable()
export class HttpService {


  private path: string = "http://localhost:3000/";
  private header: Headers;

  constructor(private http: Http) {
    this.header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: this.header });
  }

  public post<T>(url, body: T, options?) {
    return new Promise((res, rej) => {
      this.http.post(this.path + url, body, options).subscribe(response => {
        res(response.json());
      });
    });

  }

  public get<T>(url, options?) {
    return new Promise((res, rej) => {
      this.http.get(this.path + url, options).subscribe(response => {
        res(response.json());
      });
    });

  }

}
