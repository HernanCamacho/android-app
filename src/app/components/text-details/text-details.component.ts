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

    constructor(
        private _gistsService: GistsService
    ){}

    ngOnInit(){}

}
