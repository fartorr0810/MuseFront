import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './control-acceso/login/login.component';
import { RegisterComponent } from './control-acceso/register/register.component';
//Rutas con LazyLoading
const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./shared/shared.module').then(m=> m.SharedModule)
  },
   {
     path:'login',
     component:LoginComponent,
     loadChildren:() => import('./control-acceso/control-acceso.module').then(m=> m.ControlAccesoModule)
   },
   {
     path:'register',
     component:RegisterComponent,
     loadChildren:() => import('./control-acceso/control-acceso.module').then(m=> m.ControlAccesoModule)

   },
   {
     path:'home',
     loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
    },
   {
    path:'contacto',
    loadChildren:()=> import('./contacto/contacto.module').then(m=>m.ContactoModule)
   },
   {
    path:'listapatinetes',canActivate:[AuthGuard],
    loadChildren:()=> import('./listar-patinete/listar-patinete.module').then(m=>m.ListarPatineteModule)
   },
   {
    path:'reserva',canActivate:[AuthGuard],
    loadChildren:()=> import('./reserva/reserva.module').then(m=>m.ReservaModule)
   },
   {
    path:'alquiler',canActivate:[AuthGuard],
    loadChildren:()=> import('./listar-alquiler/listar-alquiler.module').then(m=>m.ListarAlquilerModule)
   },
   {
    path:'addpatinete',canActivate:[AuthGuard],
    loadChildren:()=> import('./anadir-patinete/anadir-patinete.module').then(m=>m.AnadirPatineteModule)
   },
   {
     path:'listarcomentario',canActivate:[AuthGuard],
     loadChildren:()=> import('./listar-comentarios/listar-comentarios.module').then(m=>m.ListarComentariosModule)
   },
   {
    path:'alquileradmin',canActivate:[AuthGuard],
    loadChildren:()=> import('./listar-comentarios-admin/listar-comentarios-admin.module').then(m=>m.ListarComentariosAdminModule)
   },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
