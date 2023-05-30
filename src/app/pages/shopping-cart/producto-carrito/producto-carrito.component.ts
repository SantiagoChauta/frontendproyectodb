import { ProductoCarrito } from './../../../interfaces/tablas.interfaces';
import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector:'shopping-cart-producto',
  templateUrl:'./producto-carrito.component.html',
  styleUrls: ['../shopping-cart/shopping-cart.component.css']
})
export class ProductoCarritoComponent{

  constructor(private productoService:ProductoService){}

  @Input()
  productos:ProductoCarrito[];

  borrar(value:any){
    console.log(value);
    this.productoService.eliminar(value);
  }
}
