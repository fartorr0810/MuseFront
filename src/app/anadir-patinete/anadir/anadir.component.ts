import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AnadirpatineteService } from '../services/anadirpatinete.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styles: [
  ]
})
/**
 * Clase Anadir componente
 */
export class AnadirComponent implements OnInit {
  /**
   * Inicialicamos formulario.
   */
  formulario = new FormGroup({
    modelo: new FormControl('',[Validators.required]),
    precioHora:new FormControl('',[Validators.required]),
    disponible: new FormControl(true,[Validators.required]),
    kmhora:new FormControl('',[Validators.required]),
    file:new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });
  //Inyectamos servicios
  constructor(private serviciofichero:AnadirpatineteService) { }

  ngOnInit(): void {
  }
/**
 * Comprobamos si el campo es valido
 * @param campo campo a comprobar
 * @returns true o false si cumple o no
 */
  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }
/**
 * Recogemos el archivo e introducimos este al formulario
 * @param event
 */
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formulario.patchValue({
        fileSource: file
      });
    }
  }
/**
 * Metodo que recoge los datos del patin, un FormData con el archivo subido y posteriormente
 * llamamos al servicio de subir ficheros pasandole el patin y la imagen,
 * Si es correcto, se anadira.
 */
  submit(){
    const patin={
      modelo:this.formulario.get('modelo')?.value,
      precioHora:this.formulario.get('precioHora')?.value,
      disponible:this.formulario.get('disponible')?.value,
      kmhora:this.formulario.get('kmhora')?.value,

    }
    const formData = new FormData();
    formData.append('file', this.formulario.get('fileSource')!.value);
    this.serviciofichero.subirFichero(formData, patin).subscribe(resp=>{
      Swal.fire({
        title: 'Patinete añadido con éxito',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })

  }

}
