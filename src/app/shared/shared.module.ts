import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ProductosModule } from '../productos/productos.module';



@NgModule({
  declarations: [
    InicioComponent,
  ],
  exports:[
    InicioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    ProductosModule,
  ]
})
export class SharedModule { }
