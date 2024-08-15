import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WishModule,
    ContactModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
