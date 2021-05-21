import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Productos } from '../../interface/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
      button{
      margin-right: 15px;
      border: none
    }
  `]
})
export class HomeComponent {
  


 get usuario(){

   return this.authServicio.usuario;
 }



constructor(private router: Router,
  private authServicio: AuthService,
  private productosServicio: ProductoService){}

  logout(){
   
    this.router.navigateByUrl('');
    this.authServicio.logout();
  }

  agregar(){
    this.router.navigateByUrl('/agregar');
  }


  
}
