import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MueveteSevilla';
  diaActual:Date=new Date();
  roldelusuario:string=localStorage.getItem('rol')!;

}
