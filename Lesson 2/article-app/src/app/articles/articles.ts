import { Component, OnInit } from '@angular/core';
import { Article, ArticleData } from '../data/data';
import { ArticleComponent } from '../article/article';

@Component({
  selector: 'app-articles',
  imports: [ArticleComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class ArticlesComponent implements OnInit {
  articles!: Article[];

  constructor() {}

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
