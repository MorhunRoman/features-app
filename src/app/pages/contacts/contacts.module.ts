import {NgModule} from "@angular/core";
import {ContactsComponent} from "./contacts.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PageHeaderModule} from "../../shared/components/page-header/page-header.module";
import {ItemActionsModule} from "../../shared/components/item-actions/item-actions.module";
import { ContactCreateDialogComponent } from './components/contact-create-dialog/contact-create-dialog.component';
import {DialogService} from "../../services/dialog.service";
import {BaseDialogModule} from "../../components/dialogs/base-dialog/base-dialog.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {TelInputModule} from "../../shared/components/tel-input/tel-input.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    PageHeaderModule,
    ItemActionsModule,
    BaseDialogModule,
    TelInputModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    ContactsComponent,
    ContactCreateDialogComponent
  ],
  providers: [
    DialogService
  ]

})
export class ContactsModule {

}
