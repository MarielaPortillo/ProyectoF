import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/comercio/rol';
import { User } from 'src/app/models/comercio/usuario';
import { AuthService } from 'src/app/service/comercio/auth.service';
import { UserService } from 'src/app/service/comercio/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rol: Rol[]= [];
  users: User[]= [];
  user: User = {
    username: '',
    email: '',
    password: '',
    rol: '',

  };
  edit: boolean = false;
  mensage = "Agregar pelicula";
  id: string | null | undefined;

  miFormulario!: FormGroup;

  constructor(
    private userServices: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();

    

      this.miFormulario = new FormGroup({

        'username' : new FormControl('',[Validators.required,Validators.minLength(4)]),
        'email': new FormControl('',[Validators.required]),
        'password':  new FormControl('',[Validators.required,Validators.minLength(8)]),
        'rol': new FormControl('',)
      });
      console.log(this.miFormulario.value);

     }

  ngOnInit(): void {
    this.getRol();

    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.userServices.oneUser(param.id)
      .subscribe(
        (res) => {
          console.log(res);
          this.users = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }
  getRol(){
    this.userServices.getRol()
    .subscribe(
      (res :Rol[]) => {
        console.log(res);
        this.rol = res ;
      },
      err => console.log(err),
    )
  }
  submitUsers(){
    this.userServices.createUser(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-user']);
      },
      err => console.log(err)
    )
  }
  updateUsers(){
    this.userServices.editUser(this.user._id, this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-user'])
      },
      err => console.log(err)
    )
  }

}
