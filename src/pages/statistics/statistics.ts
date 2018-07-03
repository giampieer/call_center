import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {WebServicesProvider} from "../../providers/web-services/web-services";

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  calls : any;
  public chartLabels1:string[] = ['Llamada Colgada','Llamada Perdida','Llamada Extraviada'];
  public chartLabels2:string[] = ['Usuario 1000','Usuario 1001','Usuario 1002','Usuario 1003','Usuario 1004'];
  public chartData1:number[] = [0,0,0];
  public chartData2:number[] = [0,0,0];
  public chartType1:string = 'doughnut';
  public chartType2:string = 'line';
  constructor(public webservices: WebServicesProvider) {
  }
  ionViewWillEnter() {
    this.getListData();
  }
  getListData() {
    this.webservices.listData().then((result) => {
      console.log(result);
      this.calls = result;
      this.chartData1 = [this.calls.callerhungup,this.calls.notfound,this.calls.cancelled];
      this.chartData2 = [this.calls.callerid1000,this.calls.callerid1001,this.calls.callerid1002,this.calls.callerid1003,this.calls.callerid1004];
      console.log(this.chartData1);
    }, (err) => {
      console.log(err);
    });
  }
}
