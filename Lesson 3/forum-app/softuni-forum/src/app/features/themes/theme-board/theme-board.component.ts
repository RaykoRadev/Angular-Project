import { Component } from '@angular/core';
import { SingleTheme } from '../single-theme/single-theme.component';

@Component({
  selector: 'app-theme-board',
  imports: [SingleTheme],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css',
})
export class ThemeBoard {}
