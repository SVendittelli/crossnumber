import { CartService } from './../cart.service';
import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);

    // TODO: Sam, please get rid of the nasty alert and implement a checkout button
    // item count display instead. Perhaps it could flash to alert the user? But not
    // too bright - make it subtle. But significant. But subtle

    window.alert('Your product has been added to the cart!');
  }

}
