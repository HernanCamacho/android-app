// This component display info about file info like the number of comments, the date gists was created, etc.

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-file-info',
    templateUrl: './file-info.component.html',
    providers: []
})
export class FileInfoComponent implements OnInit {

    @Input() gist;

    public file;

    constructor(private _router: Router){
    }

    ngOnInit(){
        this.file = Object.entries(this.gist.files);
    }

}
