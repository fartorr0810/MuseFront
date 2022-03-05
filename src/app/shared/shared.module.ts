import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PieComponent } from './pie/pie.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    PieComponent,
  ]
})
export class SharedModule { }
