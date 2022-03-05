import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ControlAccesoModule } from '../control-acceso/control-acceso.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactoserviceService } from './services/contactoservice.service';

//Importamos los modules necesarios y proveedores
@NgModule({
  declarations: [
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ControlAccesoModule,ContactoserviceService]
})
export class ContactoModule { }
