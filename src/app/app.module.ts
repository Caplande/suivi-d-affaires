import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TablesFixesComponent } from './tables-fixes/tables-fixes.component';
import { MessagesComponent } from './messages/messages.component';
import { TablePrincipaleComponent } from './table-principale/table-principale.component';
import { PresentationComponent } from './presentation/presentation.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'presentation1', component: PresentationComponent },
  {
    path: 'presentation2',
    component: PresentationComponent,
    data: { title: 'Liste des tables' }
  },
  {
    path: '',
    redirectTo: '/listerTables',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TablesFixesComponent,
    MessagesComponent,
    TablePrincipaleComponent,
    PresentationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
