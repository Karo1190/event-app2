// import { Injectable } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import { Control, Step } from '../../../account/services/account-model';

// @UntilDestroy()
// @Injectable({
//   providedIn: 'root',
// })
// export class FormService {
//   constructor(private fb: FormBuilder) {}

//   createForm(steps: Step[]): FormGroup {
//     const form = this.fb.group({});
//     steps.forEach((step, index) => {
//       setTimeout(() => {
//         const controls = step.controls.reduce((acc, control) => {
//           acc[control.name] = [control.defaultValue, this.getValidators(control)];
//           return acc;
//         }, {} as { [key: string]: any });
//         form.addControl(`step${index}`, this.fb.group(controls));
//       }, 0);
//     });
//     return form;
//   }

//   private getValidators(control: Control): any[] {
//     const validators = [];
//     if (control.required) validators.push(Validators.required);
//     if (control.type === 'email') validators.push(Validators.email);
//     return validators;
//   }

//   updateVisibility(form: FormGroup, steps: Step[]): void {
//     steps.forEach((step, index) => {
//       step.controls.forEach(control => {
//         const formControl = form.get(`step${index}.${control.name}`);
//         const isVisible = typeof control.visible === 'function' ? control.visible() : control.visible;
//         if (isVisible) {
//           formControl?.enable({ emitEvent: false });
//         } else {
//           formControl?.disable({ emitEvent: false });
//         }
//       });
//     });
//   }


// }


import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Step } from '../../../account/services/account-model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  generateForm(steps: Step[]): FormGroup {
    const formGroup = this.fb.group({});
    steps.forEach(step => {
      step.controls.forEach(control => {
        const validators = control.required ? [Validators.required] : [];
        formGroup.addControl(control.name, this.fb.control(control.defaultValue, validators));
      });
    });
    return formGroup;
  }
}

