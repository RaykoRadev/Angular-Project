import { Component, Input } from '@angular/core';
import { Article } from '../data/data';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class ArticleComponent {
  private symbol: number = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore() {
    this.articleDescLen += this.symbol;

    if (!(this.articleDescLen >= this.articleDesc.length)) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show Image';
  }

  hideDesc() {
    {
      this.articleDescLen = 0;
      this.descToShow = '';
      this.showReadMoreBtn = true;
      this.showHideBtn = false;
      // this.imageIsShown = false;
    }
  }
}
