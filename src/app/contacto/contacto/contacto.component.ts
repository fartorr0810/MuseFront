import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ComentarioI } from '../interfaces/comentario.interface';
import { ContactoserviceService } from '../services/contactoservice.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent implements OnInit {
//Declaracion formulario
  formularioContacto!:FormGroup;
  //Constructor donde inyectamos el formbuilder y el servicio de contacto
  constructor(
    private fb:FormBuilder,
    private servicioContacto: ContactoserviceService) { }
//Construimos el formulario
  ngOnInit(): void {
    this.buildForm();
  }
//Metodo en el que indicamos los requisitos de cada campo y se construye el formulario
  buildForm(){
    let numero:number=Number(String(localStorage.getItem('idusuario')));
    this.formularioContacto=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      telefono:['',[Validators.minLength(9)]],
      contenidocomentario:['',[Validators.required,Validators.minLength(20)]],
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
 * Metodo enviar , en el que sacamos el comentario con la interfaz los valores del formulario
 * si tiene valores y son validos llama al servicio al metodo de enviar comentario pasandole el comentario
 * Si es correcto, nos enseñara una alerta al usuario con que todo es correcto y si ha habido algun
 * problema, nos dira que hemos tenido un error
 */
  enviar(){
     let comentario:ComentarioI=this.formularioContacto.value;
    if (this.formularioContacto.value){
      this.servicioContacto.enviarComentario(comentario).subscribe({
        next:(resp=>{
          Swal.fire({
            title: 'Gracias',
            text: 'Comentario enviado con éxito',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        }),
        error:resp=>{
          Swal.fire({
            title: resp.error.message,
            text: 'Incorrecto',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
    }
  }
}
