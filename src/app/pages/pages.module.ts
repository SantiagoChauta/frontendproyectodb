import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home/home.component";
import { RegistrarClientePageComponent } from "./registrar-cliente/registrar-cliente.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ComprarPageComponent } from "./comprar/comprar.component";
import { LoginPageComponent } from "./login/login.component";
import { ShoppingCartPageComponent } from './shopping-cart/shopping-cart/shopping-cart.component';


@NgModule({
  declarations:[
    ComprarPageComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrarClientePageComponent,
    ShoppingCartPageComponent
  ],
  imports:[
    CommonModule,
    SharedModule
  ],
  exports:[
    ComprarPageComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrarClientePageComponent,
    ShoppingCartPageComponent
  ]
})
export class PagesModule{

}
