import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogActions, DialogDataInterface} from "../../../shared/models/modals/dialog-data.interface";

@Component({
  selector: 'app-base-modal',
  template: ''
})

export class BaseModalComponent<T = DialogDataInterface> implements OnInit {

  public dialogActions = DialogActions;
  public textareaRowsValue = 5;

  constructor(public dialogRef: MatDialogRef<BaseModalComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: T) { }

  ngOnInit(): void {

  }

  public close<T = null>(action: DialogActions, dialogResponse?: T): void {
    this.dialogRef.close({action, ...(!!dialogResponse && {item: dialogResponse})});
  }


}
