import { Injectable } from "@angular/core"

@Injectable()
export class HttpBaseUrlService {

    constructor() {   
    }

    public getServiceBase(): string {
        //TODO: put this into environment file
        return "https://dqxt-api.herokuapp.com/api/";
    }
}