import { Component, Input } from '@angular/core';
import { PostInt } from '../../../shared/interfaces/post-interface';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.html',
  styleUrl: './single-post.css',
})
export class SinglePost {
  @Input() post!: PostInt;
}
