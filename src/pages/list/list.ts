import { Component } from '@angular/core';
import { WebServicesProvider } from "../../providers/web-services/web-services";
import { AlertController } from 'ionic-angular';
import { Platform, App } from 'ionic-angular';
import {IpPage} from "../ip/ip";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  calls : any;
  constructor(public webservices: WebServicesProvider,public app: App, private alertCtrl: AlertController,public platform: Platform) {
  }
  ionViewWillEnter() {
    this.getListCalls();
  }
  getListCalls() {
    this.webservices.listCall().then((result) => {
      console.log(result);
      this.calls = result;
    }, (err) => {
      console.log(err);
    });
  }
  signOff() {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      message: '¿ Desea cerrar sesion ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Cerrar Sesion',
          handler: () => {
            window.localStorage.clear();
            this.app.getRootNav().setRoot(IpPage);
          }
        }
      ]
    });
    alert.present();
  }
}
