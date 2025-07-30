import { Component, inject, OnInit, signal } from '@angular/core';
import { Coments } from '../coments/coments.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardService } from '../../../core/services/card-service/card.service';
import { CardResp } from '../../../shared/utils/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCard } from '../../delete-card/delete-card.component';
import { getUserData, isLogged } from '../../../shared/utils/userData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [Coments, CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  cardId: string = '';
  cardInfo = signal<CardResp | null>(null);
  isOwner: boolean = false;
  isLoggedIn = signal<boolean>(!!getUserData());
  isAlreagyLiked = signal<boolean>(false);

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
        // console.log(this.activeRouting.snapshot.url[0].path);
        // console.log(this.activeRouting.snapshot.url[1].path);

        this.cardId = url['card._id'];
        this.loadData(this.cardId);
      },
    });
  }

  private loadData(cardId: string) {
    this.cardService.getOneById(cardId).subscribe({
      next: (card) => {
        // console.log('card info:', card);
        this.cardInfo.set(card);
        // console.log(this.cardInfo);
        this.isOwner = this.cardInfo()?.author._id === getUserData()?._id;

        if (this.cardInfo()?.likes.some((l) => l._id === getUserData()?._id)) {
          this.isAlreagyLiked.set(true);
        }

        console.log(this.isOwner);
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

        if (this.isOwner) {
          this.cardService.delete(this.cardId).subscribe({
            next: () => {
              this.router.navigate([this.cardInfo()?.category]);
            },
            error: (err) => {
              console.error("Card couldn't be deleted!", err);
            },
          });
        } else {
          throw new Notification(
            'Нямаш право да изтриеш тази картичка/публикация!'
          );
        }
      } else {
        console.log('delete canceled');
      }
    });
  }

  onLike() {
    if (this.isAlreagyLiked()) {
      this.cardService.unsendlike(this.cardId).subscribe({
        next: (data) => {
          console.log('from unlike section:', data);
          this.isAlreagyLiked.set(false);
          this.loadData(this.cardId);
        },
        error: (err) => {
          console.error('Unlike faild', err);
        },
      });
    } else {
      this.cardService.sendlike(this.cardId).subscribe({
        next: (data) => {
          console.log('from like section:', data);
          this.isAlreagyLiked.set(true);
          this.loadData(this.cardId);
        },
        error: (err) => {
          console.error('Like faild', err);
        },
      });
    }
  }
}
