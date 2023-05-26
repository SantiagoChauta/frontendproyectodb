import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/interfaces/tablas.interfaces';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Router } from "@angular/router";


@Injectable()
export class ClienteService {

  private urlEndPoint:String = "http://localhost:8080/cliente"
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http:HttpClient,private router:Router) { }

  getClientes(): Observable<Cliente[]>{
    return  this.http.get<Cliente[]>(`${this.urlEndPoint}/todos`)
  }

  insertarCliente(cliente:Cliente){
    this.http.post(`${this.urlEndPoint}/insertar`,cliente).subscribe(
      response =>{
        console.log(response)
      },
      error=>{
        console.log(error)
      }
    );
    this.router.navigate(['home']);
  }
}
