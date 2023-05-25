import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    NavBarComponent,

  ],

  imports:[

    CommonModule

  ],
  exports:[
    NavBarComponent,
  ]
})
export class SharedModule{

}
