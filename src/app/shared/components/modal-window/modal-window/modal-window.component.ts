import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-modal-window',
  templateUrl: './modal-window.component.html'
})
export class ModalWindowComponent {

  @Input()
  mensaje:string ="Mensjae";

  @Input()
  encabezado:string="Encab";
}
