import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { ProdottoModel } from '../models/prodotto.model';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrello-component.component.html'
})
export class CarrelloComponent {
  private cartService = inject(CartServiceService);

  // Getter per accedere facilmente all'array del servizio
  get items(): ProdottoModel[] {
    return this.cartService.getCart();
  }

  get totale(): number {
    return this.cartService.totalPrice();
  }

  svuota(): void {
    this.cartService.clearCart();
  }
}