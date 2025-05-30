import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path:"allproducts", component: AllProductsComponent},
    {path:"allproducts/:id", component:ProductDetailsComponent},
    {path:"admin", component: AdminComponent},
    {path:"addproduct", component: AddProductComponent}
]
