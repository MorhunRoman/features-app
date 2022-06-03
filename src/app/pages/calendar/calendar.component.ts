import { Component, OnInit } from '@angular/core';
import {PageItemInterface} from "../../shared/models/page-item/page-item.interface";
import {CalendarItemInterface} from "../../shared/models/calendar/calendar-item.interface";
import {ItemActionsInterface} from "../../shared/models/item-actions/item-actions.interface";
import {DialogActions, DialogDataInterface} from "../../shared/models/dialogs/dialog-data.interface";
import {Observable} from "rxjs";
import {CalendarService} from "../../services/calendar.service";
import {ContactItemInterface} from "../../shared/models/contacts/contact-item.interface";
import {ContactCreateDialogComponent} from "../contacts/components/contact-create-dialog/contact-create-dialog.component";
import {take, tap} from "rxjs/operators";
import {DialogService} from "../../services/dialog.service";
import {CalendarViewDialogComponent} from "./components/calendar-view-dialog/calendar-view-dialog.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, PageItemInterface<CalendarItemInterface>  {

  public modalActions = DialogActions;
  public listItemActions: ItemActionsInterface[] = [
    {label: 'Delete', colorScheme: 'warn', action: DialogActions.DELETE},
    {label: 'View', colorScheme: 'primary', action: DialogActions.VIEW}
  ];
  public eventsList$: Observable<CalendarItemInterface[]>;

  constructor(private calendarService: CalendarService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.eventsList$ = this.calendarService.eventsList;
  }

  actionEventHandler(action: DialogActions, item: CalendarItemInterface): void {
    switch (action) {
      case DialogActions.VIEW: {
        this.openViewModal(action, item);
        break;
      }
      case DialogActions.DELETE: {
        this.deleteItem(item.id);
        break;
      }
    }
  }

  deleteItem(id: number): void {
    this.calendarService.deleteEvent(id);
  }

  openViewModal(action: DialogActions, item?: CalendarItemInterface): void {
    const dialogConfig = this.dialogService.generateViewDialogConfig<CalendarItemInterface>(action, item);
    this.dialogService.openModal<CalendarViewDialogComponent>(CalendarViewDialogComponent, dialogConfig).afterClosed()
      .pipe(
        take(1),
        tap((dialogResponse:  DialogDataInterface<CalendarItemInterface>) => {
          if (!!dialogResponse && dialogResponse.action === DialogActions.APPROVE) {
            this.calendarService.createEvent(dialogResponse.item);
          }
        })
      ).subscribe();
  }

}

// openViewModal(action: DialogActions, contactItem?: ContactItemInterface): void {
//   const dialogConfig = this.dialogService.generateViewDialogConfig<ContactItemInterface>(action, contactItem);
//   this.dialogService.openModal<ContactCreateDialogComponent>(ContactCreateDialogComponent, dialogConfig).afterClosed()
//     .pipe(
//       take(1),
//       tap((dialogResponse: DialogDataInterface<ContactItemInterface>) => {
//         if(!!dialogResponse && dialogResponse.action === DialogActions.APPROVE) {
//           this.contactsService.createContact(dialogResponse.item);
//         }
//       })
//     ).subscribe();
// }
