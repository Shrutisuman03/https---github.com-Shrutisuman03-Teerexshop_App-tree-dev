import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CartlistComponent }from'./cartlist/cartlist.component';


import {ListComponent} from './list/list.component';

const routes: Routes = [{component: ListComponent,path: ''},{component:CartlistComponent ,path:'gocart'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
