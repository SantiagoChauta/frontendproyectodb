
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls:['../../app.component.css']
})
export class HomePageComponent{
  constructor(private router:Router){}

  navegar(ruta:string){
    this.router.navigate([ruta]);
  }


}
