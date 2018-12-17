import { Component, OnInit } from '@angular/core';

import { TablesFixesService } from '../tables-fixes.service';
import { Domaine } from '../../assets/structure';
import { SousDomaine } from '../../assets/structure';
import { Nature } from '../../assets/structure';
import { Statut } from '../../assets/structure';
@Component({
  selector: 'app-tables-fixes',
  templateUrl: './tables-fixes.component.html',
//  providers: [TablesFixesService],
  styleUrls: ['./tables-fixes.component.css']
})
export class TablesFixesComponent implements OnInit {
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  natures: Nature[];
  statuts: Statut[];

  constructor(private tablesFixesService: TablesFixesService) {}

  ngOnInit() {
    this.getTables();
  }

  getTables() {
    this.tablesFixesService.getToutesTables$().subscribe(_ => {
      this.domaines = this.tablesFixesService.getDomaines();
      this.sousDomaines = this.tablesFixesService.getSousDomaines();
      this.natures = this.tablesFixesService.getNatures();
      this.statuts = this.tablesFixesService.getStatuts();
    });
  }
}
