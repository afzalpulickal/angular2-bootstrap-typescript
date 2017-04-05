import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { emailValidator, matchingPasswords } from '../../app/validators/validators';

@Component({
  selector: 'example-form',
  templateUrl: './app/forms/example-form.html'
})
export class ExampleFormComponent {
  registrationForm: FormGroup;

  constructor(public fb: FormBuilder) {
    // Example use of FormBuilder, FormGroups, and FormControls
    this.registrationForm = fb.group({
      dob: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')})
    
  }
  
  submitRegistration(value: Object): void {
    console.log(value);
  }

}
