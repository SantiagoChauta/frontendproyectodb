import { RepresentanteService } from './../../services/representante.service';
import {Component, ElementRef, ViewChild} from '@angular/core'
import { Representante } from 'src/app/interfaces/tablas.interfaces'

@Component({
  selector:'page-registrar-representante',
  templateUrl:'./registrar-representante.component.html',
  styleUrls:['./registrar-representante.component.css']
})
export class RegistrarRepresentantePageComponent{

  constructor(private representanteService:RepresentanteService){}

  representantes:Representante[];
  representante:Representante;


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

  @ViewChild('genero')
  private tagGenero!:ElementRef<HTMLInputElement>;

  @ViewChild('email')
  private tagEmail!:ElementRef<HTMLInputElement>;

  @ViewChild('fechanacimiento')
  private tagNacimiento!:ElementRef<HTMLInputElement>;

  @ViewChild('fechacontrato')
  private tagContrato!:ElementRef<HTMLInputElement>;

  registrarRepresentante(){

    this.representante ={
      tipoDocumento:this.tagTipoDocumento.nativeElement.value,
      cedula: this.tagNumeroDocumento.nativeElement.value,
      nombre: this.tagNombre.nativeElement.value,
      apellido: this.tagApellido.nativeElement.value,
      direccion: this.tagDireccion.nativeElement.value,
      telefono: this.tagTelefono.nativeElement.value,
      genero: this.tagGenero.nativeElement.value,
      email: this.tagEmail.nativeElement.value,
      f_nacimiento:this.tagNacimiento.nativeElement.value,
      f_contrato:this.tagContrato.nativeElement.value
    }

    console.log(this.representante);
    this.representanteService.insertarRepresentante(this.representante).subscribe(
      response=>{
        alert("Representante registrado con exito")
      },
      error=>{
        alert(error.error)
      }
    );
  }
}
