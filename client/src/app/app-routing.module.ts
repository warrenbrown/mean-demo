import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user-create', component: UserComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product', component: ProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
