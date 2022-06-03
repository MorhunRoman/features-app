import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CalendarComponent} from "./calendar.component";
import {RouterModule, Routes} from "@angular/router";
import { CalendarCreateDialogComponent } from './components/calendar-create-dialog/calendar-create-dialog.component';
import {DialogService} from "../../services/dialog.service";
import {PageHeaderModule} from "../../shared/components/page-header/page-header.module";
import {ItemActionsModule} from "../../shared/components/item-actions/item-actions.module";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    PageHeaderModule,
    ItemActionsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    CalendarComponent,
    CalendarCreateDialogComponent
  ],
  providers: [
    DialogService
  ]
})
export class CalendarModule {

}
