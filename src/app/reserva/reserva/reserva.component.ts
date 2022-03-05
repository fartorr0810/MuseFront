import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlAccesoService } from 'src/app/control-acceso/services/control-acceso.service';
import { Patinete } from 'src/app/listar-patinete/interfaces/patinete.interface';
import Swal from 'sweetalert2';
import { AlquilerService } from '../services/alquiler.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: [
  ]
})
/**
 * clase con la reserva
 */
export class ReservaComponent implements OnInit {
  //Atributos
  formularioContacto!:FormGroup;
  listapatinetesDisponibles: Patinete[] = [];
  precio!:number;
  horadevolucion!:string;
  fechaahora = new Date().toJSON().slice(0,18);
//Constructor donde inyectamos lo necesario
  constructor(private router: Router,
    private authservice: ControlAccesoService,
    private fb:FormBuilder,
    private servicioAlquiler: AlquilerService) { }
//NgOnInit  donde se construye el formulario, busca los patinetes disponibles , obtenemos el usuario
//al que pertenece el usuario
  async ngOnInit() {
    this.buildForm();
    this.patinetesDisponibles();
    this.authservice.obtenerUser();
  }
//Metodo en el que indicamos los requisitos de cada campo y se construye el formulario

  buildForm(){
    let numero:number=Number(String(localStorage.getItem('idusuario')));
    this.formularioContacto=this.fb.group({
      patinete:['',[Validators.required,Validators.min(0)]],
      horaentrega:['',[Validators.required]],
      horasalquiler:['',[Validators.required,Validators.min(0)]],
      confirmacion:[false,[Validators.required]],
      user:[localStorage.getItem("idusuario")],
      codigo:['']
    })
  }
/**
 * Comprueba que el campo que se introduce es valido o no y devuelve true o false
 * @param campo campo que se le introduce
 * @returns  devuelve true o false
 */
  campoEsValido(campo:string) {
    return this.formularioContacto.controls[campo].errors
            && this.formularioContacto.controls[campo].touched;
  }
  /**
   * Metodo para calcular el precio y la fecha de un alquiler llamando al servicio alquiler
   * y asigna los resultados a los atributos mencionados anteriormente y se volveran visibles
   * en el html.
   */
  calcularPrecioYFecha(){
    const alquiler=this.formularioContacto.value;
    this.servicioAlquiler.calcularPrecioYFecha(alquiler).subscribe({
      next:(resp)=>{
        this.precio=resp.preciototal;
        this.horadevolucion=resp.horarecogida;
      }
      })

  }
  /**
   * Metodo que carga todos los patinetes disponibles, si no hay patinetes
   * disponibles mostrara un mensaje de error que nos dira que no hay patinetes disponibles.
   */
  patinetesDisponibles(){
    this.servicioAlquiler.obtenerPatinetesDisponibles().subscribe({
      next:(resp)=>{
        this.listapatinetesDisponibles=resp;
      },
      error:()=>{
        Swal.fire({
          title: 'Lo sentimos',
          text: 'No hay patinetes disponibles',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }
  /**
   *Metodo alquilar , recoge los datos del formulario los pasa al servicio , nos suscribimos
   a la peticion y nos muestra si se anade correctamente el alquiler una alerta con que
   nuestro patinete se alquilado correctamente. Si hay algun problema , nos mostrara un mensaje de error
   */
  alquilar(){
    const alquiler=this.formularioContacto.value;
    this.servicioAlquiler.alquilarPatinete(alquiler).subscribe({
    next:(resp=>{
      Swal.fire({
        title: 'Gracias',
        text: 'Patinete alquilado con exito',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }),
    error:resp=>{
      Swal.fire({
        title: 'Lo sentimos',
        text: 'Este patinete ya ha sido alquilado',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  })
  }
}
