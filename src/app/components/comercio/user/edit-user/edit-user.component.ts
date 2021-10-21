import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/comercio/rol';
import { users } from 'src/app/models/comercio/usuario';
import { UserService } from 'src/app/service/comercio/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  roles: Rol[]= [];
  user: users = {
    username : '',
    email: '',
    password:'',

  };
  edit: boolean = false;
  mensage = "Agregar usuario";

  id: string | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormGroup
    ) {
      //this.getDetalle();

     }

  ngOnInit(): void {
    this.getRol();
    this.activateRoute.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.user = params
      
    })

  }
  getRol(){
    this.userService.getRol()
    .subscribe(
      (res :Rol[]) => {
        console.log(res);
        this.roles = res ;
      },
      err => console.log(err),
    )
  }
  updateUser(){
  
    this.userService.editUser(this.user._id, this.user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}