import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinete } from 'src/app/listar-patinete/interfaces/patinete.interface';
import { environment } from 'src/environments/environment.prod';
import { AlquilerI, CalcularAlquiler, ListaAlquilerI } from '../interfaces/alquiler.interface';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  //Constructor
  constructor(private http:HttpClient) { }

/**
 * Metodo para anadir un alquiler pasandole el token y pasandole las cosas necesarias
 * @param alquiler con los datos
 */
  alquilarPatinete(alquiler:AlquilerI){
    let direccionurl=environment.baseURL+"alquiler";
    let bodypeticion:AlquilerI={
      horaentrega:alquiler.horaentrega,
      horasalquiler:alquiler.horasalquiler,
      patinete:alquiler.patinete,
      user:alquiler.user,
      codigo:alquiler.codigo
    }
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<AlquilerI>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
  /**
   * Metodo que llama a la api para que compruebe el codigo de promocion el precio y la fecha.
   * @param alquiler con los datos del alquiler
   */
  calcularPrecioYFecha(alquiler:any){
    let direccionurl="http://localhost:9000/calcular-alquiler";
    let bodypeticion:AlquilerI={
      horaentrega:alquiler.horaentrega,
      horasalquiler:alquiler.horasalquiler,
      patinete:alquiler.patinete,
      user:alquiler.user,
      codigo:alquiler.codigo
    }
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<CalcularAlquiler>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
  /**
   * Metodo en el que le decimos al back que hemos entregado el patinete.
   * @param idalquiler indicamos la id del alquiler al que pertenece el patiente
   */
  entregarPatinete(idalquiler:number){
    let direccionurl="http://localhost:9000/alquiler/"+idalquiler;
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.put(direccionurl,{ headers: httpHeaders});

  }
  /**
   * Obtenemos todos los patinetes disponibles a traves de la API
   * @returns devolvemos la lista con todos los patinetes disponibles.
   */
  obtenerPatinetesDisponibles():Observable<Patinete[]>{
    let direccionurl="http://localhost:9000/patinete?filtro=disponible";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Patinete[]>(direccionurl,{ headers: httpHeaders});
  }
/**
 * Obtenemos la lista con todos los alquileres del usuario conectado a traves de la API
 * @returns devolvemos la lista con todos los alquileres de ese usuario
 */
  getListaAlquilerUsuario(){
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let idusuario=localStorage.getItem('idusuario')!;
    const httpParams=new HttpParams().set('id',idusuario);
    let direccionurl="http://localhost:9000/alquiler/"+idusuario;
    return this.http.get<ListaAlquilerI[]>(direccionurl,{headers:httpHeaders,params:httpParams});
  }
}
