import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/tablas.interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

 @Component({
  selector:'pages-login',
  templateUrl:'./login.component.html',
  styleUrls: ['../../app.component.css', './login.component.css']
 })
 export class LoginPageComponent{

  constructor( private usuarioService:UsuarioService,private router:Router){}

  @ViewChild('user')
  private user:ElementRef<HTMLInputElement>;

  @ViewChild('password')
  private password:ElementRef<HTMLInputElement>;

  iniciarSesion(){
    const usuario=this.user.nativeElement.value;
    const pass = this.password.nativeElement.value;
    this.usuarioService.conectarse(usuario,pass).subscribe(
      response =>{
        this.router.navigate(['home'])
      },
      error =>{
        alert("Usuario o contraseña invalida")
      }
    )


  }

 }
