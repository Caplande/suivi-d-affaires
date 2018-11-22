import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequetesComponent } from './requetes/requetes.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, RequetesComponent, MessagesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
