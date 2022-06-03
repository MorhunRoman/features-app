import {Component, Inject, OnInit} from '@angular/core';
import {BaseDialogComponent} from "../../../../components/dialogs/base-dialog/base-dialog.component";
import {DialogCreateItemInterface} from "../../../../shared/models/dialogs/dialog-create-item.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataInterface} from "../../../../shared/models/dialogs/dialog-data.interface";
import {CalendarItemInterface} from "../../../../shared/models/calendar/calendar-item.interface";

@Component({
  selector: 'app-calendar-view-dialog',
  templateUrl: './calendar-create-dialog.component.html',
  styleUrls: ['./calendar-create-dialog.component.scss']
})
export class CalendarCreateDialogComponent extends BaseDialogComponent implements OnInit, DialogCreateItemInterface {

  creationForm: FormGroup;

  constructor(private modalRef: MatDialogRef<CalendarCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogDataInterface<CalendarItemInterface>,
              private formBuilder: FormBuilder) {
    super(modalRef, dialogData);
  }

  ngOnInit(): void {
    if(this.dialogData.action === this.dialogActions.CREATE) {
      this.generateCreationForm();
    }
  }

  createItem(): void {
    if(this.creationForm.valid) {
      this.close<CalendarItemInterface>(this.dialogActions.APPROVE, {...this.creationForm.value});
    }
  }

  generateCreationForm(): void {
    this.creationForm = this.formBuilder.group({
      eventName: [null, Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^([a-zA-Z]+)$/)
      ])
      ],
      eventDesc: [null, Validators.compose([
        Validators.maxLength(50),
        Validators.pattern(/^([a-zA-Z]+)$/)
      ])
      ],
      date: [null, Validators.required]
    });
  }

}
