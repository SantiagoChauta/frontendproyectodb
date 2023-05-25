import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Categoria } from 'src/app/interfaces/tablas.interfaces';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:String = "http://localhost:8080/catalogo";

  getCategorias():Observable<Categoria[]>{

    return this.http.get<Categoria[]>(`${this.urlEndPoint}/supercategorias`);
  }

  getSubCategorias(id:number):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.urlEndPoint}/subcategorias?id=${id}`);
  }
}
