import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuTranslation, MenuTranslationService, MenuType, TranslationGrouping } from "../../core";
import { MenuIndexPage } from "../";

@Component({
  selector: 'dqxt-menu-translation-page',
  templateUrl: 'menu-translation.page.html'
})
export class MenuTranslationPage {

  public mainMenu: TranslationGrouping;
  public isLoading: boolean = true;
  
  private menuName: string = "";
  private subMenuName: string = "";

  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private menuTranslationService: MenuTranslationService) {

    if(this.navParams && this.navParams.data) {
      if(this.navParams.data.menuName) {
        this.menuName = this.navParams.data.menuName;
      }

      if(this.navParams.data.subMenuName) {
        this.subMenuName = this.navParams.data.subMenuName;
      }

      if (this.navParams.data.translationGrouping) {
        this.mainMenu = this.navParams.data.translationGrouping;
        this.isLoading = false;
        return;
      }
      
      if (this.navParams.data.menuType) {
        this.buildMenu(this.navParams.data.menuType);
        return;
      }
    } 

    this.redirectToIndex();
  }

  public getMenuName(): string {
    let displayName = this.menuName;

    if (this.subMenuName && this.subMenuName.length > 0) {
      displayName = `${displayName} (${this.subMenuName})`
    }

    return displayName;
  }

  private buildMenu(menuType: MenuType): void {
    this.menuTranslationService
      .getMenu(menuType)
      .subscribe((menu: TranslationGrouping) => {
        this.mainMenu = menu;
        this.menuName = menuType.displayName;
        this.isLoading = false;
      });
  }

  private redirectToIndex(): void {
    this.navController.setRoot(MenuIndexPage);
  }

  protected openMenu(translation: MenuTranslation): void {
    if (translation.subMenus && translation.subMenus.groupings && translation.subMenus.groupings.length > 0) {

      let subMenu = this.subMenuName;

      if (subMenu && subMenu.length > 0) {
        subMenu = `${subMenu} > ${translation.originalText}`;

      } else {
        subMenu = translation.originalText;
      }

      this.navController.push(
        MenuTranslationPage,
        { 
          translationGrouping: translation.subMenus,
          menuName: this.menuName,
          subMenuName: subMenu
        }
      );
    }
  }
}
