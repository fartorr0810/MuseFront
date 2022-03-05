import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListapatineteComponent } from './listapatinete/listapatinete.component';
//Rutas
const routes: Routes = [{
  path:'',
  component:ListapatineteComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarPatineteRoutingModule { }
