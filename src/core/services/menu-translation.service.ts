import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { 
    HttpBaseUrlService,
    MenuType, 
    TranslationGrouping 
} from "../";

const apiRouteBase: string = "menu/";
const mainMenuSuffix: string = "main-menu";

@Injectable()
export class MenuTranslationService {

    constructor(
        private http: Http,
        private httpBaseUrlService: HttpBaseUrlService) {   
    }

    public getMenu(menuType: MenuType) : Observable<TranslationGrouping> {
        
        let url = `${this.httpBaseUrlService.getServiceBase()}${apiRouteBase}`;

        if(menuType == MenuType.MainMenu) {
            url += mainMenuSuffix;
        }
        
        return this
            .http
            .get(url)
            .map((response: Response) => response.json());
    }
}