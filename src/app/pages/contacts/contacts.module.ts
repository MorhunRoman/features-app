import {NgModule} from "@angular/core";
import {ContactsComponent} from "./contacts.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsModule {

}
