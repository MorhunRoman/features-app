import {DialogActions} from "../modals/dialog-data.interface";

export interface ItemActionsInterface {
  label: string,
  action: DialogActions,
  colorScheme: 'primary' | 'accent' | 'warn'
}
