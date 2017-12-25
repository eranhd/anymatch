import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";


@Injectable()
export class HttpService {


  public path: string = "http://" + window.location.host + "/" //"http://localhost:3000/";
  private header: Headers;
  private options;
  constructor(private http: Http) {
    this.header = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.header });
  }

  public post<T>(url, body: T, options?): Promise<T> {
    return new Promise((res, rej) => {
      this.http.post(this.path + url, body, this.options).subscribe(response => {
        res(response.json());
      });
    });

  }

  public get<T>(url, options?): Promise<T> {
    return new Promise((res, rej) => {
      this.http.get(this.path + url, this.options).subscribe(response => {
        res(response.json());
      });
    });

  }

}
