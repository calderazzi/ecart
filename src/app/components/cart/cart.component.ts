import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartApi:CartapiService) { }
  products:any = [];
  allProducts:any = 0;

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=> {
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item:any) {
    this.cartApi.removeCartData(item);
  }
  removeAllProduct() {
    this.cartApi.removeAllCart();
  }

}
