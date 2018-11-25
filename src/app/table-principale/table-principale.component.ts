import { Component, OnInit } from '@angular/core';
import { RequetePrincipaleService } from './requete-principale.service';
import { SujetComplet } from '../../assets/structure';

@Component({
  selector: 'app-table-principale',
  templateUrl: './table-principale.component.html',
  providers: [RequetePrincipaleService],
  styleUrls: ['./table-principale.component.css']
})
export class TablePrincipaleComponent implements OnInit {
  sujetsComplets: SujetComplet[];

  constructor(private requetePrincipaleService: RequetePrincipaleService) {}

  ngOnInit() {
    this.getTable();
  }

  getTable() {
    this.requetePrincipaleService.getTablePrincipale$().subscribe(_ => {
      this.sujetsComplets = this.requetePrincipaleService.getSujetsComplets();
    });
  }
}
