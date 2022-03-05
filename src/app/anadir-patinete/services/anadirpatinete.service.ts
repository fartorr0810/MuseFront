import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patinete, PatineteSubida } from 'src/app/listar-patinete/interfaces/patinete.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio anadir patinte
 */
export class AnadirpatineteService {
  //Inyectamos HttpClient
  constructor(private http:HttpClient) { }
/**
 * Metodo donde subimos el archivo, anadimos las cabecera Auth,
 * un Params con lso datos del patinete y en el post pasamos la url,
 * la imagen y los parametros
 * @param archivo FormData con la imagen dentro
 * @param patinete Objeto con los datos del patinete
 * @returns Post al servidor con los parametros
 */
  subirFichero(archivo:FormData,patinete:PatineteSubida){

    let token =localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const params=new HttpParams().set('modelo',patinete.modelo)
    .set('precioHora',patinete.precioHora)
    .set('disponible',patinete.disponible)
    .set('kmhora',patinete.kmhora)
    let url=environment.baseURL+"subida";
    return this.http.post(url,archivo,{params})
  }


}
