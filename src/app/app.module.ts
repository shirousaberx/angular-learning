import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { WishService } from './wish/wish.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    WishModule
  ],
  providers: [
    WishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
