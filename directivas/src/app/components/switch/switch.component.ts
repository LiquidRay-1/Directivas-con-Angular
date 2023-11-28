import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  opc: String = ""
  opcionSeleccionada: String = ""
  color:String = ""

  getOpcion(): void {
    this.opcionSeleccionada = this.opc
  }

}
