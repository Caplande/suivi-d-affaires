import { Component, OnInit } from '@angular/core';

import { RequetesService } from './requetes.service';
import { Domaine } from '../../assets/structure';
import { SousDomaine } from '../../assets/structure';
import { Nature } from '../../assets/structure';
import { Statut } from '../../assets/structure';
@Component({
  selector: 'app-requetes',
  templateUrl: './extract-tables.component.html',
  providers: [RequetesService],
  styleUrls: ['./extract-tables.component.css']
})
export class ExtractTablesComponent implements OnInit {
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  natures: Nature[];
  statuts: Statut[];

  constructor(private requetesService: RequetesService) {}

  ngOnInit() {
    this.getTables();
  }

  getTables() {
    this.requetesService.getToutesTables().subscribe(res => {
      this.domaines = res.domaines;
      this.sousDomaines = res.sousDomaines;
      this.natures = res.natures;
      this.statuts = res.statuts;
    });
  }
}
