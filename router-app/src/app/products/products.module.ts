import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductslistComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class ProductsModule { }
