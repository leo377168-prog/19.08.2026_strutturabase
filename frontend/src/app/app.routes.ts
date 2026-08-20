import { Routes } from '@angular/router';
import {ListaProdottiComponent} from './lista-prodotti/lista-prodotti.component';
import {DettaglioProdottoComponentComponent} from './dettaglio-prodotto-component/dettaglio-prodotto-component.component';
import {CarrelloComponentComponent} from './carrello-component/carrello-component.component';

export const routes: Routes = [
  { path: '', component: ListaProdottiComponent },
  { path: 'dettaglio/:id', component: DettaglioProdottoComponentComponent },
  { path: 'carrello', component: CarrelloComponentComponent },
];


