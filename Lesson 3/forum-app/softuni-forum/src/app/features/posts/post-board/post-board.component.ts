import { Component, inject, OnInit } from '@angular/core';
import { SinglePost } from '../single-post/single-post.component';
import { PostInt } from '../../../shared/interfaces/post-interface';
import { PostService } from '../../../core/services/post.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-board',
  imports: [SinglePost, CommonModule],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css',
})
export class PostBoard implements OnInit {
  postArr$: Observable<PostInt[]> = of([]);
  private postServ = inject(PostService);

  ngOnInit(): void {
    this.postArr$ = this.postServ.getPost();
  }
}
