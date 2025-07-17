import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user-service/user.service';
import { AuthService } from '../../core/services/auth-service/auth.service';
// import { Observable, tap } from 'rxjs';
import { UserProf } from '../../shared/utils/interfaces';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfileComponent implements OnInit {
  protected authservice = inject(AuthService);
  protected userService = inject(UserService);

  userInfo: UserProf | null = null;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.authservice.isLoggedIn());

    if (this.authservice.isLoggedIn()) {
      this.userService.profile().subscribe({
        next: (user) => {
          this.userInfo = user;
          console.log('some:', user);
          console.log('userinfo:', this.userInfo);
          this.cd.detectChanges();
        },
        error: (err) => {
          console.error('profile data', err);
        },
      });
    } else {
      console.warn("couldn't load the profile info");
    }
  }
}
