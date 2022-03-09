import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AlquilerI, ListaAlquilerI } from 'src/app/reserva/interfaces/alquiler.interface';
import { AlquilerService } from 'src/app/reserva/services/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listaalquiler',
  templateUrl: './listaalquiler.component.html',
  styles: [
  ]
})
/**
 * Clase para ListarAlquileres
 */
export class ListaalquilerComponent implements OnInit {
  //Atributos necesarios
  listadealquileres:ListaAlquilerI[]=[];
  opcionesDataTables: DataTables.Settings={}
  triggerDatatables:Subject<any> = new Subject<any>();
  isEmpty:boolean = true;
  //Constructor donde inyectamos lo que necesitamos, en este caso el servicio de alquiler
  constructor(private router:Router,private servicioAlquiler:AlquilerService) { }
  /**
  * ngOnInit donde llamamos al metodo donde obtenemos la lista de todos los patinetes disponibles
  * para que el usuario no alquile uno que no esta disponible,
  * Tambien indicamos las opciones del DataTable
  */
  ngOnInit(): void {
    this.obtenerListaAlquileres();
    this.opcionesDataTables={
      pagingType:'full_numbers',
      pageLength:10,
      language:{
        url:"http://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"
      }
    }
  }
/**
 * Metodo donde obtenemos la lista de alquileres, subscribiendonos a la peticion
 * que hacemos en el servicio de alquiler, igualamos la respuesta, comprobamos
 * que la lista este vacia o no para mostrar un mensaje de alerta o no. y si no le pasamos
 * la respuesta al disparador declarado anteriormente.
 */
  obtenerListaAlquileres(){
    this.servicioAlquiler.getListaAlquilerUsuario().subscribe({
      next:(resp)=> {
        this.listadealquileres=resp;
        if(this.listadealquileres==null){
          Swal.fire({
            title: 'No tiene alquileres realizados',
            icon: 'info',
            confirmButtonText: 'Ok'
          });
        }
        else{
          this.triggerDatatables.next(null);
        }
      }
    })
  }
  entregarPatinetes(idalquiler:number){
    this.servicioAlquiler.entregarPatinete(idalquiler).subscribe({
      next:(resp)=> {
        Swal.fire({
          title: 'El patinete ha sido entregado',
          icon: 'info',
          confirmButtonText: 'Ok'
        });
      this.router.navigateByUrl("/home");
      }
    })
  }


}
