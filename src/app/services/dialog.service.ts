import { Injectable, TemplateRef } from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from "@angular/cdk/portal";
import {DialogActions, DialogDataInterface} from "../shared/models/dialogs/dialog-data.interface";

@Injectable({
  providedIn: "root"
  })
export class DialogService {

  private baseDialogConfig: MatDialogConfig = {
    width: '80%',
    maxWidth: '768px'
  }

  constructor(private dialog: MatDialog) {
  }

  public openModal<T,R = DialogDataInterface>(component: ComponentType<T> | TemplateRef<T>, matDialogConfig: MatDialogConfig<R>): MatDialogRef<T> {
    return this.dialog.open(component, matDialogConfig);
  }

  async openConfirmModal(dialogConfig: MatDialogConfig) {
    const importedModule = await import('../shared/dialogs/confirm-dialog/confirm-dialog.module');
    const confirmDialogComponent = importedModule.ConfirmDialogModule.getComponent();
    return this.openModal<InstanceType<typeof confirmDialogComponent>>(confirmDialogComponent, dialogConfig);
  }

  public generateViewDialogConfig<T = null>(action?: DialogActions, item?: T): MatDialogConfig<DialogDataInterface<T>> {
    return {
      ...this.baseDialogConfig,
      data: {
      ...(!!action) && {action},
      ...(!!item) && {item: item}
      }
    }
  }


}
