import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProdottiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
