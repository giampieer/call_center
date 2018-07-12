import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-ip',
  templateUrl: 'ip.html',
})
export class IpPage {
  FrmIp: FormGroup;
  ipData : any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public formBuilder: FormBuilder) {
    this.ipData = JSON.parse(localStorage.getItem('ip'));
    if(window.localStorage.getItem('ip')){
      this.navCtrl.setRoot(TabsPage);
    }
    this.FrmIp = formBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required])],
      ip: ['', Validators.compose([Validators.required])]
    });
  }
  resgisterIp() {
    localStorage.setItem('ip', JSON.stringify(this.FrmIp.value.ip));
    if (this.FrmIp.value.id === "giampieer24" && this.FrmIp.value.pass === "1111" ) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.alert("Id o pass incorrectos")
    }
  }
  alert(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: mensaje,
      buttons: ['Cerrar']
    });
    alert.present();
  }
}
