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
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }
}
