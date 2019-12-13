import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickUpComponent } from './pick-up/pick-up.component';


const routes: Routes = [
  { path: '', component: PickUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
