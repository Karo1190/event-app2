import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Option } from '../model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  formGroup!: FormGroup;
  navbarFormGroup!: FormGroup;
  languageOptions: Option[] = [
    { label: 'PL', value: 'pl' },
    { label: 'EN', value: 'en' },
  ];

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
    });
    this.navbarFormGroup = new FormGroup({
      language: new FormControl('pl'),
    });

  }

  switchLanguage(event: any) {
    const selectedLanguage = event.value;
    this.translate.use(selectedLanguage);
  }
}
