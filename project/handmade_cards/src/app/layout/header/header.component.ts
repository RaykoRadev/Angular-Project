import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/user.service';
import { AuthService } from '../../core/auth.service';
import { ServRespUserData } from '../../shared/utils/interfaces';
import { getUserData } from '../../shared/utils/userData';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [UserService],
})
export class HeaderComponent implements OnInit {
  user: ServRespUserData | null = null;
  logName = getUserData();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }
  name = this.logName ? this.logName.username : 'guest';
  onLogout(e: Event) {
    e.preventDefault();
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
