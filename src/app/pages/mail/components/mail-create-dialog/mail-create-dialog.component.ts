import {Component, Inject, OnInit} from '@angular/core';
import {BaseDialogComponent} from "../../../../components/dialogs/base-dialog/base-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataInterface} from "../../../../shared/models/dialogs/dialog-data.interface";
import {MailItemInterface} from "../../../../shared/models/mails/mail-item.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogViewItemInterface} from "../../../../shared/models/dialogs/dialog-view-item.interface";

@Component({
  selector: 'app-mail-edit-modal',
  templateUrl: './mail-create-dialog.component.html',
  styleUrls: ['./mail-create-dialog.component.scss']
})
export class MailCreateDialogComponent extends BaseDialogComponent implements OnInit, DialogViewItemInterface {

  public creationForm: FormGroup;

  constructor(private modalRef: MatDialogRef<MailCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogDataInterface<MailItemInterface>,
              private formBuilder: FormBuilder) {
    super(modalRef, dialogData)
  }

  ngOnInit(): void {
    if(this.dialogData.action === this.dialogActions.CREATE) {
      this.generateCreationForm();
    }
  }

  generateCreationForm(): void {
    this.creationForm = this.formBuilder.group({
      to: [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ])
      ],
      subject: [null, Validators.maxLength(50)
      ],
      text: [null, Validators.required]
    })
  }

  public createItem(): void {
    if(this.creationForm.valid) {
      this.close<MailItemInterface>(this.dialogActions.APPROVE, {...this.creationForm.value});
    }
  }



}
