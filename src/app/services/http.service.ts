import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { CardsModel } from '../models/card-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  public getCards(params: object): Observable<CardsModel> {
    let url = `https://api.pokemontcg.io/v1/cards?`;
    if (params) {
      Object.keys(params).forEach((key: string) => {
        url = `${url}${key}=${params[key]}&`
      });
    }
    return this.http.get<CardsModel>(url);
  }
}
