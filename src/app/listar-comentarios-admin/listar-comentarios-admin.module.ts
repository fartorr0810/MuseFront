import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComentariosAdminRoutingModule } from './listar-comentarios-admin-routing.module';
import { ListarcomentarioadminComponent } from './listarcomentarioadmin/listarcomentarioadmin.component';
import { ListarAlquilerAdminService } from './services/listar-alquiler-admin.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ListarcomentarioadminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    ListarComentariosAdminRoutingModule
  ],
  exports: [
    ListarcomentarioadminComponent
  ],
  providers:[
    ListarAlquilerAdminService
  ]
})
export class ListarComentariosAdminModule { }
