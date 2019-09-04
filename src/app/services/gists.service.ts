import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Global } from './global.service';

@Injectable()
export class GistsService {

    public url: string;
    public projects;

    constructor( public _http: HttpClient ) {
        this.url = Global.url;
    }

    refreshProjects(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url, {headers: headers});
    }

    getSavedProjects(){
        let projects = JSON.parse(localStorage.getItem('projects'));
        return projects;
    }

    persistData(projects){
        localStorage.setItem('projects', JSON.stringify(projects));
        return true;
    }

}
