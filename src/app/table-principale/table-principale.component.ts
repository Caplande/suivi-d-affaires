import { Component, OnInit } from '@angular/core';
import { TablePrincipaleService } from '../table-principale.service';
import { SujetComplet, Objet } from '../../assets/structure';

@Component({
  selector: 'app-table-principale',
  templateUrl: './table-principale.component.html',
  providers: [TablePrincipaleService],
  styleUrls: ['./table-principale.component.css']
})
export class TablePrincipaleComponent implements OnInit {
  sujetsComplets: SujetComplet[];
  objets: Objet[];

  constructor(private tablePrincipaleService: TablePrincipaleService) {}

  ngOnInit() {
    this.getTable();
  }

  getTable() {
    this.tablePrincipaleService.getTablePrincipale$().subscribe(_ => {
      this.sujetsComplets = this.tablePrincipaleService.getSujetsComplets();
      this.objets = this.tablePrincipaleService.getObjets();
    });
  }
}
