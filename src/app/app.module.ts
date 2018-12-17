import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { TablesFixesComponent } from './tables-fixes/tables-fixes.component';
import { MessagesComponent } from './messages/messages.component';
import { TablePrincipaleComponent } from './table-principale/table-principale.component';
import { VoirComponent } from './voir/voir.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'Voir', component: VoirComponent },
  { path: 'Editer', component: VoirComponent },
  { path: 'Corriger', component: VoirComponent },
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
    VoirComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
