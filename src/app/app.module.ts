import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TablesDeBaseComponent } from './tables-de-base/tables-de-base.component';
import { MessagesComponent } from './messages/messages.component';
import { AffichageComponent } from './affichage/affichage.component';

@NgModule({
  declarations: [AppComponent, TablesDeBaseComponent, MessagesComponent, AffichageComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
