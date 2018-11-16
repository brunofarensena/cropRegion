import { MapsComponent } from './../components/maps/maps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MapsComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
