import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserLog } from '../../shared/utils/interfaces';
import { Router, RouterLink } from '@angular/router';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { UserService } from '../../core/services/user-service/user.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, MatFormField, MatError, MatInput, MatLabel],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  handlerSubmit() {
    if (this.loginForm.valid) {
      const formData: UserLog = this.loginForm.value as UserLog;

      this.authService.login(formData).subscribe({
        next: () => {
          this.loginForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('login faild', err);
        },
      });
    } else {
      console.warn('Form is invalid');
    }
  }
}
