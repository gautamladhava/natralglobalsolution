import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { merge } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  emailerrorMessage = '';
  passworderrorMessage = '';
  confirmpassworderrorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
      merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());
    
    merge(this.confirmPassword.statusChanges, this.confirmPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateConfirmPasswordErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailerrorMessage = 'Email field cannot be empty';
    } else if (this.email.hasError('email')) {
      this.emailerrorMessage = 'Not a valid email';
    } else {
      this.emailerrorMessage = '';
    }
  }

  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);


  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passworderrorMessage = 'Password field cannot be empty';
    } else if (this.password.hasError('minlength')) {
      this.passworderrorMessage = 'Password must be at least 8 characters long';
    } else {
      this.passworderrorMessage = '';
    }
  }

  updateConfirmPasswordErrorMessage() {
    if (this.confirmPassword.hasError('required')) {
      this.confirmpassworderrorMessage = 'Please confirm your password';
    } else if (this.password.value !== this.confirmPassword.value) {
      this.confirmpassworderrorMessage = 'Passwords do not match';
    } else {
      this.confirmpassworderrorMessage = '';
    }
  }
}
