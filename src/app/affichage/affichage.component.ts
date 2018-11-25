import { Component, OnInit, Input } from '@angular/core';

import { TablesDeBaseComponent } from '../tables-de-base/tables-de-base.component';
import { Domaine } from '../../assets/structure';
@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  @Input() tablesDeBase: TablesDeBaseComponent;
  domaines: Domaine[];
  constructor() {}

  ngOnInit() {}

  getTables() {
//    this.domaines = this.tablesDeBase.getTables();
  }
}
