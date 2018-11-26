import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TablesFixesComponent } from './tables-fixes/tables-fixes.component';
import { MessagesComponent } from './messages/messages.component';
import { TablePrincipaleComponent } from './table-principale/table-principale.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TablesFixesComponent, MessagesComponent, TablePrincipaleComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
