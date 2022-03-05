import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarAlquilerRoutingModule } from './listar-alquiler-routing.module';
import { ListaalquilerComponent } from './listaalquiler/listaalquiler.component';
import { DataTablesModule } from 'angular-datatables';

//Importamos el DataTableModule (Antes debemos anadir esa libreria.)
@NgModule({
  declarations: [
    ListaalquilerComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ListarAlquilerRoutingModule
  ]
})
export class ListarAlquilerModule { }
