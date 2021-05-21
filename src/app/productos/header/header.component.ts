import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    button{
      margin-right: 15px;
      border: none
    }
    `
  ]
})
export class HeaderComponent{


  @Input() sesion : boolean = false;
  

  constructor(private router: Router,
    private authServicio: AuthService) { }


  getLogin(){
  this.sesion = true;
  }

   logout(){
    this.router.navigateByUrl('');
    this.authServicio.logout();
  }
}
