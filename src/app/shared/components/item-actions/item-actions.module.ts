import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {ItemActionsComponent} from "./item-actions.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    ItemActionsComponent
  ],
  exports: [
    ItemActionsComponent
  ]
})
export class ItemActionsModule {

}
