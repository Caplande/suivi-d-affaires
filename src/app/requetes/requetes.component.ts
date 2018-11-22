import { Component, OnInit } from '@angular/core';

import { RequetesService } from '../requetes.service';
import { VGType } from '../../assets/variablesDeBase';

@Component({
  selector: 'app-requetes',
  templateUrl: './requetes.component.html',
  styleUrls: ['./requetes.component.css']
})
export class RequetesComponent implements OnInit {
  requetes: VGType[];

  constructor(private requetesService: RequetesService) {}

  ngOnInit() {
    this.getRequetes();
  }

  getRequetes(): void {
    this.requetesService
      .getRequetes()
      .subscribe(requetes => (this.requetes = requetes));
  }
}
