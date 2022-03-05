import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListacomentariosComponent } from './listacomentarios/listacomentarios.component';
//Rutas
const routes: Routes = [
  {
    path:'',
    component:ListacomentariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarComentariosRoutingModule { }
