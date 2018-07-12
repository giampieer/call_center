import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebServicesProvider {
  ip: any = JSON.parse(localStorage.getItem('ip'));
  listcall: string ;
  listdata: string ;
  constructor(public http: HttpClient) {
    console.log('Hello WebservicesProvider Provider');
  }
  validate() {
    if(this.ip != 0 ) {
      this.listcall = "http://"+this.ip+"/callcenter/?op=1";
      console.log(this.listcall);
      this.listdata = "http://"+this.ip+"/callcenter/?op=2";
    } else {
      this.listcall = "http://local.callcenter.com/?op=1";
      console.log(this.listcall);
      this.listdata = "http://local.callcenter.com/?op=2";
    }
  }
  listCall() {
    this.validate();
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
    this.validate();
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
