import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as Pages from '../pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) 
  public nav: Nav;

  public rootPage:any = Pages.MenuIndexPage;
  public pages: Array<any> = [];

  constructor(
    menuController: MenuController,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {

    this.pages.push(
      { title: "Menu Translations", component: Pages.MenuIndexPage } 
    );

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public openPage(page: any): void {
    // reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
}
}

