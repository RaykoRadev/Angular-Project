import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../core/services/user.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  providers: [User],
})
export class LoginForm {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  handlerSubmit() {
    // if (this.registerForm.invalid) {
    //   console.log('Form is invalid: ', this.registerForm.invalid);

    //   return;
    // }

    console.log(this.registerForm.value);

    this.registerForm.reset();
  }
}
