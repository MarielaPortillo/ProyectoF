import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/comercio/rol';
import { users } from 'src/app/models/comercio/usuario';
import { UserService } from 'src/app/service/comercio/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  roles: Rol[]= [];
  users: users[]= [];
  user: users = {
    username: '',
    email: '',
    password: '',

  };
  edit: boolean = false;
  mensage = "Agregar pelicula";
  id: any;

  miFormulario!: FormGroup;

  constructor(
    private userServices: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();
      this.id = this.activateRoute.snapshot.params['id'];
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
    }
    

      this.miFormulario = new FormGroup({

        'username' : new FormControl('',[Validators.required,Validators.minLength(4)]),
        'email': new FormControl('',[Validators.required]),
        'password':  new FormControl('',[Validators.required,Validators.minLength(8)]),
        'rol': new FormControl(''),
      });
      console.log(this.miFormulario.value);

     }

  ngOnInit(): void {
    this.getRol();


    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.edit = true;
      this.userServices.oneUser(param.id)
      .subscribe(
        (res) => {
          console.log(res);
          this.user = res;
        },
        err => console.log(err)
      )
    }
    else{
      this.edit = false
    }
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
  submitUsers(){
    this.userServices.createUser(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-users']);
      },
      err => console.log(err)
    )
  }
  updateUsers(){
    this.userServices.editUser(this.user._id, this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-users'])
      },
      err => console.log(err)
    )
  }

}
