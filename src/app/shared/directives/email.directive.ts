import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { emailValidator } from '../utils/emailValidator';

// ! to be implementet somewhere in the feature

@Directive({
  selector: '[appEmailDirective]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, multi: true, useExisting: EmailDirective },
  ],
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];
  @Input() appEmailBase: string[] = [];
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const validatorFn = emailValidator(this.appEmail, this.appEmailBase);
    return validatorFn(control);
  }
}
