import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Http
import { HttpClientModule } from '@angular/common/http';

import { HighlightModule } from 'ngx-highlightjs';

// Components

import { FileComponent } from './components/file/file.component';
import { FileInfoComponent } from './components/file-info/file-info.component';
import { FilesTableComponent } from './components/files-table/files-table.component';
import { TextDetailsComponent } from './components/text-details/text-details.component';
import { UserComponent } from './components/user/user.component';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FileInfoComponent,
    FilesTableComponent,
    TextDetailsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
