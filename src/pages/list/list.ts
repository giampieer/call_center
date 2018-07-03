import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { WebServicesProvider } from "../../providers/web-services/web-services";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  calls : any;
  constructor(public webservices: WebServicesProvider) {
  }
  ionViewWillEnter() {
    this.getListCalls()
  }
  getListCalls() {
    this.webservices.listCall().then((result) => {
      console.log(result);
      this.calls = result;
    }, (err) => {
      console.log(err);
    });
  }
}
