import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuTranslation, MenuTranslationService, MenuType, TranslationGrouping } from "../../core";

@Component({
  selector: 'dqxt-menu-translation-page',
  templateUrl: 'menu-translation.page.html'
})
export class MenuTranslationPage {

  private mainMenu: TranslationGrouping;
  private isLoading: boolean = true;

  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private menuTranslationService: MenuTranslationService) {

    if (this.navParams && this.navParams.data && this.navParams.data.translationGrouping) {
      this.mainMenu = this.navParams.data.translationGrouping;
      this.isLoading = false;
    } else {
      this.buildMainMenu();
    }
  }

  private buildMainMenu(): void {

    this.menuTranslationService
    .getMenu(MenuType.MainMenu)
    .subscribe((menu: TranslationGrouping) => {
      this.mainMenu = menu;
      this.isLoading = false;
    });
  }

  protected openMenu(translation: MenuTranslation): void {
  
    if (translation.subMenus && translation.subMenus.groupings && translation.subMenus.groupings.length > 0) {
      this.navController.push(
        MenuTranslationPage,
        { translationGrouping: translation.subMenus }
      );
    }
  }
}
