import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/models/comercio/jwtoken';
import { Rol } from 'src/app/models/comercio/rol';
import { AuthService } from 'src/app/service/comercio/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  rol: Rol[]=[];
  jwtoken: JwtResponse = {
    username: '',
    email:'',
    password: '',
    rol:'',
    token: '',
    expira: ''
  }
  mensage = "Agregar pelicula";


  miFormulario!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { 
    this.miFormulario = new FormGroup({
      'email' : new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required]),
    });
    console.log(this.miFormulario.value);
  }

  ngOnInit(): void {
  }
  signIn() {
    this.authService.signInUser(this.miFormulario.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('rol', res.rol);
          localStorage.setItem('expira', res.expira);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      )
  }
  getRol(){
    this.authService.getRol()
    .subscribe(
      (res :Rol[]) => {
        console.log(res);
        this.rol = res ;
      },
      err => console.log(err),
    )
  }
  
}
