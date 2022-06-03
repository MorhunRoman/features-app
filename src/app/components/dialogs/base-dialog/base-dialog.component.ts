import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogActions, DialogDataInterface} from "../../../shared/models/dialogs/dialog-data.interface";

@Component({
  selector: 'app-base-dialog',
  template: ''
})

export class BaseDialogComponent<T = DialogDataInterface> {

  public dialogActions = DialogActions;
  public textareaRowsValue = 5;

  constructor(public dialogRef: MatDialogRef<BaseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: T) { }

  public close<T = null>(action: DialogActions, dialogResponse?: T): void {
    this.dialogRef.close({action, ...(!!dialogResponse && {item: dialogResponse})});
  }

}
