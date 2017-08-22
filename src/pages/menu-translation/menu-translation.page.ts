import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuTranslation, TranslationGrouping } from "../../core";

@Component({
  selector: 'dqxt-menu-translation-page',
  templateUrl: 'menu-translation.page.html'
})
export class MenuTranslationPage {

  private mainMenu: TranslationGrouping;

  constructor(
    public navController: NavController,
    public navParams: NavParams) {

    if (this.navParams && this.navParams.data && this.navParams.data.translationGrouping) {
      this.mainMenu = this.navParams.data.translationGrouping;
    } else {
      this.mainMenu = this.buildMainMenu();
    }
  }

  private buildMainMenu(): TranslationGrouping {
    let menu = new TranslationGrouping;
    
    menu.groupings = [
        [
          { originalText: "はなす", translatedText: "Release", subMenus: {
            groupings: [[
              { originalText: "あああ", translatedText: "AAA", subMenus: null},  
              { originalText: "ううう", translatedText: "UUU", subMenus: null},
              { originalText: "おおお", translatedText: "OOO", subMenus: null},
            ]]
          }}, 
          { originalText: "どうぐ", translatedText: "How", subMenus: null},
          { originalText: "そうび", translatedText: "Love", subMenus: null},
          { originalText: "つよさ", translatedText: "Strength", subMenus: null},
        ],
        [
          { originalText: "じゅもん", translatedText: "Jun", subMenus: null}, 
          { originalText: "せんれき", translatedText: "Distess", subMenus: null},
          { originalText: "しちべる", translatedText: "To Eat", subMenus: null},
          { originalText: "さくせん", translatedText: "Sakusen", subMenus: null},
        ],
      ];

      return menu;
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
