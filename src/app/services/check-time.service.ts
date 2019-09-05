import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CheckTimeService {

    public counter;
    public time: number;

    constructor(public _http: HttpClient) {
        this.time = 1800000;
    }

    counterTime(){
        let timer = setInterval(function(){
            localStorage.clear();
        }, this.time);
    }

}
