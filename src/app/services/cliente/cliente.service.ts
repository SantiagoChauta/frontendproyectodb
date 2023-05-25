import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/interfaces/tablas.interfaces';
import { HttpClient , HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'



@Injectable()
export class ClienteService {

  private urlEndPoint:String = "http://localhost:8080/cliente"
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/todos`)
  }

  insertarCliente(cliente:Cliente){
    return this.http.post(`${this.urlEndPoint}/insertar`,cliente)
  }
}
