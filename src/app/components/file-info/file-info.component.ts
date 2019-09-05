// This component display info about file info like the number of comments, the date gists was created, etc.

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-file-info',
    templateUrl: './file-info.component.html',
    providers: []
})
export class FileInfoComponent implements OnInit {

    @Input() gist;

    public file;

    constructor(){
    }

    ngOnInit(){
        this.file = Object.entries(this.gist.files);
        console.log(this.file);
    }

}
