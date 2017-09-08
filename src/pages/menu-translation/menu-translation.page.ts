import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuTranslation, MenuTranslationService, MenuType, TranslationGrouping } from "../../core";
import { MenuIndexPage } from "../";

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
    } else if (this.navParams && this.navParams.data && this.navParams.data.menuType) {
      this.buildMenu(this.navParams.data.menuType);
    } else {
      this.redirectToIndex();
    }
  }

  private buildMenu(menuType: MenuType): void {
    this.menuTranslationService
      .getMenu(menuType)
      .subscribe((menu: TranslationGrouping) => {
        this.mainMenu = menu;
        this.isLoading = false;
      });
  }

  private redirectToIndex(): void {
    this.navController.setRoot(MenuIndexPage);
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
