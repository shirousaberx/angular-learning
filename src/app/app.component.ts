import { Component } from '@angular/core';
import { WishItem } from '../shared/modules/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ]

  listFilter = '0'

  newWishText = ''

  title = 'wishlist';

  get visibleItems() : WishItem[] {
    let value = this.listFilter

    if (value === '0') {
      return this.items;
    } else if (value ==='1') {
      return this.items.filter(item => !item.isCompleted)
    } else {
      return this.items.filter(item => item.isCompleted)
    }
  }

  addNewWish() {
    // add wish to items array
    // clear text box
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toogleItem(item : WishItem) {
    item.isCompleted = !item.isCompleted
    console.log(item)
  }
}
