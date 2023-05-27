import { Injectable } from '@angular/core';
import { Representante } from '../interfaces/tablas.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  private urlEndPoint:string ="http://localhost:8080/representante"

  constructor(private http:HttpClient) {}


  insertarRepresentante(representante:Representante):Observable<String>{
    return this.http.post<String>(`${this.urlEndPoint}/insertar`,representante)
  }

}
