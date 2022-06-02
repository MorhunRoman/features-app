import {Component, OnInit} from '@angular/core';
import {MailService} from "../../services/mail.service";
import {from, Observable} from "rxjs";
import {MailItemInterface} from "../../shared/models/mails/mail-item.interface";
import {DialogService} from "../../services/dialog.service";
import {MailCreateDialogComponent} from "./components/mail-create-dialog/mail-create-dialog.component";
import {switchMap, take, tap} from "rxjs/operators";
import {DialogActions, DialogDataInterface} from "../../shared/models/modals/dialog-data.interface";
import {MatDialogConfig} from "@angular/material/dialog";
import {ItemActionsInterface} from "../../shared/models/item-actions/item-actions.interface";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  public modalActions = DialogActions;
  public mailsList$: Observable<MailItemInterface[]>;
  public mailActions: ItemActionsInterface[] = [
    {label: 'Delete', colorScheme: 'warn', action: DialogActions.DELETE},
    {label: 'View', colorScheme: 'primary', action: DialogActions.VIEW}
  ];


  constructor(private mailService: MailService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.mailsList$ = this.mailService.mailsList;
  }



  actionEventHandler(action: DialogActions, mailItem: MailItemInterface) {
    switch (action) {
      case DialogActions.VIEW: {
        this.openViewMailModal(action, mailItem);
        break;
      }
      case DialogActions.DELETE: {
        this.deleteMail(mailItem.id);
        // this.deleteMail(mailItem.id);
        break;
      }
    }
  }

  deleteMail(mailId: number) {
    const dialogConfig: MatDialogConfig<{ label: string }> = {
      data: {
        label: 'Delete this mail?'
      }
    }
    const confirmDialog$ = from(this.dialogService.openConfirmModal(dialogConfig));
    confirmDialog$.pipe(
      switchMap((response) => {
        return response.afterClosed();
      }),
      take(1),
      tap((dialogResponse) => {
        if(dialogResponse && dialogResponse.action === DialogActions.APPROVE) {
          this.mailService.deleteMail(mailId);
        }
      })
    ).subscribe();
  }

  openViewMailModal(action: DialogActions, mailItem?: MailItemInterface) {
    const dialogConfig: MatDialogConfig<DialogDataInterface> = {
      ...this.dialogService.dialogBaseConfig,
      data: {
        action,
        ...(!!mailItem) && {item: mailItem}
      }
    };
    this.dialogService.openModal<MailCreateDialogComponent>(MailCreateDialogComponent, dialogConfig).afterClosed()
      .pipe(
        take(1),
        tap((dialogResult: DialogDataInterface<MailItemInterface>) => {
          if(!!dialogResult && dialogResult.action === DialogActions.APPROVE) {
            this.mailService.createEmail(dialogResult.item);
          }
        })
      ).subscribe();
  }

}
