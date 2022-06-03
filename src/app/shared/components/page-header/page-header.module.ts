import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PageHeaderComponent} from "./page-header.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule {

}
