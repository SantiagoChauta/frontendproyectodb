import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClienteService } from './services/cliente/cliente.service';
import { CategoriaService } from './services/categoria/categoria.service';
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PagesModule,
    ServicesModule,
    SharedModule
  ],
  providers: [
    CategoriaService,
    ClienteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
