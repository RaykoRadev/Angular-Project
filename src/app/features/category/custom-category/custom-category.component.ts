import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { LoadCardView } from '../load-card-view/load-card-view.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-category',
  imports: [LoadCardView],
  templateUrl: './custom-category.html',
  styleUrl: './custom-category.css',
})
export class CustomCategory implements OnInit {
  activeRoute = inject(ActivatedRoute);
  category!: string;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.category = params.get('category') || '';
      if (this.category === 'allCards') {
        this.category = '';
      }
      this.cdr.detectChanges();
    });
  }
}
