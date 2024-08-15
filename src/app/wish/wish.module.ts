import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

import { WishService } from './wish.service';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  providers: [
    WishService
  ]
})
export class WishModule { }
