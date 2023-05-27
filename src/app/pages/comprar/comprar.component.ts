import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { CategoriaService } from '../../services/categoria.service';
import { ProductoService } from "src/app/services/producto.service";
import { Categoria } from "src/app/interfaces/tablas.interfaces";
import { Producto } from "src/app/interfaces/tablas.interfaces";
import { NgModel } from "@angular/forms";

@Component({
  selector:'pages-comprar',
  templateUrl:"./comprar.component.html",
  styleUrls: ['../../app.component.css', './comprar.component.css']
})
export class ComprarPageComponent implements OnInit{

  categorias:Categoria[];
  subcategorias:Categoria[];
  productos:Producto[];

  id_region:number;
  id_pais:number;

  @ViewChild('id_categoria')
  id_categoria : ElementRef<HTMLInputElement>;


  constructor(private categoriaService: CategoriaService, private productoService: ProductoService){}

  ngOnInit(): void {
    this.id_region=1;
    this.id_pais=1;

    this.categoriaService.getCategorias().subscribe(
      categorias => this.categorias = categorias
    );

    this.categoriaService.getSubCategorias(1).subscribe(
      categorias => {
        this.subcategorias = categorias
      }
    )

    this.productoService.getProductosCategoria(1,1,7).subscribe(
      productos => {
        this.productos = productos
        console.log(productos)
      }
    )

  }

  cambiar(id:number){
    this.categoriaService.getSubCategorias(id).subscribe(
      categorias => {
        this.subcategorias = categorias

      }
    )
    this.productosCategoria();
  }

  productosCategoria(){
    this.productoService.getProductosCategoria(1,1,parseInt(this.id_categoria.nativeElement.value)).subscribe(
      productos => {
        this.productos = productos
      }
    )
  }


  comprar(id:number){

  }
}
