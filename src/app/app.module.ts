import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExtractTablesComponent } from './extract-tables/extract-tables.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, ExtractTablesComponent, MessagesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
