import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_CARD_URL } from '../../../shared/cosntants/constants';
import { CardInt, CardResp } from '../../../shared/utils/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  create(data: CardInt): Observable<CardResp> {
    const url = BASE_CARD_URL + '/create';
    // console.log(data.author);

    return this.http.post<CardResp>(url, data);
  }
}
