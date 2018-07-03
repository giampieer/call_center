import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebServicesProvider {
  listcall: string = "http://local.callcenter.com/?op=1";
  listdata: string = "http://local.callcenter.com/?op=2";
  constructor(public http: HttpClient) {
    console.log('Hello WebservicesProvider Provider');
  }
  listCall() {
    return new Promise(resolve => {
      this.http.get(this.listcall)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  listData() {
    return new Promise(resolve => {
      this.http.get(this.listdata)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

}
