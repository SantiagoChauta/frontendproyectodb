import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/tablas.interfaces';

@Component({
  selector: 'catalogo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public producto:Producto;

  valor(){
    console.log(this.producto);
  }
}
