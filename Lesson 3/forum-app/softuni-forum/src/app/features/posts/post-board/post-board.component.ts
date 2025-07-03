import { Component } from '@angular/core';
import { SinglePost } from '../single-post/single-post.component';

@Component({
  selector: 'app-post-board',
  imports: [SinglePost],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css',
})
export class PostBoard {}
