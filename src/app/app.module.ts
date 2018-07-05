import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule} from "ng2-charts";
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatisticsPage} from "../pages/statistics/statistics";
import { ListPage} from "../pages/list/list";
import { WebServicesProvider } from '../providers/web-services/web-services';
import { IpPage } from "../pages/ip/ip";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    StatisticsPage,
    ListPage,
    IpPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    StatisticsPage,
    ListPage,
    IpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebServicesProvider
  ]
})
export class AppModule {}
