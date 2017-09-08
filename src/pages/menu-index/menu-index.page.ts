import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { MenuType, MenuTypeService } from "../../core";
import { MenuTranslationPage } from "../";

@Component({
  selector: 'dqxt-menu-index-page',
  templateUrl: 'menu-index.page.html'
})
export class MenuIndexPage {

  private isLoading: boolean = true;
  private menuTypes: MenuType[] = [];

  constructor(
    private navController: NavController,
    private menuTypeService: MenuTypeService) {

    this.menuTypeService.getMenuTypes().subscribe((menus: MenuType[]) => {
        this.menuTypes = menus;
        this.isLoading = false;
    });
  }

  protected openMenu(menuType: MenuType): void {
        this.navController.push(
          MenuTranslationPage,
          { menuType: menuType }
        );
  }
}
