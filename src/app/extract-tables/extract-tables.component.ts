import { Component, OnInit } from '@angular/core';

import { RequetesService } from '../requetes.service';

@Component({
  selector: 'app-requetes',
  templateUrl: './extract-tables.component.html',
  styleUrls: ['./extract-tables.component.css']
})
export class ExtractTablesComponent implements OnInit {
  resultat: any;

  constructor(private requetesService: RequetesService) {}

  ngOnInit() {
    this.getRequetes();
  }

  getRequetes(): void {
    this.requetesService.getRequete().subscribe(res => (this.resultat = res));
  }
}
