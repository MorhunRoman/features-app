import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BaseModalModule} from "../../../components/modals/base-modal/base-modal.module";
import {ConfirmDialogComponent} from "./confirm-dialog.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    BaseModalModule,
    MatButtonModule
  ],
  declarations: [
    ConfirmDialogComponent
  ],
  exports: [
    ConfirmDialogComponent
  ]
})
export class ConfirmDialogModule {
  static getComponent(): typeof ConfirmDialogComponent {
    return ConfirmDialogComponent;
  }
}
