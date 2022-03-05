import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
/**
 * HomeComponent 
 */
export class HomeComponent implements OnInit {
  fechahoy!:Date;
  constructor() { }

  ngOnInit(): void {
  }

}
