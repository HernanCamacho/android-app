import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

import { FileComponent } from './components/file/file.component';
import { FileInfoComponent } from './components/file-info/file-info.component';
import { FilesTableComponent } from './components/files-table/files-table.component';
import { TextDetailsComponent } from './components/text-details/text-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    {path: '', component: FilesTableComponent},
    {path: 'details', component: TextDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
