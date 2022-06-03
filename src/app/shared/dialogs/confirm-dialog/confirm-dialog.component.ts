import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {BaseDialogComponent} from "../../../components/dialogs/base-dialog/base-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent extends BaseDialogComponent  {

  constructor(private modalRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: {label: string}) {
    super(modalRef, dialogData);
  }

}
