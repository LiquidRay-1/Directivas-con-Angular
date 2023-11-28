import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/Usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  usuario: Usuario = new Usuario("", "");

  constructor(private ruta:Router){
    
  }

  enviarFormulario(){
    sessionStorage.setItem('usuario', this.usuario.nombre)
    this.ruta.navigate(['/usuario/dashboard'])
  }

}
