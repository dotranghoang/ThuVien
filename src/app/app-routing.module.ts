import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {AddBookComponent} from './add-book/add-book.component';
import {ShowBookComponent} from './show-book/show-book.component';


const routes: Routes = [{
  path: 'show-customer',
  component: CustomerComponent
},
  {
    path: 'create-customer',
    component: CreateCustomerComponent
  },
  {
    path: 'add-book' ,
    component: AddBookComponent
  } ,
  {
    path: 'show-book' ,
    component: ShowBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
