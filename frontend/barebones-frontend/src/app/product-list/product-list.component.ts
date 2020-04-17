import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;

  share() {

    // TODO: Sam, please implement proper sharing here (you'll probably need to implement
    // social media integration too?)

    window.alert('The product has been shared!');
  }

  onNotify() {

    // TODO: Sam, please implement a notification system here. Not sure if it should be
    // through the site or separately through email. Ooh, browser notifications! Ensure
    // the site will wait until the browser confirms that site notifications are enabled.
    // Perhaps a modal with a big arrow pointing towards the area the request will pop up
    // in? Make sure to support IE6 too!

    window.alert('You will be notified when the product goes on sale');
  }
}
