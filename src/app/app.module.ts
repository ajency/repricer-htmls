import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyNewPage } from '../pages/my-new/my-new';
import { ImportcsvPage } from '../pages/importcsv/importcsv';
import { LoginPage } from '../pages/login/login';
import { PricesPage } from '../pages/prices/prices';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyNewPage,
    ImportcsvPage,
    LoginPage,
    PricesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyNewPage,
    ImportcsvPage,
    LoginPage,
    PricesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
