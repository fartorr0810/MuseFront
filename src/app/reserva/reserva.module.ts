import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva/reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importamos lo necesario.
@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservaRoutingModule
  ],
  exports: [
    ReservaComponent
  ]
})
export class ReservaModule { }
