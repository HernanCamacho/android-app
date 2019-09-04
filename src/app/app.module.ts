import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Http
import { HttpClientModule } from '@angular/common/http';

// Components

import { FileComponent } from './components/file/file.component';
import { FileInfoComponent } from './components/file-info/file-info.component';
import { FilesTableComponent } from './components/files-table/files-table.component';
import { TextDetailsComponent } from './components/text-details/text-details.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FileInfoComponent,
    FilesTableComponent,
    TextDetailsComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
