import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserReg } from '../../shared/utils/interfaces';
import { Router } from '@angular/router';
import { DOMAINS, EMAIL_PROVIDERS } from '../../shared/cosntants/constants';
import { CommonModule } from '@angular/common';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { matchPasswordsValidator } from '../../shared/utils/passwords.match.validator';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { UserService } from '../../core/services/user-service/user.service';

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormField,
    MatError,
    MatInput,
    MatLabel,
    CommonModule,
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  domains = DOMAINS;
  emailBase = EMAIL_PROVIDERS;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        repass: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      {
        validators: matchPasswordsValidator('password', 'repass'),
      }
    ),
  });

  constructor(private router: Router, private authService: AuthService) {}

  handlerSubmit() {
    if (this.registerForm.valid) {
      const { email, username, passGroup } = this.registerForm.value;

      const formData: UserReg = {
        email,
        username,
        password: passGroup?.password,
        repass: passGroup?.repass,
      } as UserReg;

      console.log('form data:', formData);

      this.authService.register(formData).subscribe({
        next: () => {
          this.registerForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Register failed', err);
        },
      });
    } else {
      console.warn('Form is invalid');
    }
  }
}
