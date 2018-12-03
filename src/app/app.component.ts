import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

import { titreOnglet } from '../assets/structure';
import { DateHeureService } from './date-heure.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = titreOnglet;
  dateHeure$: Date;

  constructor(private dateHeureService: DateHeureService) {}

  ngOnInit() {
    const intervalle = interval(1000);
    intervalle.subscribe(_ => this.dateHeure$ = new Date());
  }

  getDateHeure() {}
}
