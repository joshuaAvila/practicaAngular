import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import  Swal  from "sweetalert2";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    /* .ventana-login{
      background: rgb(213,176,172);
background: radial-gradient(circle, rgba(213,176,172,1) 100%, rgba(255,255,255,0.008264462809917328) 100%);
    } */
    
    `
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private fb: FormBuilder,
    private router: Router,
    private authServicio: AuthService) { }


  login(){
 
    console.log(this.miFormulario.value);

    const {email, password} = this.miFormulario.value;
    this.authServicio.login(email,password)
      .subscribe(ok =>{
        console.log(ok);
        if(ok === true){
          this.router.navigateByUrl('/dashboard');
        }else{
          //TODO
          Swal.fire('Error', ok, 'error')
        }
      });

    //this.router.navigateByUrl('/dashboard');
    
    
  }

}
