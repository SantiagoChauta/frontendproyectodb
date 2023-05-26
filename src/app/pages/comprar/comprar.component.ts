import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from "src/app/interfaces/tablas.interfaces";

@Component({
  selector:'pages-comprar',
  templateUrl:"./comprar.component.html",
  styleUrls: ['../../app.component.css', './comprar.component.css']
})
export class ComprarPageComponent implements OnInit{

  categorias:Categoria[];
  subcategorias:Categoria[];

  @ViewChild('subcategoria')
  private tagselected!:ElementRef<HTMLInputElement>;

  constructor(private categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categorias => this.categorias = categorias
    );

    this.categoriaService.getSubCategorias(1).subscribe(
      categorias => {
        this.subcategorias = categorias
      }
    )

  }

  cambiar(id:number){
    this.categoriaService.getSubCategorias(id).subscribe(
      categorias => {
        this.subcategorias = categorias
      }
    )
  }

  nombre(){
    console.log(this.tagselected.nativeElement.value);
  }

}
