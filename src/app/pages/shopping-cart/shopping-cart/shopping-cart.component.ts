import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from 'src/app/interfaces/tablas.interfaces';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'pages-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css',]
})
export class ShoppingCartPageComponent implements OnInit{

  constructor(private productoService:ProductoService){}

  productos:ProductoCarrito[];
  total:number=0;


  ngOnInit(): void {
    this.productoService.getProductosCarrito().subscribe(
      response=>{
        this.productos =response;
        this.calcularTotal()
      },
      error=>{
        alert(error.error)
      }
    )



  }

  calcularTotal(){
    this.productos.forEach(element => {
      this.total+=element.precio
    });
  }

}
