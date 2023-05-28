import { Component, Input } from '@angular/core';
import { Pedido, Producto } from 'src/app/interfaces/tablas.interfaces';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'catalogo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public producto:Producto;
  public pedido:Pedido;

  constructor(private productoService: ProductoService){}

  valor(){
    console.log(this.producto);
    
    this.productoService.agregarProducto(this.producto).subscribe();
  }
}
