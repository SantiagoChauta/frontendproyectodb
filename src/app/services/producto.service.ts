import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido, Producto, ProductoCarrito } from 'src/app/interfaces/tablas.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  agregarProducto(producto:Producto):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.urlEndPoint}/carrito/estado`,producto);
  }

  pagar(value:number):Observable<Boolean>{

    const params = {
      calificacion:value
    }

    return this.http.post<Boolean>(`${this.urlEndPoint}/carrito/pagar?calificacion=${value}`, {params});
  }

  eliminar(value:number){
    console.log("envia datos pa eliminar")
    console.log(value)
    const params = {
      producto:value
    }

    return this.http.delete(`http://localhost:8080/carrito/eliminar?producto=${value}`, {params});
  }

}
