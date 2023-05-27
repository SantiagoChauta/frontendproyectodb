


import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import { Cliente } from 'src/app/interfaces/tablas.interfaces';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'pages-registrar-cliente',
  templateUrl:'./registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})

export class RegistrarClientePageComponent {

  constructor(private clienteService:ClienteService){}

  private cliente:Cliente;

  @ViewChild('tipoDocumento')
  private tagTipoDocumento!:ElementRef<HTMLInputElement>;

  @ViewChild('numeroDocumento')
  private tagNumeroDocumento!:ElementRef<HTMLInputElement>;

  @ViewChild('nombre')
  private tagNombre!:ElementRef<HTMLInputElement>;

  @ViewChild('apellido')
  private tagApellido!:ElementRef<HTMLInputElement>;

  @ViewChild('direccion')
  private tagDireccion!:ElementRef<HTMLInputElement>;

  @ViewChild('telefono')
  private tagTelefono!:ElementRef<HTMLInputElement>;

  @ViewChild('ciudad')
  private tagCiudad!:ElementRef<HTMLInputElement>;

  @ViewChild('email')
  private tagEmail!:ElementRef<HTMLInputElement>;

  @ViewChild('tipoIdRecomendo')
  private tagTipoIdRecomendo!:ElementRef<HTMLInputElement>;

  @ViewChild('idRecomendo')
  private tagIdRecomendo!:ElementRef<HTMLInputElement>;

  habilitarNumeroDocumento(){

    const tipoIdRecomendo = this.tagTipoIdRecomendo.nativeElement.value;
    const idRecomendo = this.tagIdRecomendo.nativeElement;

    if(tipoIdRecomendo !== "null"){
      idRecomendo.disabled=false;
    }else{
      idRecomendo.disabled=true;
    }
  }

  registrarCliente(){

    this.cliente ={
      tipoDocumento:this.tagTipoDocumento.nativeElement.value,
      cedula: this.tagNumeroDocumento.nativeElement.value,
      nombre: this.tagNombre.nativeElement.value,
      apellido: this.tagApellido.nativeElement.value,
      direccion: this.tagDireccion.nativeElement.value,
      telefono: this.tagTelefono.nativeElement.value,
      ciudad: this.tagCiudad.nativeElement.value,
      email: this.tagEmail.nativeElement.value
    }
    if(this.tagTipoIdRecomendo.nativeElement.value=="null"){
      this.cliente.tipoIdRecomendo = null;
      this.cliente.idRecomendo = null;
    }else{
      this.cliente.tipoIdRecomendo = this.tagTipoIdRecomendo.nativeElement.value;
      if(this.tagIdRecomendo.nativeElement.value == ""){
        this.cliente.idRecomendo = null;
        this.cliente.tipoIdRecomendo = null;
      }else{
        this.cliente.idRecomendo = this.tagIdRecomendo.nativeElement.value;
      }

    }
    console.log(this.cliente)
    this.clienteService.insertarCliente(this.cliente).subscribe(
      response =>{
        alert("Cliente insertado con Exito")
      },
      error=>{
        alert(error.error)
      }
    );

  }


}
