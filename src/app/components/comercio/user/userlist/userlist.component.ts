import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { users } from 'src/app/models/comercio/usuario';
import { UserService } from 'src/app/service/comercio/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {

  users: users[] = [];
  user:users= {} as users;
  use:any;
  
  constructor(
    private userService: UserService, 
    private http:HttpClient, 
    private route:ActivatedRoute,
    ) {
      
     }

  ngOnInit(): void {
    
    this.getUsers();

    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.editUser(params._id)
      
    })
  }
  
  
  editUser(id: string | undefined ){
    
    this.userService.oneUser(id)
        .subscribe(
          response=>{
            console.log(response)
            this.user=response;
          });
        
   
  }

  deletePelicula(id: string){
    

    this.userService.deleteUser(id)
    .subscribe(
      res => {
        this.getUsers();
      },
      err => console.log(err)
    )
  }

  getUsers(){
    this.userService.listUser()
    .subscribe(
      (res :users[]) => {
        console.log(res);
        this.users = res ;
      },
      err => console.log(err),
    )
  }



}
