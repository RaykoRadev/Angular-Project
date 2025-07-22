import { Component, Inject, OnInit, signal } from '@angular/core';
import { Coments } from '../coments/coments.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../../core/services/card-service/card.service';
import { CardResp } from '../../../shared/utils/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCard } from '../../delete-card/delete-card.component';

@Component({
  selector: 'app-details',
  imports: [Coments],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  cardId: string = '';
  cardInfo = signal<CardResp | null>(null);

  constructor(
    private activeRouting: ActivatedRoute,
    private cardService: CardService,
    private deleteDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouting.params.subscribe({
      next: (url) => {
        console.log('url: ', url['card._id']);
        this.cardId = url['card._id'];
        this.loadData(this.cardId);
      },
    });
  }

  private loadData(cardId: string) {
    this.cardService.getOneById(cardId).subscribe({
      next: (card) => {
        console.log('card info:', card);
        this.cardInfo.set(card);
        console.log(this.cardInfo);
        // const confirmation = this.deleteDialog.open(DeleteCard);
      },
      error: (err) => {
        console.error('Card info loading faild', err);
      },
    });
  }

  deleteFunk() {
    console.log('it is working delete button');

    const dialogRef = this.deleteDialog.open(DeleteCard);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        console.log('card deleted');

        this.cardService.delete(this.cardId).subscribe({
          next: () => {
            this.router.navigate([this.cardInfo()?.category]);
          },
          error: (err) => {
            console.error("Card couldn't be deleted!", err);
          },
        });
      } else {
        console.log('delete canceled');
      }
    });
  }
}
