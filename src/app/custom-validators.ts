import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static passwordStrength( control: AbstractControl) {
    if (CustomValidators.isEmptyValue(control.value)) {
      return null;
    }
    if (!control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/)) {
      return { 'weakPassword': true };
    }

    return null;
  }


  static isEmptyValue(value) {
    return value == null || typeof value === 'string' && value.length === 0;
  }

  // being matching the password and confirPassword
  static passwordMatcher(control: AbstractControl) {

    // create var to get two values
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    // if one of them is empty, returning null
    if (CustomValidators.isEmptyValue(password) || CustomValidators.isEmptyValue(confirmPassword)) {
      return null;
    }
  // if they are equal return null, if not mismatch true
    return password === confirmPassword ? null : { 'mismatch': true };
    }

}
