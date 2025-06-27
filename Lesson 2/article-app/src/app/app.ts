import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './articles/articles';
import { ArticleComponent } from './article/article';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticlesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Article Site';
}
