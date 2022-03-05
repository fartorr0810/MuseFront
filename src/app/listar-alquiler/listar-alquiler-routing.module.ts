import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaalquilerComponent } from './listaalquiler/listaalquiler.component';
//Rutas
const routes: Routes = [
  {
    path:'',
    component:ListaalquilerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarAlquilerRoutingModule { }
