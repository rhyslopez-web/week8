import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path:"allproducts", component: AllProductsComponent}
]
