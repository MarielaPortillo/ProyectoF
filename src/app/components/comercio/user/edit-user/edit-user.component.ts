import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/models/comercio/usuario';
import { UserService } from 'src/app/service/comercio/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [FormGroup]
})
export class EditUserComponent implements OnInit {
  
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

    this.activateRoute.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.user = params
      
    })

    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.userService.oneUser(param.id)
      .subscribe(
        res  => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    
  }
  updateUser(){
  
    this.userService.editUser(this.user._id, this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-users'])
      },
      err => console.log(err)
    )
  }

}