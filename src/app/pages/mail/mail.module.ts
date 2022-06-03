import {NgModule} from "@angular/core";
import {MailComponent} from "./mail.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { MailCreateDialogComponent } from './components/mail-create-dialog/mail-create-dialog.component';
import {BaseDialogModule} from "../../components/dialogs/base-dialog/base-dialog.module";
import {ItemActionsModule} from "../../shared/components/item-actions/item-actions.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {PageHeaderModule} from "../../shared/components/page-header/page-header.module";
import {DialogService} from "../../services/dialog.service";

const routes: Routes = [
  {
    path: '',
    component: MailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BaseDialogModule,
    MatListModule,
    MatButtonModule,
    ItemActionsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PageHeaderModule,
  ],
  declarations: [
    MailComponent,
    MailCreateDialogComponent
  ],
  providers: [
    DialogService
  ]
})
export class MailModule {

}
