import { Component } from '@angular/core';
import {StatisticsPage} from "../statistics/statistics";
import {ListPage} from "../list/list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = ListPage;
  tab2Root = StatisticsPage;
  constructor() {
  }
}
