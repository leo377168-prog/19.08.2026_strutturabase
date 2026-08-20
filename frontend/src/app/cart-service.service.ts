import { Injectable } from '@angular/core';
import { ProdottoModel } from './models/prodotto.model';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cart: ProdottoModel[] = [];
  getCart(): ProdottoModel[] {
    return this.cart;
  }
  addToCart(prodotto: ProdottoModel): void {
    this.cart.push(prodotto);
  }
  totalPrice(): number {
    return this.cart.reduce((total, prodotto) => total + prodotto.prezzo, 0);
  }
 clearCart(): void {
    this.cart = [];
  }
}
