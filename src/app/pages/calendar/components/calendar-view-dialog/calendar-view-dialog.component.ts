import {Component, Inject, OnInit} from '@angular/core';
import {BaseDialogComponent} from "../../../../components/dialogs/base-dialog/base-dialog.component";
import {DialogViewItemInterface} from "../../../../shared/models/dialogs/dialog-view-item.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataInterface} from "../../../../shared/models/dialogs/dialog-data.interface";
import {CalendarItemInterface} from "../../../../shared/models/calendar/calendar-item.interface";

@Component({
  selector: 'app-calendar-view-dialog',
  templateUrl: './calendar-view-dialog.component.html',
  styleUrls: ['./calendar-view-dialog.component.scss']
})
export class CalendarViewDialogComponent extends BaseDialogComponent implements OnInit, DialogViewItemInterface {

  constructor(private modalRef: MatDialogRef<CalendarViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: DialogDataInterface<CalendarItemInterface>,
              private formBuilder: FormBuilder) {
    super(modalRef, dialogData);
  }

  ngOnInit(): void {
    if(this.dialogData.action === this.dialogActions.CREATE) {
      this.generateCreationForm();
    }
  }

  creationForm: FormGroup;

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
