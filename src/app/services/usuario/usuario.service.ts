import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/tablas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:String = "http://localhost:8080/usuario";

  getUsuarios():Observable<Usuario[]>{

    return this.http.get<Usuario[]>(`${this.urlEndPoint}/todos`);
  }
}
