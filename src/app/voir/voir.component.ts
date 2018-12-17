import { Component, OnInit } from '@angular/core';
import { TablesFixesService } from '../tables-fixes.service';
import { TablePrincipaleService } from '../table-principale.service';
import {
  Objet,
  Domaine,
  SousDomaine,
  Nature,
  Statut
} from '../../assets/structure';
@Component({
  selector: 'app-voir',
  templateUrl: './voir.component.html',
  styleUrls: ['./voir.component.css']
})
export class VoirComponent implements OnInit {
  objets: Objet[];
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  natures: Nature[];
  statuts: Statut[];
  valInitiales = [
    new Objet(),
    new Domaine(),
    new SousDomaine(),
    new Nature(),
    new Statut()
  ];

  constructor(
    private tablesFixesService: TablesFixesService,
    private tablePrincipaleService: TablePrincipaleService
  ) {}

  ngOnInit() {
    this.getValeurs();
  }

  getValeurs() {
    this.tablePrincipaleService.getTablePrincipale$().subscribe(_ => {
      this.objets = this.tablePrincipaleService.getObjets();
 //     console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', this.valInitiales);
      this.valInitiales[0] = this.objets[0];
      this.tablesFixesService.getToutesTables$().subscribe(() => {
        this.domaines = this.tablesFixesService.getDomaines();
        this.sousDomaines = this.tablesFixesService.getSousDomaines();
        this.natures = this.tablesFixesService.getNatures();
        this.statuts = this.tablesFixesService.getStatuts();
        this.valInitiales[1] = this.domaines[0];
        this.valInitiales[2] = this.sousDomaines[0];
        this.valInitiales[3] = this.natures[0];
        this.valInitiales[4] = this.statuts[0];
      });
    });
  }
}
