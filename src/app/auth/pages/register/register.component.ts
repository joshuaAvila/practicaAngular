import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

    miFormulario: FormGroup = this.rg.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  constructor(private rg: FormBuilder,
    private router: Router,
    private authServicio: AuthService) { }


  registro(){
    const {name,email, password} = this.miFormulario.value;
    this.authServicio.registro(name,email,password)
      .subscribe(ok =>{
        //console.log(ok);
        if(ok === true){
          this.router.navigateByUrl('/dashboard');
        }else{
          //TODO
          Swal.fire('Error', ok, 'error')
        }
      });
  }

}
