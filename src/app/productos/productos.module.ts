import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeaderComponent } from './header/header.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    ListadoComponent,
    HeaderComponent,
    AgregarComponent

  ],
  exports:[
    HomeComponent,
    SidebarComponent,
    ListadoComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
  ]
})
export class ProductosModule { }
