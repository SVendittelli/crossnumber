import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {

    // Sam, please implement processing checkout/customer data here

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.log('Your order has been submitted', customerData);
  }
}
