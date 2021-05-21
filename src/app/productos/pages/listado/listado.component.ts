import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interface/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit{

  constructor(private productosServicio: ProductoService) { }

  lista: Productos[] = [];


   
   ngOnInit(): void{
    this.productosServicio.getProductos()
    .subscribe( productos => this.lista = productos)
   }


 

}
