import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeInt } from '../../shared/interfaces/theme-interface';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private apiUrl = 'http://localhost:3000/api/themes';
  constructor(private httpClient: HttpClient) {}

  getThemes(): Observable<ThemeInt[]> {
    return this.httpClient.get<ThemeInt[]>(this.apiUrl);
  }
}
