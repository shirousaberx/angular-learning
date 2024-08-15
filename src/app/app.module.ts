import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
