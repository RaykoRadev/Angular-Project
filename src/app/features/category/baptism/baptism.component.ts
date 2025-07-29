import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CardResp } from '../../../shared/utils/interfaces';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { paginatorService } from '../../../core/services/paginator-service/paginator.service';
import { CardService } from '../../../core/services/card-service/card.service';

@Component({
  selector: 'app-baptism',
  imports: [RouterOutlet, RouterLink, CommonModule, MatPaginatorModule],
  templateUrl: './baptism.html',
  styleUrl: './baptism.css',
  providers: [{ provide: MatPaginatorIntl, useFactory: paginatorService }],
})
export class Baptism implements OnInit {
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
