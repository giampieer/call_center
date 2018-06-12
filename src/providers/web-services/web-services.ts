import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebServicesProvider {
  rest: string = "http://180.172.10.35/callcenter/";

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
