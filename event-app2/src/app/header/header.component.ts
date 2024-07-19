import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalAccountComponent } from '../account/modal-account/modal-account.component';
import { AccountService } from '../account/services/account.service';
import { Option } from '../model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navbarFormGroup!: FormGroup;
  languageOptions: Option[] = [
    { label: 'PL', value: 'pl' },
    { label: 'EN', value: 'en' },
  ];

  constructor(private translate: TranslateService, private dialogService: DialogService, private formService: AccountService){}

  ngOnInit() {
    this.navbarFormGroup = new FormGroup({
      language: new FormControl('pl'),
    });
  }

  switchLanguage(event: any) {
    const selectedLanguage = event.value;
    this.translate.use(selectedLanguage);
  }

  openLoginDialog() {
    const ref: DynamicDialogRef = this.dialogService.open(ModalAccountComponent, {
      dismissableMask: true,
      baseZIndex: 10000
    });
    this.formService.resetForm();
  }
}
