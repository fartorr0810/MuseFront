import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioLogin } from '../interfaces/auth-response.interface';
import { ControlAccesoService } from '../services/control-acceso.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
/**
 * Clase Login
 */
export class LoginComponent implements OnInit {
  //Formulario que construimos

  formulario:FormGroup=this.fb.group({
    email:!['',[Validators.required,Validators.email]],
    password:!['',[Validators.required,Validators.minLength(5)]]
  })
//Usuario con los campos necesarios
  usuario: UsuarioLogin={
    email:'',
    password:''
  }
  //Constructor donde inyectamos lo que necesitamos
  constructor(
      private router: Router,
      private authservice: ControlAccesoService,
      private fb:FormBuilder) {
  }

  ngOnInit(): void {
  }

/**
 * Metodo login , en caso de que los formularios tenga valores, se llamara al servicio authservice
 * y llamaremos al metodo login y le pasaremos los campos necesarios, nos suscribiremos
 * y si es correcto , nos guardara en el localstorage el token que nos devolvera y nos llevara
 * al componente home.
 * Si hay algun error , se mostrara al usuario un mensaje de error.
 */
  login(){
    if (this.formulario.value){
      this.authservice.login(this.usuario.email,this.usuario.password).subscribe({
        next:(resp=>{
          localStorage.setItem('token',resp.jwt_token!)
          localStorage.setItem('idusuario',resp.idusuario!)
          localStorage.setItem('rol',resp.rol)
          this.router.navigateByUrl('/home').then(resp=> {
            window.location.reload();
          });
        }),
        error:resp=>{
          Swal.fire({
            title: resp.error.message,
            text: 'Email o Password Incorrecto',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      })
    }
  }

}
