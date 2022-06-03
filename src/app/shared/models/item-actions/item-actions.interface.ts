import {DialogActions} from "../dialogs/dialog-data.interface";

export interface ItemActionsInterface {
  label: string,
  action: DialogActions,
  colorScheme: 'primary' | 'accent' | 'warn'
}
