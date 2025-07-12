import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '../../core/user.service';
import { UserReg } from '../../shared/utils/interfaces';
import { Router, RouterLink } from '@angular/router';
import { DOMAINS } from '../../shared/cosntants/constants';
import { EmailDirective } from '../../directives/email.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
  providers: [UserService],
})
export class RegisterForm {
  domains = DOMAINS;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    repass: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  handlerSubmit() {
    if (this.registerForm.valid) {
      const formData: UserReg = this.registerForm.value as UserReg;

      this.service.register(formData).subscribe();
      this.registerForm.reset();
    } else {
      console.warn('Form is invalid');
    }
    this.router.navigate(['/home']);
  }
}
