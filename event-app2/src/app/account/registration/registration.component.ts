import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  currentStepIndex: number = 0;
  form!: FormGroup;

  constructor(public accountService: AccountService) {

  }

  ngOnInit(): void {

    this.form = this.accountService.form;
  }

  getCurrentStepFormGroup(): FormGroup {
    return this.form.get(`step${this.currentStepIndex}`) as FormGroup;
  }

  isFormValid(): boolean {
    return this.getCurrentStepFormGroup().valid;
  }

  nextStep(): void {
    if (this.isFormValid()) {
      this.currentStepIndex++;
    }
  }

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  isControlVisible(control: any): boolean {
    return typeof control.visible === 'function' ? control.visible() : control.visible;
  }
}
