import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BaseDialogModule} from "../../../components/dialogs/base-dialog/base-dialog.module";
import {ConfirmDialogComponent} from "./confirm-dialog.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    BaseDialogModule,
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
