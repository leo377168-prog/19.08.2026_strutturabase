import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdottoService } from '../prodotto.service';
import { ProdottoModel } from '../models/prodotto.model';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-dettaglio-prodotto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dettaglio-prodotto-component.component.html'
})
export class DettaglioProdottoComponent implements OnInit {
  prodotto?: ProdottoModel;
  caricamento: boolean = true;

  private route = inject(ActivatedRoute);
  private prodottoService = inject(ProdottoService);
  private CartServiceService = inject(CartServiceService);

  ngOnInit(): void {
    // Recupero l'ID dall'URL
    const id = Number(this.route.snapshot.paramMap.get('id')); // Converti l'ID in numero

    if (id) {
      this.prodottoService.getProdotto(id).subscribe({
        next: (data: ProdottoModel) => {
          this.prodotto = data;
          this.caricamento = false;
        },
        error: () => this.caricamento= false
      });
    }
  }

  aggiungiAlCarrello(): void {
    if (this.prodotto) {
      this.CartServiceService.addToCart(this.prodotto);
    }
  }
}