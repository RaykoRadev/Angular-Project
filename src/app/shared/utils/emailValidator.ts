import { ValidatorFn } from '@angular/forms';

export function emailValidator(
  domains: string[],
  emailBase: string[]
): ValidatorFn {
  const domainStr = domains.join('|');
  const emailBaseStr = emailBase.join('|');
  // const providersStr =
  const regExp = new RegExp(`[A-Za-z0-9]{6,}(${emailBaseStr})\.(${domainStr})`);
  return (control) => {
    const isInvalid = control.value === '' || regExp.test(control.value);
    return isInvalid ? null : { EmailValidator: true };
  };
}
