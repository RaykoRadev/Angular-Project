import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CardService } from '../../../core/services/card-service/card.service';
import { CardResp } from '../../../shared/utils/interfaces';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-anniversary',
  imports: [RouterOutlet, RouterLink, CommonModule, MatPaginatorModule],
  templateUrl: './anniversary.html',
  styleUrl: './anniversary.css',
})
export class Anniversary implements OnInit {
  cards: CardResp[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private cardService: CardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activeRoute.url.subscribe(() => {
      this.loadData();
    });
  }

  private loadData() {
    const category = this.activeRoute.routeConfig?.path;
    // const category = 'Юбилейни';
    console.log('category from the link: ', category);

    this.cardService.getByCategory(category!).subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.cards = data.data ?? [];
        console.log('cards: ', this.cards);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Card loading faild', err);
      },
    });
  }
}
