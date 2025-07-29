import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-card',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
  ],
  templateUrl: './delete-card.html',
  styleUrl: './delete-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCard {
  constructor() {
    console.log('delete component is on');
  }
}
