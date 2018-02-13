import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../custom-validators';

@Component({
  selector: 'app-registration-reactive-form',
  templateUrl: './registration-reactive-form.component.html',
  styleUrls: ['./registration-reactive-form.component.css']
})
export class RegistrationReactiveFormComponent implements OnInit {

  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
// create an object
  registrationForm: FormGroup;

  constructor( public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      gender: ['', Validators.required],
      password: ['', [CustomValidators.passwordStrength, Validators.required]],
      confirmPassword: ['', Validators.required],
      registration: ['', Validators.required],

      address: this.formBuilder.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
  }, { validator: [CustomValidators.passwordMatcher] });
  }

  onSubmit(formValue) {
    console.log(formValue);
    console.log(this.registrationForm.value);
  }

}
