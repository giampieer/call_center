import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-ip',
  templateUrl: 'ip.html',
})
export class IpPage {
  FrmIp: FormGroup;
  ipData : any;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.ipData = JSON.parse(localStorage.getItem('ip'));
    if(window.localStorage.getItem('ip')){
      this.navCtrl.setRoot(TabsPage);
    }
    this.FrmIp = formBuilder.group({
      ip: ['', Validators.compose([Validators.required])],
    });
  }
  resgisterIp() {
    localStorage.setItem('ip', JSON.stringify(this.FrmIp.value.ip));
    this.navCtrl.setRoot(TabsPage);
  }
}
