import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebServicesProvider {
  rest: string = "http://local.callcenter.com/";
  constructor(public http: HttpClient) {
    console.log('Hello WebservicesProvider Provider');
  }
  listCall() {
    return new Promise(resolve => {
      this.http.get(this.rest)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
}
