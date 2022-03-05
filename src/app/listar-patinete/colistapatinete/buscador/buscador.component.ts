import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  //output con el campo de busqueda
  @Output() busqueda = new EventEmitter<string>();
  termino:string='';

  constructor() { }

  ngOnInit(): void {
  }
/**
 * Propagamos la busqueda
 */
  buscar() {
    this.busqueda.emit(this.termino);

  }
}
