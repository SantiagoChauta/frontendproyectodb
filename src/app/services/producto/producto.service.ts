import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Categoria, Producto } from 'src/app/interfaces/tablas.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:String = "http://localhost:8080/producto";

  getProductosCategoria(id_categoria:number):Observable<Producto[]>{

    return this.http.get<Producto[]>(`${this.urlEndPoint}/productos?id_categoria=${id_categoria}`);
  }

}
