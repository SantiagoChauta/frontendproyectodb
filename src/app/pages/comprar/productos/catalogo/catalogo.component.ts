import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/tablas.interfaces';

@Component({
  selector: 'page-comprar-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  @Input()
  public productos:Producto[];


}
