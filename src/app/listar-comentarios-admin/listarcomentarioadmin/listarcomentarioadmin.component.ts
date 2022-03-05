import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ListaAlquilerI } from 'src/app/reserva/interfaces/alquiler.interface';
import Swal from 'sweetalert2';
import { ListarAlquilerAdminService } from '../services/listar-alquiler-admin.service';

@Component({
  selector: 'app-listarcomentarioadmin',
  templateUrl: './listarcomentarioadmin.component.html',
  styles: [
  ]
})
//Componente para listar los comentarios.
export class ListarcomentarioadminComponent implements OnInit {
  //Atributos
  listadealquileres:ListaAlquilerI[]=[];
  opcionesDataTables: DataTables.Settings={}
  triggerDatatables:Subject<any> = new Subject<any>();
//Constructor
  constructor(private servicioAlquiler:ListarAlquilerAdminService) { }
/**
 * Obtenemos la lista de todos los alquileres existentes e indicamos los datos de la datatable
 */
  ngOnInit(): void {
    this.obtenerListaAlquileres();
    this.opcionesDataTables={
      pagingType:'full_numbers',
      pageLength:10,
      language:{
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "search": "Buscar:",
      }
    }
  }
  /**
   * Obtenemos todos los alquileres, si es vacio , indicara que nadie ha alquilado nada.
   * Si existen alquileres, asignamos a la data table la respuesta.
   */
  obtenerListaAlquileres(){
    this.servicioAlquiler.obtenerTodosAlquiler().subscribe({
      next:(resp)=> {
        this.listadealquileres=resp;
        if(this.listadealquileres==null){
          Swal.fire({
            title: 'Nadie ha alquilado nada',
            icon: 'info',
            confirmButtonText: 'Ok'
          });
        }
        else{
          this.triggerDatatables.next(resp);
        }
      }
    })
  }
}
