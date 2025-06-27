import { data } from './seed';

export class Article {
  title: string;
  description: string;
  author: string;
  imageUrl: string;

  constructor(
    title: string,
    descriptiion: string,
    author: string,
    imageUrl: string
  ) {
    this.title = title;
    this.description = descriptiion;
    this.author = author;
    this.imageUrl = imageUrl;
  }
}

export class ArticleData {
  getData() {
    let articles: Article[] = [];

    for (let i = 0; i < data.length; i++) {
      articles[i] = new Article(
        data[i].title,
        data[i].description,
        data[i].author,
        data[i].imageUrl
      );
    }

    return articles;
  }
}
