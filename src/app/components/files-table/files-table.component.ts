// This component display files in a table view.

import { Component, OnInit } from '@angular/core';

import { GistsService } from '../../services/gists.service';
import { CheckTimeService } from '../../services/check-time.service';

@Component({
    selector: 'app-files-table',
    templateUrl: './files-table.component.html',
    providers: [GistsService, CheckTimeService]
})
export class FilesTableComponent implements OnInit {

    public gists;
    public title: String;
    public lastUpdate;
    public refreshDisable: boolean;
    public loading: boolean;

    constructor(
        private _gistsService: GistsService,
        private _checkTimeService: CheckTimeService
    ){
        this.title = 'Hello :)';
        this.lastUpdate = new Date();
        this.refreshDisable = false;
        this.loading = true;
    }

    ngOnInit(){
        this.getProjects();
        this.counterTime();
    }

    getProjects(update = false){
        if(update){
            this.refreshProjects();
        }else{
            this.loading = false;
            if(this.getSavedProjects() == null){
                this.refreshProjects();
            }
        }
    }

    refreshProjects(){
        this._gistsService.refreshProjects().subscribe(
            response => {
                if(response.length > 0){
                    this.gists = response;
                    this.refreshDisable = false;
                    this.loading = false;
                    if(this._gistsService.persistData(this.gists)){
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
        return this.gists;
    }

    counterTime(){
        this._checkTimeService.counterTime();
    }

    refresh(){
        this.refreshDisable = true;
        this.loading = true;
        this.getProjects(true);
    }
}
