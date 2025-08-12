import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordControlName: string,
  repassControlName: string
): ValidatorFn {
  return (control) => {
    const passFormControl = control.get(passwordControlName);
    const repassFormControl = control.get(repassControlName);

    const isPasswodsMatch = passFormControl?.value === repassFormControl?.value;
    // console.log(isPasswodsMatch);

    return isPasswodsMatch ? null : { passwordMismatch: true };
  };
}
