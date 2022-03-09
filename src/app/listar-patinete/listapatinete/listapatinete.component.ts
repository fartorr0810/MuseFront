import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Patinete } from '../interfaces/patinete.interface';
import { PatineteService } from '../services/patinete.service';

@Component({
  selector: 'app-listapatinete',
  templateUrl: './listapatinete.component.html',
  styles: [
  ]
})
/**
 * Clase de ListarPatinetes
 */
export class ListapatineteComponent implements OnInit {
//Atrivutos necesarios
  listapatinetes: Patinete[] = [];
  allpost:any;
  notEmptyPost = true;
  notscrolly = true;
  numbers: number[] = [];

  //Llamamos a cargar los patinetes
   ngOnInit() {
     this.loadInitPost();
  }
  //Constructor donde inyectamos el servicio de patinetes
  constructor(private servicioPatinete:PatineteService) {
  }
  /**
   * Buscamos el patinete por modelo, recorriendo todos los patinetes y si lo encuentra
   * mostrara un mensaje si esta disponible o no.
   * @param modelo el modelo a buscar
   */
  buscarPatinete(modelo:string){
    let encontrado:boolean=false;
    for (let index = 0; index < this.listapatinetes.length; index++) {
      const element = this.listapatinetes[index];
      if (element.modelo==modelo){
        encontrado=true;
        Swal.fire({
          title: element.modelo,
          text: 'Está disponible',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    }
    if (encontrado==false){
      Swal.fire({
        title: 'Lo sentimos',
        text: 'No está disponible',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
/**
 * Llamamos a obtenerPatinetes que esta en el servicio de Patintetes, si no hay patinetes
 * mostramos un alert con que no hay patinetes no estan disponibles
 */
  loadInitPost() {
    this.servicioPatinete.obtenerPatinetes()
    .subscribe({
      next: (resp => {
        this.listapatinetes=resp;
        for (let index = 0; index < this.listapatinetes.length; index++) {
          let element = this.listapatinetes[index];
          element.imagenregenerada=this.servicioPatinete.obtenerFoto(element);
        }
      }),
      error: (resp => {
        Swal.fire({
          title: 'Error',
          text: 'Los patinetes no estan disponibles',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      })
    })
 }
 }

