import { Component } from '@angular/core';
import { CreateCard } from '../../create-card/create-card.component';
import { Coments } from '../coments/coments.component';

@Component({
  selector: 'app-details',
  imports: [Coments],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {}
