import { Component, OnInit } from '@angular/core';
import { TablesFixesService } from '../tables-fixes/tables-fixes.service';

import { Domaine, SousDomaine, Nature, Statut } from '../../assets/structure';

@Component({
  selector: 'app-voir',
  templateUrl: './voir.component.html',
  styleUrls: ['./voir.component.css']
})
export class VoirComponent implements OnInit {
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  natures: Nature[];
  statuts: Statut[];
  valInitiales = [new Domaine(), new SousDomaine(), new Nature(), new Statut()];

  constructor(private tablesFixesService: TablesFixesService) {}

  ngOnInit() {
    this.getValeurs();
  }

  getValeurs() {
    this.tablesFixesService.getToutesTables$().subscribe(_ => {
      this.domaines = this.tablesFixesService.getDomaines();
      this.sousDomaines = this.tablesFixesService.getSousDomaines();
      this.natures = this.tablesFixesService.getNatures();
      this.statuts = this.tablesFixesService.getStatuts();
      this.valInitiales = [
        this.domaines[0],
        this.sousDomaines[0],
        this.natures[0],
        this.statuts[0]
      ];
    });
  }
}
