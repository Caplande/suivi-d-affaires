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
  objetsC: string[];
  domaines: Domaine[];
  domainesC: string[];
  sousDomaines: SousDomaine[];
  sousDomainesC: string[];
  natures: Nature[];
  naturesC: string[];
  statuts: Statut[];
  statutsC: string[];
  valCouranteControles = [''];

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
      this.objetsC = this.objets.map(objet => objet.objet);
      this.valCouranteControles[0] = this.objetsC[0];
      this.tablesFixesService.getToutesTables$().subscribe(() => {
        this.domaines = this.tablesFixesService.getDomaines();
        this.domainesC = this.domaines.map(domaine => domaine.domaine);
        this.valCouranteControles.push(this.domainesC[0]);

        this.sousDomaines = this.tablesFixesService.getSousDomaines();
        this.sousDomainesC = this.sousDomaines.map(
          sousDomaine => sousDomaine.sousDomaine
        );
        this.valCouranteControles.push(this.sousDomainesC[0]);

        this.natures = this.tablesFixesService.getNatures();
        this.naturesC = this.natures.map(nature => nature.nature);
        this.valCouranteControles.push(this.naturesC[0]);

        this.statuts = this.tablesFixesService.getStatuts();
        this.statutsC = this.statuts.map(statut => statut.statut);
        this.valCouranteControles.push(this.statutsC[0]);
      });
    });
  }
 }
