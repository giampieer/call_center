import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IpPage } from './ip';

@NgModule({
  declarations: [
    IpPage,
  ],
  imports: [
    IonicPageModule.forChild(IpPage),
  ],
})
export class IpPageModule {}
