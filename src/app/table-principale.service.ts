import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Sujet, SujetComplet, Objet } from '../assets/structure';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TablePrincipaleService {
  listerTableUrl = 'http://localhost:80/suaf/public/listerBase';
  sujets: Sujet[];
  sujetsComplets: SujetComplet[] = [];
  objets: Objet[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getTablePrincipale$(): Observable<any> {
    return this.http.get(this.listerTableUrl).pipe(
      tap(res => {
        this.sujets = JSON.parse(JSON.stringify(res['sujets']));
        this.sujetsComplets = JSON.parse(JSON.stringify(res['versions']));
        this.objets = JSON.parse(JSON.stringify(res['objets']));
        console.log(
          '********** sujets ****************',
          this.sujets,
          '**************************'
        );
        console.log(
          '****** sujetsComplets ************',
          this.sujetsComplets,
          '**************************'
        );
        console.log(
          '*********** objets ***************',
          this.objets,
          '**************************'
        );
        this.log('Requête listerTableUrl exécutée');
      }),
      catchError(this.handleError('getTablePrincipale$', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSujets(): Sujet[] {
    return this.sujets;
  }

  getSujetsComplets(): SujetComplet[] {
    return this.sujetsComplets;
  }

  getObjets(): Objet[] {
    return this.objets;
  }
  /** Log a RequetesService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RequetesService: ${message}`);
  }
}
