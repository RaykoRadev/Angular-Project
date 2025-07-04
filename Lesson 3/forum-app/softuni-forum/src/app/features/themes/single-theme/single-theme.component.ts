import { Component, Input } from '@angular/core';
import { ThemeInt } from '../../../shared/interfaces/theme-interface';

@Component({
  selector: 'app-single-theme',
  imports: [],
  templateUrl: './single-theme.html',
  styleUrl: './single-theme.css',
})
export class SingleTheme {
  @Input() theme!: ThemeInt;
}
