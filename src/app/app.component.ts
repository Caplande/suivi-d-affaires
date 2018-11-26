import { Component } from '@angular/core';
import { titreOnglet } from '../assets/structure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = titreOnglet;
}
