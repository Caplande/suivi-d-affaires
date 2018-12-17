import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Domaine, SousDomaine, Nature, Statut } from '../assets/structure';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TablesFixesService {
  listerTablesUrl = 'http://localhost:80/suaf/public/listerTablesFixes';
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  natures: Nature[];
  statuts: Statut[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getToutesTables$(): Observable<any> {
    return this.http.get(this.listerTablesUrl).pipe( map(res => {
        this.domaines = res['domaines'];
        this.sousDomaines = res['sousDomaines'];
        this.natures = res['natures'];
        this.statuts = res['statuts'];
      }), tap(_ => {
        this.log('Requête listerTablesUrl exécutée');
      }), catchError(this.handleError('getToutesTables$', [])) );
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

  getDomaines(): Domaine[] {
    return this.domaines;
  }

  getSousDomaines(): SousDomaine[] {
    return this.sousDomaines;
  }
  getNatures(): Nature[] {
    return this.natures;
  }
  getStatuts(): Statut[] {
    return this.statuts;
  }

  /** Log a RequetesService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RequetesService: ${message}`);
  }
}
