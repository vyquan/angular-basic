import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomePageComponent},
  {path:'product', component: ProductPageComponent},
  {path:'contact', component: ContactPageComponent},
  {path:'admin/product-list', component: ProductListComponent},
  {path:'product/:id', component: ProductDetailComponent},
  {path:'admin/product-add', component: ProductAddComponent},
  {path:'admin/product/:id/edit', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
