import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'sidebar2', component: Sidebar2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
