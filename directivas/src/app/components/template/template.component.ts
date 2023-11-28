import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  ciudades:String[] = []
  ciudad:string = ""

  agregarCiudad() :void{
    this.ciudades.push(this.ciudad)
  }

}
