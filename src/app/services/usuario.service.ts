import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/tablas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http:HttpClient) { }

  private urlEndPoint:String = "http://localhost:8080/usuario";
  private conexion:boolean = false;


  getUsuarios():Observable<Usuario[]>{

    return this.http.get<Usuario[]>(`${this.urlEndPoint}/todos`);
  }

  conectarse(usuario:string,pass:string):Observable<string>{

    const parametros= {
      user:usuario,
      password:pass
    }
    return this.http.get<string>(`${this.urlEndPoint}/conectarse`,{params:parametros});


  }

}
