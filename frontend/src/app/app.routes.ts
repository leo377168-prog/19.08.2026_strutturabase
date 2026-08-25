import { Routes } from '@angular/router';
import {ListaProdottiComponent} from './lista-prodotti/lista-prodotti.component';
import {DettaglioProdottoComponent} from './dettaglio-prodotto-component/dettaglio-prodotto-component.component';
import {CarrelloComponent} from './carrello-component/carrello-component.component';

export const routes: Routes = [
  { path: '', component: ListaProdottiComponent },
  { path: 'dettaglio/:id', component: DettaglioProdottoComponent },
  { path: 'carrello', component: CarrelloComponent },
];


