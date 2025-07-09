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

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  providers: [UserService],
})
export class LoginForm {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private service: UserService) {}

  handlerSubmit() {
    if (this.loginForm.valid) {
      const formData: UserLog = this.loginForm.value as UserLog;

      this.service.login(formData).subscribe();
      this.loginForm.reset();
    } else {
      console.warn('Form is invalid');
    }
  }
}
