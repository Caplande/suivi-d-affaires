import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RequetesService } from './requetes.service';
import { Domaine } from '../../assets/structure';
import { SousDomaine } from '../../assets/structure';
import { Nature } from '../../assets/structure';
import { Statut } from '../../assets/structure';
@Component({
  selector: 'app-requetes',
  templateUrl: './tables-de-base.component.html',
  providers: [RequetesService],
  styleUrls: ['./tables-de-base.component.css']
})
export class TablesDeBaseComponent implements OnInit {
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  natures: Nature[];
  statuts: Statut[];

  constructor(private requetesService: RequetesService) {}

  ngOnInit() {
    this.getTables();
  }

  getTables() {
    this.requetesService.getToutesTables$().subscribe(_ => {
      this.domaines = this.requetesService.getDomaines();
      this.sousDomaines = this.requetesService.getSousDomaines();
      this.natures = this.requetesService.getNatures();
      this.statuts = this.requetesService.getStatuts();
  }); }




}
