import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  constructor() {
  }
  public chartLabels:string[] = ['sadsad','sadas','asdasdas'];
  public chartData:number[] = [100,12,132];
  public chartType:string = 'doughnut';
  public chartType1:string = 'line';

}
