import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/tablas.interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

 @Component({
  selector:'pages-login',
  templateUrl:'./login.component.html',
  styleUrls: ['../../app.component.css', './login.component.css']
 })
 export class LoginPageComponent implements OnInit{

  constructor( private usuarioService:UsuarioService,private router:Router){}

  private usuario:Usuario[];

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      usuario => {
        this.usuario = usuario
      }
    )
  }

  @ViewChild('user')
  private user:ElementRef<HTMLInputElement>;

  @ViewChild('password')
  private password:ElementRef<HTMLInputElement>;

  iniciarSesion(){
    const us = this.user.nativeElement.value;
    const pass = this.password.nativeElement.value;
    this.usuario.forEach(element => {
      if(us == element.usuario){
        this.usuarioService.conectarse(us,pass).subscribe(
          response =>{
            this.router.navigate(['home'])
            console.log("la respuesta es"+response)
          },
          error =>{
            alert("Usuario o Contraseña incorrecta")
          }
        )

      }
    });
  }

 }
