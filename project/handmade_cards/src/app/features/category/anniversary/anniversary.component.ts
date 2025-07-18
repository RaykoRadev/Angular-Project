import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-anniversary',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './anniversary.html',
  styleUrl: './anniversary.css',
})
export class Anniversary {}
