import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CardResp } from '../../../shared/utils/interfaces';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CardService } from '../../../core/services/card-service/card.service';
import { paginatorService } from '../../../core/services/paginator-service/paginator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday',
  imports: [RouterOutlet, RouterLink, CommonModule, MatPaginatorModule],
  templateUrl: './birthday.html',
  styleUrl: './birthday.css',
  providers: [{ provide: MatPaginatorIntl, useFactory: paginatorService }],
})
export class Birthday {
  cards: CardResp[] = [];
  length = 0;
  pageSize = 5;
  pageIndex = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe((e) => {
        // console.log('Paginator event:', e);

        this.pageIndex = e.pageIndex;
        this.pageSize = e.pageSize;

        // this.cdr.detectChanges();
        this.loadData();
      });
    } else {
      console.warn('Paginator not found!');
    }
  }

  private loadData() {
    const category = this.activeRoute.routeConfig?.path;
    // console.log('category from the link: ', category);

    this.cardService
      .getByCategory(category!, this.pageIndex + 1, this.pageSize)
      .subscribe({
        next: (data) => {
          // console.log('data: ', data);
          this.cards = data.data ?? [];
          // console.log('cards: ', this.cards);
          this.length = data.pagination.total ?? 100;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Card loading faild', err);
        },
      });
  }
}
