import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_CARD_URL } from '../../../shared/cosntants/constants';
import {
  CardGetAllR,
  CardIntFull,
  CardResp,
} from '../../../shared/utils/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  create(data: CardIntFull): Observable<CardResp> {
    const url = BASE_CARD_URL + '/create';
    // console.log(data);
    // console.log('url:', url);
    // console.log('Data payload:', JSON.stringify(data, null, 2));
    return this.http.post<CardResp>(url, data);
  }

  getByCategory(category: string): Observable<CardGetAllR> {
    const url = `${BASE_CARD_URL}?category=${category}&sortBy=createdAt&limit=10&order=asc`;
    console.log(url);

    return this.http.get<CardGetAllR>(url);
  }

  getOneById(cardId: string): Observable<CardResp> {
    const url = `${BASE_CARD_URL}/${cardId}`;
    console.log(url);

    return this.http.get<CardResp>(url);
  }

  edit() {}

  delete(cardId: string) {
    const url = `${BASE_CARD_URL}/delete/${cardId}`;
    console.log(url);

    return this.http.delete(url);
  }
}
