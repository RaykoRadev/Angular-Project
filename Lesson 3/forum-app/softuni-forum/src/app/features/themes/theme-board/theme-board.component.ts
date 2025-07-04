import { Component } from '@angular/core';
import { SingleTheme } from '../single-theme/single-theme.component';
import { ThemeService } from '../../../core/services/theme.service';
import { ThemeInt } from '../../../shared/interfaces/theme-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-board',
  imports: [SingleTheme],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css',
})
export class ThemeBoard {
  themes$: Observable<ThemeInt[]>;
  constructor(private themeService: ThemeService) {
    this.themes$ = themeService.getThemes();
  }
}
