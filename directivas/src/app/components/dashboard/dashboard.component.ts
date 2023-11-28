import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:string  | null = ""
  constructor(){
    this.user = sessionStorage.getItem('usuario')
  }
}
