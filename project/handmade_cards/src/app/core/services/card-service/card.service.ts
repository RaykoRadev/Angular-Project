import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_CARD_URL } from '../../../shared/cosntants/constants';
import { CardIntFull, CardResp } from '../../../shared/utils/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  create(data: CardIntFull): Observable<CardResp> {
    const url = BASE_CARD_URL + '/create';
    console.log(data);
    console.log('url:', url);
    console.log('Data payload:', JSON.stringify(data, null, 2));
    return this.http.post<CardResp>(url, data);
  }
}
