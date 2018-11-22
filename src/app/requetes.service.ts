import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { VGType } from '../assets/variablesDeBase';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RequetesService {
  configUrl = '../assets/config.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getRequetes(): Observable<VGType[]> {
    return this.http.get<VGType[]>(this.configUrl).pipe(
      tap(_ => this.log('Url(s) trouvées')),
      catchError(this.handleError('getRequetes', []))
    );
  }

  getRequete(nomReq: string): Observable<VGType> {
    const url = `${this.configUrl}/?id=${nomReq}`;
    return this.http.get<VGType>(url)
    .pipe(
      tap(_ => this.log(`La requête ${nomReq} a été trouvée.`),
      catchError(this.handleError<VGType>(`Erreur dans la recherche de la requête ${nomReq}`))
    ));
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

  /** Log a RequetesService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RequetesService: ${message}`);
  }
}
