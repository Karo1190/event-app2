import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-mesage',
  templateUrl: './error-mesage.component.html',
  styleUrl: './error-mesage.component.scss'
})
export class ErrorMesageComponent {
  @Input() control!: AbstractControl<any,any> | null;

  constructor() { }

  get errorMessage() {
    if (this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {        
          return this.getErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }

  private config: { [key: string]: string } = {
    required: 'Pole jest wymagane',
    email: 'Invalid email address',
  };
  
  private getErrorMessage(validatorName: string, validatorValue?: any) {
    return this.config[validatorName] || 'Unknown error';
  }
}
