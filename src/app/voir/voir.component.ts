import { Component, OnInit } from '@angular/core';
import { TablesFixesService } from '../tables-fixes.service';
import { TablePrincipaleService } from '../table-principale.service';
import {
  Sujet,
  SujetComplet,
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
  sujets: Sujet[];
  sujetsComplets: SujetComplet[] = [];
  sujetsCompletsC: SujetComplet[] = []; // Array des  sujetsComplets ayant le même objet (valeursCourantes.objet)
  objets: Objet[];
  objetsC: string[] = []; // Array des intitulés d'objets
  domaines: Domaine[];
  domainesC: string[]; // Array des intitulés de domaines
  sousDomaines: SousDomaine[];
  sousDomainesC: string[]; // Array des intitulés de sousDomaines
  natures: Nature[];
  naturesC: string[]; // Array des intitulés de natures
  statuts: Statut[];
  statutsC: string[]; // Array des intitulés de statuts
  valeursCourantes = {
    sujet: new Sujet(),
    objet: '',
    domaine: '',
    sousDomaine: '',
    nature: '',
    statut: ''
  };

  constructor(
    private tablesFixesService: TablesFixesService,
    private tablePrincipaleService: TablePrincipaleService
  ) {}

  ngOnInit() {
    this.getValeurs();
  }

  getValeurs() {
    this.tablePrincipaleService.getTablePrincipale$().subscribe(_ => {
      this.sujets = this.tablePrincipaleService.getSujets();
      this.objets = this.tablePrincipaleService.getObjets();
      this.objetsC = this.objets.map(objet => objet.objet);
      this.valeursCourantes.objet = this.objetsC[0];
      this.sujetsComplets = this.tablePrincipaleService.getSujetsComplets();
      this.synchroObjet('objet');
      //      console.log("UUUUUUUUUUUUUUUUUUUUUUUUUU", this.sujetsComplets);
      this.tablesFixesService.getToutesTables$().subscribe(() => {
        this.domaines = this.tablesFixesService.getDomaines();
        this.domainesC = this.domaines.map(domaine => domaine.domaine);
        //      this.valCouranteControles.push(this.domainesC[0]);*/

        this.sousDomaines = this.tablesFixesService.getSousDomaines();
        this.sousDomainesC = this.sousDomaines.map(
          sousDomaine => sousDomaine.sousDomaine
        );
        //        this.valCouranteControles.push(this.sousDomainesC[0]);*/

        this.natures = this.tablesFixesService.getNatures();
        this.naturesC = this.natures.map(nature => nature.nature);
        //        this.valCouranteControles.push(this.naturesC[0]);*/

        this.statuts = this.tablesFixesService.getStatuts();
        this.statutsC = this.statuts.map(statut => statut.statut);
        //        this.valCouranteControles.push(this.statutsC[0]);*/
      });
    });
  }

  synchroObjet(source) {
    if (source === 'objet') {
      // Sélection d'un objet --> les champs nature, statut, domaine, sousDomaine peuvent être calculés.
      this.sujetsCompletsC = this.sujetsComplets.filter(
        sujet => sujet.objet === this.valeursCourantes.objet
      );
      this.valeursCourantes.sujet = this.sujetsCompletsC[0];
      for (let i = 0; i < 2; i++) {
        this.valeursCourantes.domaine = this.valeursCourantes.sujet.domaine;
        this.valeursCourantes.sousDomaine = this.valeursCourantes.sujet.sousDomaine;
        this.valeursCourantes.nature = this.valeursCourantes.sujet.nature;
        this.valeursCourantes.statut = this.valeursCourantes.sujet.statut;
      }
    } else {
      // Sélection d'un champ autre que objet --> Aucun des autres champs ne peut être affiché car ils peuvent
      // ne pas avoir de valeur unique.
      for (const champ in this.valeursCourantes) {
        if (champ !== source && champ !== 'sujet') {
          this.valeursCourantes[champ] = ' ';
        }
      }
    }
  }
}
