import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarPatineteRoutingModule } from './listar-patinete-routing.module';
import { ListapatineteComponent } from './listapatinete/listapatinete.component';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BuscadorComponent } from './colistapatinete/buscador/buscador.component';
import { FormsModule } from '@angular/forms';

//Importamos los modulos que necesitamos, en este caso HttpClientModule
@NgModule({
  declarations: [
    ListapatineteComponent,
    BuscadorComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ListarPatineteRoutingModule
  ],
  exports: [ListapatineteComponent]
})
export class ListarPatineteModule { }
