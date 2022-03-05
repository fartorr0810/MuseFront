import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ComentarioI } from 'src/app/contacto/interfaces/comentario.interface';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-listacomentarios',
  templateUrl: './listacomentarios.component.html',
  styleUrls: []
})
/**
 * Clase con la lista de comentarios
 */
export class ListacomentariosComponent implements OnInit {
  //Atributos necesarios
  comentarios:ComentarioI[]=[];
  opcionesDataTables: DataTables.Settings={}
  triggerDatatables:Subject<any> = new Subject<any>();
//Inyectamos del servicio de comentarios
  constructor(private servicioComentario:ComentarioService) { }
/**
 * Cargamos los comentarios e indicamos los datos de DataTable
 */
  ngOnInit(): void {
    this.obtenerComentarios();
    this.opcionesDataTables={
      pagingType:'full_numbers',
      pageLength:10
    }
  }
  /**
   * Metodo donde llamamos al metodo del servicio para obtener los patinetes y nos subscribimos a ella
   * 
   */
  obtenerComentarios(){
    this.servicioComentario.obtenerComentarios().subscribe(({
      next:(resp)=> {
        this.comentarios=resp;
        this.triggerDatatables.next(resp);
      }
    }))
    }

}
