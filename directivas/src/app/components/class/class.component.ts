import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  
  cadenaClases : any [] = []
  
  formaCirculo(): void{
    this.cadenaClases = [  ]
    this.cadenaClases.push('circulo')
  }

  formaCuadrado(): void{
    this.cadenaClases = []
    this.cadenaClases.push('cuadrado')
  }

  formaElipse(): void{
    this.cadenaClases
    this.cadenaClases.push("elipse")
  }
}
