import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

import { FileInfoComponent } from './components/file-info/file-info.component';
import { FilesTableComponent } from './components/files-table/files-table.component';
import { TextDetailsComponent } from './components/text-details/text-details.component';

const routes: Routes = [
    {path: '', component: FilesTableComponent},
    {path: 'details/:url', component: TextDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
