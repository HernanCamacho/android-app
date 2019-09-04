import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Global } from './global.service';

@Injectable()
export class GistsService {

    public url: string;

    constructor( public _http: HttpClient ) {
        this.url = Global.url;
    }

}
