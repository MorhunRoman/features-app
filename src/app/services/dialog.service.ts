import { Injectable, TemplateRef } from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from "@angular/cdk/portal";
import {DialogDataInterface} from "../shared/models/modals/dialog-data.interface";

@Injectable()
export class DialogService {

  public dialogBaseConfig: MatDialogConfig = {
    width: '80%',
    maxWidth: '768px'
  }

  constructor(private dialog: MatDialog) {
  }

  openModal<T,R = DialogDataInterface>(component: ComponentType<T> | TemplateRef<T>, matDialogConfig: MatDialogConfig<R>): MatDialogRef<T> {
    return this.dialog.open(component, matDialogConfig);
  }

  async openConfirmModal(dialogConfig: MatDialogConfig) {
    const importedModule = await import('../shared/dialogs/confirm-dialog/confirm-dialog.module');
    const confirmDialogComponent = importedModule.ConfirmDialogModule.getComponent();
    return this.openModal<InstanceType<typeof confirmDialogComponent>>(confirmDialogComponent, dialogConfig);
  }


}
