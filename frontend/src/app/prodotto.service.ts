import { Injectable, importProvidersFrom, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdottoModel } from './models/prodotto.model';
@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  private http = inject(HttpClient);
  private url = 'https://glorious-train-vpg9q6r66qxvcjj6-5000.app.github.dev/';

  getProdotti(): Observable<ProdottoModel[]> {
    return this.http.get<ProdottoModel[]>(this.url + 'api/prodotti');
  }
  getProdotto(prodotto_id: number): Observable<ProdottoModel> {
    return this.http.get<ProdottoModel>(this.url + `api/prodotti/${prodotto_id}`);
  }
}
