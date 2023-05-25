import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home/home.component";
import { RegistrarClientePageComponent } from "./registrar-cliente/registrar-cliente.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ComprarPageComponent } from "./comprar/comprar.component";


@NgModule({
  declarations:[
    ComprarPageComponent,
    HomePageComponent,
    RegistrarClientePageComponent


  ],
  imports:[
    CommonModule,
    SharedModule
  ],
  exports:[
    ComprarPageComponent,
    HomePageComponent,
    RegistrarClientePageComponent
  ]
})
export class PagesModule{

}
