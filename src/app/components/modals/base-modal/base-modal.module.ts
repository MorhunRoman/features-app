import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BaseModalComponent} from "./base-modal.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  declarations: [
    BaseModalComponent
  ],
  exports: [
    BaseModalComponent,
    MatDialogModule
  ]
})
export class BaseModalModule {

}
