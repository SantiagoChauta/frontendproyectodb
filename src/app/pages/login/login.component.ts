import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/tablas.interfaces';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { LoginService } from 'src/app/services/login/login.service';

 @Component({
  selector:'pages-login',
  templateUrl:'./login.component.html',
  styleUrls: ['../../app.component.css', './login.component.css']
 })
 export class LoginPageComponent implements OnInit{

  constructor( private loginService:ClienteService,private router:Router){}

  private clientes:Cliente[];

  ngOnInit(): void {
    this.loginService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes
      }
    )
  }


  @ViewChild('user')
  private user:ElementRef<HTMLInputElement>;

  @ViewChild('password')
  private password:ElementRef<HTMLInputElement>;



  iniciarSesion(){
    const usuario = this.user.nativeElement.value;
    const pass = this.password.nativeElement.value;

    const tipoId = usuario.slice(1,3);
    const numId = usuario.slice(3);

    this.clientes.forEach(element => {
      console.log(element.nombre)
      if (element.tipoDocumento == tipoId && element.cedula==numId &&element.cedula==pass){
        console.log("entro")
        this.router.navigate(['home']);
      }
    });




  }


 }
