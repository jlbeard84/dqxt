import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { 
    HttpBaseUrlService,
    MenuType
} from "../";

const apiRouteBase: string = "menu-type/";

@Injectable()
export class MenuTypeService {

    constructor(
        private http: Http,
        private httpBaseUrlService: HttpBaseUrlService) {   
    }

    public getMenuTypes() : Observable<MenuType[]> {
        
        const url = `${this.httpBaseUrlService.getServiceBase()}${apiRouteBase}`;

        return this
            .http
            .get(url)
            .map((response: Response) => response.json());
    }
}