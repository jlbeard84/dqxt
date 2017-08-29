import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HttpBaseUrlService, MenuTranslationService } from "../core";

import * as Pages from "../pages";

@NgModule({
  declarations: [
    MyApp,
    Pages.MenuTranslationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages.MenuTranslationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpBaseUrlService,
    MenuTranslationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
