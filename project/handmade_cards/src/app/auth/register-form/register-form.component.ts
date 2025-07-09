import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '../../core/user.service';
import { UserReg } from '../../shared/cosntants/interfaces';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
  providers: [UserService],
})
export class RegisterForm {
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

  constructor(private fb: FormBuilder, private service: UserService) {}

  handlerSubmit() {
    if (this.registerForm.valid) {
      const formData: UserReg = this.registerForm.value as UserReg;

      this.service.register(formData).subscribe();
      this.registerForm.reset();
    } else {
      console.warn('Form is invalid');
    }
  }
}
