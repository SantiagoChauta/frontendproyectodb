import { ProductoCarrito } from './../../../interfaces/tablas.interfaces';
import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
  selector:'shopping-cart-producto',
  templateUrl:'./producto-carrito.component.html',
  styleUrls: ['../shopping-cart/shopping-cart.component.css']
})
export class ProductoCarritoComponent{

  @Input()
  productos:ProductoCarrito[];

}
