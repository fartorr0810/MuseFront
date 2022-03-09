import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ControlAccesoService } from '../services/control-acceso.service';
import { EmailvalidatorService } from '../services/emailvalidator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
/**
 * Clase register
 */
export class RegisterComponent implements OnInit {
  //Formulario
  formulario!:FormGroup;
  patronEmail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  //Constructor donde inyectamos el formbuilder y el authservice
  constructor(private formBuilder: FormBuilder,private authservice: ControlAccesoService,
    private router:Router,
    private validatorService:EmailvalidatorService) { }

  ngOnInit(): void {
    this.buildForm();
  }
//Metodo en el que indicamos los requisitos de cada campo y se construye el formulario
  buildForm(){
    this.formulario=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      username:['',[Validators.required,Validators.minLength(4),Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      email:['',[Validators.required,Validators.email,Validators.pattern( this.patronEmail ) ], [ this.validatorService ]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
/**
 * Comprueba que el campo que se introduce es valido o no y devuelve true o false
 * @param campo campo que se le introduce
 * @returns  devuelve true o false
 */
  campoEsValido(campo:string) {
    return this.formulario.controls[campo].errors
            && this.formulario.controls[campo].touched;
  }
  // comprobarEmail() {
  //   let email=this.formulario?.controls['email'].value;
  //   return this.authservice.comprobarEmail(email);
  // }
  mostrarPassword() {
    var x:any = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  get mensajesErrores() {
    const errors = this.formulario.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'El campo email es obligatorio';
    } else if ( errors['pattern'] ) {
      return 'El dato introducido es incorrecto';
    } else if ( errors['emailenuso'] ) {
      return 'Este email ya fue registrado por otro usuario';
    }
    return '';
  }

  /**
   *Metodo para registrar un usuario, mete en una variable los datos del formulario.
   Comprueba que todos los campos que se introducen son correctos. Luego llama al servicio
   al metodo register con los campos necesarios que se requieren subscribiendonos y una vez todo
   se haya resuelto correctamente, almacenamos en el localstorage el token.
   Si el email introducido es email pero existe en la base de datos, nos devolvera un mensaje
   de error con que ese email esta ya utilizado,
   */
  register(){
    const user=this.formulario.value;
    if (this.formulario.value && !this.formulario.controls['name'].errors &&
    !this.formulario.controls['username'].errors && !this.formulario.controls['email'].errors
    && !this.formulario.controls['password'].errors){
      this.authservice.register(this.formulario.value.email,this.formulario.value.password,
        this.formulario.value.username,this.formulario.value.name).subscribe({
        next:(resp=>{
          localStorage.setItem('token',resp.jwt_token!)
          localStorage.setItem('idusuario',resp.idusuario!)
          localStorage.setItem('rol',resp.rol)
          this.router.navigateByUrl('/home').then(resp=>{
            window.location.reload();
          });
        }),
        error:resp=>{
          console.log(resp);
          Swal.fire({
            title: resp.error.mensaje,
            text: 'Email repetido',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      })
    }
  }
}
