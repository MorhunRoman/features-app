import {DialogActions} from "../dialogs/dialog-data.interface";
import {ItemActionsInterface} from "../item-actions/item-actions.interface";

export interface PageItemInterface<T> {
  modalActions: typeof DialogActions;
  listItemActions: ItemActionsInterface[];
  actionEventHandler(action: DialogActions, item: T) : void;
  openViewModal(action: DialogActions, item?: T): void;
  deleteItem(id: number): void;
}
