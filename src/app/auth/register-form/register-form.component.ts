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
import { EmailDirective } from '../../directives/email.directive';
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
  // providers: [UserService],
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

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  handlerSubmit() {
    if (this.registerForm.valid) {
      const formData: UserReg = this.registerForm.value as UserReg;

      // this.service.register(formData).subscribe();
      // this.registerForm.reset();

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
    // this.router.navigate(['/home']);
  }
}
