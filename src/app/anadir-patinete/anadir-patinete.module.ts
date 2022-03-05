import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnadirComponent } from './anadir/anadir.component';
import { AnadirPatineteRoutingModule } from './anadir-patinete.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnadirComponent
  ],
  imports: [
    CommonModule,
    AnadirPatineteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AnadirComponent
  ]
})
export class AnadirPatineteModule { }
