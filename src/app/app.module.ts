import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClienteService } from './services/cliente.service';
import { CategoriaService } from './services/categoria.service';
import { PagesModule } from './pages/pages.module';
import { LoginService } from './services/login.service';
import { ProductoService } from './services/producto.service';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PagesModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
