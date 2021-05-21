import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  button{
  border-radius: 15px;
  }
  `]
})
export class AgregarComponent {
  
  Formulario: FormGroup = this.form.group({
    name:['', [Validators.required]],
    description:['', [Validators.required]],
    precio:['', [Validators.required]]
  });

  constructor(private form: FormBuilder,
    private router: Router,
    private productosServicio: ProductoService) { }




 agregar(){

  const {name,description,precio} = this.Formulario.value;
  this.productosServicio.agregarProductos(name,description,precio)
    .subscribe(ok => {
      console.log(ok);
      if(ok === true){
        this.router.navigateByUrl('/dashboard');
      }else{
        Swal.fire('Error', ok, 'error') 
      }
    });
 }

}
