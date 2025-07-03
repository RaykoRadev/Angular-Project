import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private apiUrl = 'https://localhost:3000/api/themes';
  constructor(httpClient: HttpClient) {
    console.log(this.apiUrl);
  }
}
