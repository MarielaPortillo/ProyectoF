import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/comercio/rol';
import { users } from 'src/app/models/comercio/usuario';
import { AuthService } from 'src/app/service/comercio/auth.service';
import { UserService } from 'src/app/service/comercio/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: Rol[]= [];
  users: users[]= [];
  user: users = {
    username: '',
    email: '',
    password: '',

  };
  ocultar = false;
  mensage = "Agregar pelicula";
  id: any;

  miFormulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userServices: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();
      
      /*this.id = this.activateRoute.snapshot.params['id'];
      console.log(this.id)
    if (this.id) {
      this.edit = true;
      this.userServices.oneUser(this.id)
      .subscribe(
        (data: users) => {
          this.user = data;
          
        },
        err => console.log(err)
      )
    }
    else{
      this.edit = false
    }*/
    

      

     }

  ngOnInit(): void {
    this.getRol();
    this.miFormulario = this.formBuilder.group({

      username : ([Validators.required,Validators.minLength(4)]),
      email: ([Validators.required]),
      password:  ([Validators.required,Validators.minLength(8)]),
      rol: (''),
    });
    this.users = this.data['users'] || {}


    
  }
  getRol(){
    this.userServices.getRol()
    .subscribe(
      (res :Rol[]) => {
        console.log(res);
        this.roles = res ;
      },
      err => console.log(err),
    )
  }
  usuarioExist() {
    return this.user._id === undefined;
  }
  submitUsers(){
    console.log(this.miFormulario.value);
    this.userServices.createUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-users']);
      },
      err => console.log(err)
    )
  }
  updateUsers(){
    this.userServices.editUser(this.user._id, this.user)
    .subscribe(() => {
      this.dialogRef.close()
    })
  }

}
