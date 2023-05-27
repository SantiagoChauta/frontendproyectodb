import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { RegistrarClientePageComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { ComprarPageComponent } from './pages/comprar/comprar.component';
import { LoginPageComponent } from './pages/login/login.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart/shopping-cart/shopping-cart.component';
import { RegistrarRepresentantePageComponent } from './pages/registrar-representante/registrar-representante.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'registrar-cliente',
    component: RegistrarClientePageComponent
  },
  {
    path:'registrar-representante',
    component:RegistrarRepresentantePageComponent
  },
  {
    path:'comprar',
    component:ComprarPageComponent
  },
  {
    path:'shopping-cart',
    component:ShoppingCartPageComponent
  },
  {
    path:'**',
    redirectTo:""
  }
];



@NgModule({

  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
