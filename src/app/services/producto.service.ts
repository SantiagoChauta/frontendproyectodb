import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoCarrito } from 'src/app/interfaces/tablas.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:String = "http://localhost:8080";

  getProductosCategoria(id_region:number,id_pais:number,id_categoria:number):Observable<Producto[]>{

    const params ={
      id_pais,
      id_region,
      id_categoria
    }
    return this.http.get<Producto[]>(`${this.urlEndPoint}/catalogo/productos`,{params});
  }

  getProductosCarrito(){

    return this.http.get<ProductoCarrito[]>(`${this.urlEndPoint}/carrito/listar`);

  }

}
