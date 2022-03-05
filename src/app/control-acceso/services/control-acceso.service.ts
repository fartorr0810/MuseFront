import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio donde controlamos el servicio
 */
export class ControlAccesoService {
  //Indicamos la ruta base.
//Inyectamos en el constructor el HttpClient
  constructor(private http:HttpClient) { }

/**
 * Metodo en el que enviamos al back nuestro email y password, creamos la cabecera
 * y le anadimos el Acces-Control-Allow-Origin
 * @param email del usuario
 * @param password del usuario
 * @returns Realiza la peticion y nos construira el token si nos logeamos, y si no
 * nos devolvera el back el error correspondiente.
 */
  login(email:string,password:string){
    let direccionurl=environment.baseURL+"auth/login";

    let bodypeticion={
      'email':email,
      'password':password
    }
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
/**
 * Metodo para comprobar el token realizando una peticion sencilla.
 * @returns devuelve el token
 */
  comprobarToken():Observable <AuthResponse>{
    let direccionurl=environment.baseURL+"user";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<AuthResponse>(direccionurl,{headers :httpHeaders});
  }
  /**
   * Metodo para registrar un usuario. Recibe los parametros necesarios, construye la cabecera
   * con los CORS y realizamos la peticion post pasandole el body de la peticion
   * @param email del usuario
   * @param password del usuario
   * @param username del usuario
   * @param name del usuario
   * @returns Nos devuelve el usuario registrado si no hay problema , si lo hay, mostrara el error
   * correspondiente.
   */
  register(email:string,password:string,username:string,name:string){
    let direccionurl=environment.baseURL+"auth/register";
    let bodypeticion={
      'email':email,
      'password':password,
      'nombre':name,
      'nickname':username
      }
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
  comprobarEmail(email:string):any{
    let direccionurl=environment.baseURL+"comprobar-email";
    let bodypeticion={
      'email':email
    }
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('Access-Control-Allow-Origin','*');
    this.http.post(direccionurl,bodypeticion,{ headers: httpHeaders}).subscribe({
      next:(resp=>{
        return true;
      }),
      error:resp=>{
        return false;
      }
    });
  }


  /**
   * Metodo para obtener el usuario y lo introduce en el localStorage la id.
   */
  obtenerUser(){
    let direccionurl=environment.baseURL+"user";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    this.http.get(direccionurl,{headers :httpHeaders}).subscribe(resp=>{
      let numero:string=String(resp);
      localStorage.setItem('idusuario',numero);
    })
  }
  obtenerRol(){
    let id:string=localStorage.getItem("idusuario")!;
    console.log(id);
    let direccionurl=environment.baseURL+"user/"+id;
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    this.http.get(direccionurl,{headers :httpHeaders}).subscribe(resp=>{

    })
  }

}
