import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DialogActions} from "../../models/dialogs/dialog-data.interface";
import {ItemActionsInterface} from "../../models/item-actions/item-actions.interface";

@Component({
  selector: 'app-item-actions',
  templateUrl: './item-actions.component.html',
  styleUrls: ['./item-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemActionsComponent {

  @Input() actionsList: ItemActionsInterface[] = [];
  @Output() actionEvent: EventEmitter<DialogActions> = new EventEmitter<DialogActions>();

  constructor() {
  }
}
