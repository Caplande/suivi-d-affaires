import { Component, OnInit } from '@angular/core';

import { RequetesService } from './requetes.service';
import { Domaine } from '../../assets/structure';
import { SousDomaine } from '../../assets/structure';
import { Nature } from '../../assets/structure';
import { Statut } from '../../assets/structure';
@Component({
  selector: 'app-tables-fixes',
  templateUrl: './tables-fixes.component.html',
  providers: [RequetesService],
  styleUrls: ['./tables-fixes.component.css']
})
export class TablesFixesComponent implements OnInit {
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
