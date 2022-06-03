import {FormGroup} from "@angular/forms";

export interface DialogCreateItemInterface {
  creationForm: FormGroup;
  generateCreationForm(): void;
  createItem(): void;
}
