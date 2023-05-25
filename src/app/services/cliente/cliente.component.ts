import { Component } from "@angular/core";
import { Cliente } from "../../interfaces/tablas.interfaces";
import { ClienteService } from "./cliente.service";


@Component({
  selector:'app-cliente',
  template:''
})
export class ClienteComponent{

  clientes:Cliente[];

  constructor(private clienteService: ClienteService){}



}
