import { Injectable, importProvidersFrom, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdottoModel } from './models/prodotto.model';
@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  private http = inject(HttpClient);
  private url = 'https://curly-adventure-g47jjwpggx57cp4r9-5000.app.github.dev/';

  getProdotti(): Observable<ProdottoModel[]> {
    return this.http.get<ProdottoModel[]>(this.url + 'api/prodotti');
  }
}
