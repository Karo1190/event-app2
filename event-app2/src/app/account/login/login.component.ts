import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Step } from '../../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
      rememberMe: [true],
    });
  }
}
