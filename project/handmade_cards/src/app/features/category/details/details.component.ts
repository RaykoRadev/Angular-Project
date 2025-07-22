import { Component, OnInit } from '@angular/core';
import { CreateCard } from '../../create-card/create-card.component';
import { Coments } from '../coments/coments.component';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../../core/services/card-service/card.service';
import { tap } from 'rxjs';
import { CardResp } from '../../../shared/utils/interfaces';

@Component({
  selector: 'app-details',
  imports: [Coments],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  cardId: string = '';
  cardInfo: CardResp | null = null;
  constructor(
    private activeRouting: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.activeRouting.params.subscribe({
      next: (url) => {
        console.log('url: ', url['card._id']);
        this.cardId = url['card._id'];
        this.loadData(this.cardId);
      },
    });
    // console.log(this.activeRouting.params);
  }

  private loadData(cardId: string) {
    this.cardService.getOneById(cardId).subscribe({
      next: (card) => {
        console.log('card info:', card);
        this.cardInfo = card;
        console.log(this.cardInfo);
      },
      error: (err) => {
        console.error('Card info loading faild', err);
      },
    });
  }
}
