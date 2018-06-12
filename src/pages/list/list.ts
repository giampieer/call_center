import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WebServicesProvider} from "../../providers/web-services/web-services";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
