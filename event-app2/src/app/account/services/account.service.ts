import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Control, Step } from './account-model';


@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  form: FormGroup;
  steps: Step[] = [
    {
      header: 'registration.personalData',
      controls: [
        { name: 'isCompany', type: 'checkbox', label: 'Company', required: true, visible: true, defaultValue: false },
        { name: 'firstName', type: 'text', label: 'First Name', required: true, visible: () => !this.isCompany(), defaultValue: 'Jan' },
        { name: 'lastName', type: 'text', label: 'Last Name', required: true, visible: () => !this.isCompany(), defaultValue: '' },
        { name: 'companyName', type: 'text', label: 'Company Name', required: true, visible: () => this.isCompany(), defaultValue: '' },
        { name: 'email', type: 'email', label: 'Email', required: true, visible: true, defaultValue: '' },
      ],
    },
    {
      header: 'registration.addressData',
      controls: [
        { name: 'street', type: 'text', label: 'Street', required: true, visible: true, defaultValue: '' },
        { name: 'houseNumber', type: 'text', label: 'House Number', required: true, visible: true, defaultValue: '' },
        { name: 'apartmentNumber', type: 'text', label: 'Apartment Number', required: false, visible: true, defaultValue: '' },
        { name: 'postalCode', type: 'text', label: 'Postal Code', required: true, visible: true, defaultValue: '' },
        { name: 'city', type: 'text', label: 'City', required: true, visible: true, defaultValue: '' },
      ],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
    this.createForm();
    this.setInitialValues(); 
    this.updateVisibilityOnCompanyChange();
  }

  resetForm(): void {
    this.form.reset();
    this.setInitialValues(); 
  }

 createForm(): void {
    this.steps.forEach((step, index) => {
      const controls = step.controls.reduce((acc, control) => {
        acc[control.name] = [control.defaultValue, this.getValidators(control)];
        return acc;
      }, {} as { [key: string]: any });
      this.form.addControl(`step${index}`, this.fb.group(controls));
    });
  }

 setInitialValues(): void {
    this.steps.forEach((step, index) => {
      step.controls.forEach(control => {
        const formControl = this.form.get(`step${index}.${control.name}`);
        if (formControl && formControl.value === null) {
          formControl.setValue(control.defaultValue);
        }
      });
    });
  }

  private getValidators(control: Control): any[] {
    const validators = [];
    if (control.required) validators.push(Validators.required);
    if (control.type === 'email') validators.push(Validators.email);
    return validators;
  }

  private isCompany(): boolean {
    return this.form.get('step0.isCompany')?.value;
  }

  private updateVisibilityOnCompanyChange(): void {
    this.form.get('step0.isCompany')?.valueChanges.pipe(untilDestroyed(this)).subscribe(() => this.updateVisibility());
  }

  private updateVisibility(): void {
    this.steps.forEach((step, index) => {
      step.controls.forEach(control => {
        const formControl = this.form.get(`step${index}.${control.name}`);
        const isVisible = typeof control.visible === 'function' ? control.visible() : control.visible;
        if (isVisible) {
          formControl?.enable({ emitEvent: false });
        } else {
          formControl?.disable({ emitEvent: false });
        }
      });
    });
  }
}
