// This component display files in a table view.

import { Component, OnInit } from '@angular/core';

import { GistsService } from '../../services/gists.service';

@Component({
    selector: 'app-files-table',
    templateUrl: './files-table.component.html',
    providers: [GistsService]
})
export class FilesTableComponent implements OnInit {

    public gists;
    public title: String;
    public lastUpdate;

    constructor(
        private _gistsService: GistsService
    ){
        this.title = 'Hello :)';
        this.lastUpdate = new Date();
    }

    ngOnInit(){
        this.getProjects(true);
    }
    
    getProjects(update = false){
        if(update){
            this.refreshProjects();
        }else{
            this.getSavedProjects();
        }
    }

    refreshProjects(){
        this._gistsService.refreshProjects().subscribe(
            response => {
                if(response.length > 0){
                    this.gists = response;
                    if(this._gistsService.persistData(this.gists)){
                        this.lastUpdate = new Date();
                        console.log('Datos almacenados en localStorage');
                    }else{
                        console.log('Error al almacenar en localStorage');
                    }
                }else{
                    console.log('La respuesta está vacía');
                }
            }, error => {
                console.log(error);
            });
    }

    getSavedProjects(){
        this.gists = this._gistsService.getSavedProjects();
    }

    checkTime() {
        let now: any = new Date();
        let lastUpdate: any = new Date(this.lastUpdate);
        let time = (now - lastUpdate + 1000) / 1000;
        let minutes = time / 60 % 60;
        console.log(minutes);
        return minutes >= 1 ? true : false;
    }

}
