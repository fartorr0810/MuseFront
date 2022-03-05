import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComentariosRoutingModule } from './listar-comentarios-routing.module';
import { ListacomentariosComponent } from './listacomentarios/listacomentarios.component';
import { ComentarioService } from './services/comentario.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ListacomentariosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    ListarComentariosRoutingModule
  ],exports:[
    ListacomentariosComponent
  ],
  providers:[
    ComentarioService
  ]
})
export class ListarComentariosModule { }
