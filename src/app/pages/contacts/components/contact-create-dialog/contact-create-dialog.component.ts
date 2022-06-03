import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataInterface} from "../../../../shared/models/dialogs/dialog-data.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactItemInterface} from "../../../../shared/models/contacts/contact-item.interface";
import {BaseDialogComponent} from "../../../../components/dialogs/base-dialog/base-dialog.component";
import {DialogViewItemInterface} from "../../../../shared/models/dialogs/dialog-view-item.interface";
import {MailItemInterface} from "../../../../shared/models/mails/mail-item.interface";

@Component({
  selector: 'app-contact-view-dialog',
  templateUrl: './contact-create-dialog.component.html',
  styleUrls: ['./contact-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCreateDialogComponent extends BaseDialogComponent implements OnInit, DialogViewItemInterface {

  creationForm: FormGroup;

  constructor(private modalRef: MatDialogRef<ContactCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogDataInterface<ContactItemInterface>,
              private formBuilder: FormBuilder) {
    super(modalRef, dialogData);
  }

  ngOnInit(): void {
    console.log(this.dialogData);
    if(this.dialogData.action === this.dialogActions.CREATE) {
      this.generateCreationForm();
    }
  }

  createItem(): void {
    if(this.creationForm.valid) {
      this.close<ContactItemInterface>(this.dialogActions.APPROVE, {...this.creationForm.value});
    }
  }

  generateCreationForm(): void {
    this.creationForm = this.formBuilder.group({
      name: [null, Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^([a-zA-Z]+)$/)
      ])
      ],
      surname: [null, Validators.compose([
        Validators.maxLength(50),
        Validators.pattern(/^([a-zA-Z]+)$/)
      ])
      ],
      phone: [null, Validators.compose([
        Validators.required,
      ])
      ]
    })
  }

}
