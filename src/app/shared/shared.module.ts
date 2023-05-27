import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { ModalWindowComponent } from './components/modal-window/modal-window/modal-window.component';


@NgModule({
  declarations:[
    NavBarComponent,
    ModalWindowComponent,

  ],

  imports:[

    CommonModule

  ],
  exports:[
    NavBarComponent,
    ModalWindowComponent
  ]
})
export class SharedModule{

}
