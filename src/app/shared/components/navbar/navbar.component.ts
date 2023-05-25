import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector:"shared-navbar",
  templateUrl:"./navbar.component.html",
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent{

  constructor(private router:Router){}

  irHome(){
    this.router.navigate([''])
  }
}
