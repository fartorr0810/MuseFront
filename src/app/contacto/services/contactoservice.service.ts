import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ComentarioI } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoserviceService {

  constructor(private http:HttpClient) { }

  enviarComentario(comentario:ComentarioI){
    let direccionurl=environment.baseURL+"comentario";
    let bodypeticion={
      'email':comentario.email,
      'telefono':comentario.telefono,
      'contenidocomentario':comentario.contenidocomentario,
      'usuario':comentario.usuario
    }
    const httpHeaders=new HttpHeaders();
    return this.http.post<ComentarioI>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }


}
