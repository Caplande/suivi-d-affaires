import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateHeureService {
  dateHeure$: Observable<Date>;

  constructor() {
    this.creerHorloge();
  }

  creerHorloge(): void {
    this.dateHeure$ = Observable.create(function subscribe(observer) {
      const temp$ = setInterval(() => {
        observer.next( new Date()); }, 1000);
    });
  }
  getDateHeure(): Observable<Date> {
    return this.dateHeure$;
  }
}
