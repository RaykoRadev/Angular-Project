import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://localhost:3000/api/posts?limit=5';
  constructor() {}
}
