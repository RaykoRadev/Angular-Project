import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user-service/user.service';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { ServRespUserData, UserProf } from '../../shared/utils/interfaces';
import { CommonModule } from '@angular/common';
import { getUserData } from '../../shared/utils/userData';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfileComponent implements OnInit {
  protected authservice = inject(AuthService);
  protected userService = inject(UserService);

  userInfo: ServRespUserData | null = null;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userInfo = getUserData();
    this.authservice.currentUser$.subscribe((user) => {
      this.userInfo = user;
    });
  }
}
