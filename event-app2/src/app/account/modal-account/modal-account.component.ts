import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-account',
  templateUrl: './modal-account.component.html',
  styleUrls: ['./modal-account.component.scss']
})
export class ModalAccountComponent implements OnInit {
  display: boolean = true;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void { }
}
