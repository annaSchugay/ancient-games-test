import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoxesListComponent} from "./boxes-list/boxes-list.component";
import {BoxDetailComponent} from "./box-detail/box-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BoxesListComponent
  },
  {
    path: 'box detail',
    component: BoxDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
