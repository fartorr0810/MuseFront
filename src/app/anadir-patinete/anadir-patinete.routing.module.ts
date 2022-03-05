import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirComponent } from './anadir/anadir.component';
//Rutas
const routes: Routes = [
  {
    path:'',
    component:AnadirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnadirPatineteRoutingModule { }
