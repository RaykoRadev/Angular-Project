import {
  Component,
  computed,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { clearUserData, getUserData } from '../../shared/utils/userData';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [UserService],
})
export class HeaderComponent implements OnChanges {
  logName = getUserData();
  logUserData = signal(getUserData());

  constructor(private router: Router) {}
  onLogout(e: Event) {
    e.preventDefault();
    clearUserData();
    this.router.navigate(['/home']);
  }

  // guest = computed(() => !this.logUserData());
  // user = computed(() => !!this.logUserData());

  name = this.logName ? this.logName.username : 'guest';

  ngOnChanges(changes: SimpleChanges): void {}
}
