import {
  ChangeDetectorRef,
  Component,
  Inject,
  inject,
  Input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CardService } from '../../../core/services/card-service/card.service';
import { CardResp } from '../../../shared/utils/interfaces';
import { CommonModule } from '@angular/common';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { paginatorService } from '../../../core/services/paginator-service/paginator.service';
import { routes } from '../../../app.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-load-card-view',
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './load-card-view.html',
  styleUrl: './load-card-view.css',
  providers: [{ provide: MatPaginatorIntl, useFactory: paginatorService }],
})
export class LoadCardView implements OnInit {
  cards: CardResp[] = [];
  length = 0;
  pageSize = 5;
  pageIndex = 0;

  @Input() category!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  spinnerActivate = signal<boolean>(false);

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
    console.log('category from the parent: ', this.category);

    this.spinnerActivate.set(true);

    this.cardService
      .getByCategory(this.category!, this.pageIndex + 1, this.pageSize)
      .subscribe({
        next: (data) => {
          // console.log('data: ', data);
          this.cards = data.data ?? [];
          // console.log('cards: ', this.cards);
          this.length = data.pagination.total ?? 100;
          this.spinnerActivate.set(false);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Card loading faild', err);
        },
      });
  }
}
