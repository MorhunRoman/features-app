import {Component, OnInit} from '@angular/core';
import {DialogActions, DialogDataInterface} from "../../shared/models/dialogs/dialog-data.interface";
import {Observable} from "rxjs";
import {ContactItemInterface} from "../../shared/models/contacts/contact-item.interface";
import {ContactsService} from "../../services/contacts.service";
import {ItemActionsInterface} from "../../shared/models/item-actions/item-actions.interface";
import {PageItemInterface} from "../../shared/models/page-item/page-item.interface";
import {DialogService} from "../../services/dialog.service";
import {ContactCreateDialogComponent} from "./components/contact-create-dialog/contact-create-dialog.component";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, PageItemInterface<ContactItemInterface> {

  public modalActions = DialogActions;
  public contactsList$: Observable<ContactItemInterface[]>;
  public listItemActions: ItemActionsInterface[] = [
    {label: 'Delete', colorScheme: 'warn', action: DialogActions.DELETE},
    {label: 'View', colorScheme: 'primary', action: DialogActions.VIEW}
  ];

  constructor(private contactsService: ContactsService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.contactsList$ = this.contactsService.contactsList;
  }

  openViewModal(action: DialogActions, contactItem?: ContactItemInterface): void {
    const dialogConfig = this.dialogService.generateViewDialogConfig<ContactItemInterface>(action, contactItem);
    this.dialogService.openModal<ContactCreateDialogComponent>(ContactCreateDialogComponent, dialogConfig).afterClosed()
      .pipe(
        take(1),
        tap((dialogResponse: DialogDataInterface<ContactItemInterface>) => {
          if(!!dialogResponse && dialogResponse.action === DialogActions.APPROVE) {
            this.contactsService.createContact(dialogResponse.item);
          }
        })
      ).subscribe();
  }

  actionEventHandler(action: DialogActions, contactItem: ContactItemInterface): void {
    switch (action) {
      case DialogActions.VIEW: {
        this.openViewModal(action, contactItem);
        break;
      }
      case DialogActions.DELETE: {
        this.deleteItem(contactItem.id);
        break;
      }
    }
  }

  deleteItem(contactId: number): void {
    this.contactsService.deleteContact(contactId);

  }

}
