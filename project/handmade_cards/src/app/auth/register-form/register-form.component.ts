import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  registerForm = new FormGroup({
    email: new FormGroup('', [Validators.required, Validators.email]),
    password: new FormGroup('', [Validators.required, Validators.minLength(6)]),
    're-password': new FormGroup('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  handlerSubmit() {
    console.log(this.registerForm.value);

    this.registerForm.reset();
  }
}
