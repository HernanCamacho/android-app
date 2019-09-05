// This component display info about text-details like code

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GistsService } from '../../services/gists.service';

@Component({
    selector: 'app-text-details',
    templateUrl: './text-details.component.html',
    providers: [GistsService]
})
export class TextDetailsComponent implements OnInit {

    @Input() fileDetails;
    public code;

    constructor(
        private _gistsService: GistsService,
        private _route: ActivatedRoute
    ){}

    ngOnInit(){
        this.loadPage();
    }

    loadPage(){
        this._route.params.subscribe(params =>{
			let url = params['url'];
			this.getCode(url);
		});
    }

    getCode(url){
        this._gistsService.getCode(url).subscribe(
            response => {
                this.code = response;
                console.log(this.code);
            }, error => {
                console.log(error);
            });
    }

}
