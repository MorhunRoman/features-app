import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {BaseModalComponent} from "../../../components/modals/base-modal/base-modal.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent extends BaseModalComponent  {

  constructor(private modalRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: {label: string}) {
    super(modalRef, dialogData);
  }

}
