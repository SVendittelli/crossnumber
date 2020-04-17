import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingPrices;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

}
