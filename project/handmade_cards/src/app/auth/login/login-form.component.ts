import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../core/user.service';
import { UserLog } from '../../shared/utils/interfaces';
import { Router, RouterLink } from '@angular/router';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, MatFormField, MatError, MatInput, MatLabel],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  providers: [UserService],
})
export class LoginForm {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  handlerSubmit() {
    if (this.loginForm.valid) {
      const formData: UserLog = this.loginForm.value as UserLog;

      this.service.login(formData).subscribe();
      this.loginForm.reset();
    } else {
      console.warn('Form is invalid');
    }

    this.router.navigate(['/home']);
  }
}
