import {Component, Inject, OnInit} from '@angular/core';
import {BaseModalComponent} from "../../../../components/modals/base-modal/base-modal.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataInterface} from "../../../../shared/models/modals/dialog-data.interface";
import {MailItemInterface} from "../../../../shared/models/mails/mail-item.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mail-edit-modal',
  templateUrl: './mail-create-dialog.component.html',
  styleUrls: ['./mail-create-dialog.component.scss']
})
export class MailCreateDialogComponent extends BaseModalComponent implements OnInit {

  public mailCreationForm: FormGroup;

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

  private generateCreationForm() {
    this.mailCreationForm = this.formBuilder.group({
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

  createEmail() {
    if(this.mailCreationForm.valid) {
      this.close<MailItemInterface>(this.dialogActions.APPROVE, {...this.mailCreationForm.value})
    }
  }



}
