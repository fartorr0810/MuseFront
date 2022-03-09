import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ControlAccesoService } from './control-acceso/services/control-acceso.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
//Constructor donde inyectamos el servicio de control de acceso y el router
  constructor(private serviciocontrol:ControlAccesoService, private router:Router){}
//Protegemos las rutas llamando al metodo de comprobar tokenn, si no hay token o no es valido
//o a cumplido, nos llevara a la pantalla de login
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {
    return this.serviciocontrol.comprobarToken()
    .pipe(
        map( resp => {
          return true;
        }),
        catchError( err => {
            Swal.fire({
              title: 'Por favor',
              text: 'Inicia sesión',
              icon: 'error',
              confirmButtonText: 'Ok'
            })

            this.router.navigateByUrl('/login');
            return of(false)
        })
      )
  }

}
