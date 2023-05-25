import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { RegistrarClientePageComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { ComprarPageComponent } from './pages/comprar/comprar.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'registrar-cliente',
    component: RegistrarClientePageComponent
  },
  {
    path:'comprar',
    component:ComprarPageComponent
  },
  {
    path: '**',
    redirectTo: ''
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
