import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { WebServicesProvider } from "../../providers/web-services/web-services";
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  calls : any;
  constructor(public webservices: WebServicesProvider, private alertCtrl: AlertController,public platform: Platform) {
  }
  ionViewWillEnter() {
    this.getListCalls();
    localStorage.setItem('ip', JSON.stringify(0));
  }
  getListCalls() {
    this.webservices.listCall().then((result) => {
      console.log(result);
      this.calls = result;
    }, (err) => {
      console.log(err);
    });
  }
  getIp() {
    let alert = this.alertCtrl.create({
      title: 'INGRESAR IP',
      inputs: [
        {
          name: 'ip',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Borrar Anterior',
          role: 'cancel',
          handler: data => {
            //window.localStorage.clear();
            localStorage.setItem('ip', JSON.stringify(0));
            this.Alerta("Reiniciar Aplicativo");
          }
        },
        {
          text: 'Registrar',
          handler: data => {
            if (data.ip != "") {
              localStorage.setItem('ip', JSON.stringify(data.ip));
              console.log(data.ip);
            }
          }
        }
      ]
    });
    alert.present();
  }
  Alerta(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: mensaje,
      buttons: ['Cerrar App']
    });
    this.platform.ready().then(() => {
      this.platform.registerBackButtonAction(() => {
        navigator['app'].exitApp();
      });
    });
  }
}
