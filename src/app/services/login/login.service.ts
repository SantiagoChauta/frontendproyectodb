import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}

  private urlEndPoint:string="http://localhost:8080/login";
  private answer:boolean;

  connect(usuario:string,pass:string):boolean{
    const parametros = {
      user:usuario,
      password:pass
    }

    this.http.get<boolean>(this.urlEndPoint,{params:parametros}).subscribe(
      response => this.answer=response
    );
    return this.answer;
  }





}
