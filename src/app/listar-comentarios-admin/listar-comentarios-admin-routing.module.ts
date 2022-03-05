import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaalquilerComponent } from '../listar-alquiler/listaalquiler/listaalquiler.component';
import { ListarcomentarioadminComponent } from './listarcomentarioadmin/listarcomentarioadmin.component';

const routes: Routes = [
  {
    path:'',
    component:ListarcomentarioadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarComentariosAdminRoutingModule { }
