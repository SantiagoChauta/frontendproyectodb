import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home/home.component";
import { RegistrarClientePageComponent } from "./registrar-cliente/registrar-cliente.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ComprarPageComponent } from "./comprar/comprar.component";
import { LoginPageComponent } from "./login/login.component";
import { ShoppingCartPageComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { RegistrarRepresentantePageComponent } from "./registrar-representante/registrar-representante.component";
import { CatalogoComponent } from './comprar/productos/catalogo/catalogo.component';
import { ProductCardComponent } from './comprar/productos/product-card/product-card/product-card.component';
import { ProductoCarritoComponent } from "./shopping-cart/producto-carrito/producto-carrito.component";


@NgModule({
  declarations:[
    CatalogoComponent,
    ComprarPageComponent,
    HomePageComponent,
    LoginPageComponent,
    ProductCardComponent,
    RegistrarClientePageComponent,
    RegistrarRepresentantePageComponent,
    ShoppingCartPageComponent,
    CatalogoComponent,
    ProductCardComponent,
    ProductoCarritoComponent
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
    RegistrarRepresentantePageComponent,
    ShoppingCartPageComponent
  ]
})
export class PagesModule{

}
