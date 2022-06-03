import {FormGroup} from "@angular/forms";

export interface DialogViewItemInterface {
  creationForm: FormGroup;
  generateCreationForm(): void;
  createItem(): void;
}
