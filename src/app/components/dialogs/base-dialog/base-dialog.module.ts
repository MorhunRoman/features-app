import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BaseDialogComponent} from "./base-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  declarations: [
    BaseDialogComponent
  ],
  exports: [
    BaseDialogComponent,
    MatDialogModule
  ]
})
export class BaseDialogModule {

}
