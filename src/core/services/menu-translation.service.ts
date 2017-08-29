import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { 
    HttpBaseUrlService,
    MenuTranslation, 
    MenuType, 
    TranslationGrouping 
} from "../";

const apiRouteBase = ""

@Injectable()
export class MenuTranslationService {

    constructor(
        private http: Http,
        private httpBaseUrlService: HttpBaseUrlService) {   
    }

    public getMenu(menuType: MenuType) : Observable<TranslationGrouping> {
        
        const url = `${this.httpBaseUrlService.getServiceBase()}${apiRouteBase}`;
        
        return this
            .http
            .get(url)
            .map((response: Response) => response.json());
    }
}