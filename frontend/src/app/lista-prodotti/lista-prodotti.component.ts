import { Component, inject } from '@angular/core';
import { ProdottoModel } from '../models/prodotto.model';
import { ProdottoService } from '../prodotto.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-lista-prodotti-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.css'
})
export class ListaProdottiComponent implements OnInit {

  private prodottoService = inject(ProdottoService);
  private cartService = inject(CartServiceService);
  caricamento = true;
  prodotti: ProdottoModel[] = [];

  ngOnInit(): void {
    this.prodottoService.getProdotti().subscribe({
      next: (data: ProdottoModel[]) => {
        this.prodotti = data;
        this.caricamento = false;
      },
      error: (err: any) => {
        console.error('Errore durante il recupero dei dati:', err);
        this.caricamento = false;
      }
    });
  }
  aggiungiAlCarrello(prodotto: ProdottoModel): void {
    // Logica per aggiungere il prodotto al carrello
    console.log('Aggiunto al carrello:', prodotto);
    this.cartService.addToCart(prodotto);
  }
}
  