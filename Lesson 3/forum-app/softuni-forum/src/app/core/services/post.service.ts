import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostInt } from '../../shared/interfaces/post-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts?limit=5';
  constructor(private httpPost: HttpClient) {}

  getPost(): Observable<PostInt[]> {
    return this.httpPost.get<PostInt[]>(this.apiUrl);
  }
}
