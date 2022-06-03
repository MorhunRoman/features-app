export enum DialogActions {
  VIEW = 'view',
  CREATE = 'create',
  DELETE = 'delete',
  APPROVE = 'approve',
  CANCEL = 'cancel'
}

export interface DialogDataInterface <T = Object> {
  label?: string;
  action?: DialogActions,
  item?: T
}


