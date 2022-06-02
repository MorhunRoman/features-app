import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CalendarComponent} from "./calendar.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule {

}
