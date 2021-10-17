import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/comercio/usuario';
import { UserService } from 'src/app/service/comercio/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: User[] = [];
  user:User= {} as User;
  use:any;
  
  constructor(
    private userService: UserService, 
    private http:HttpClient, 
    private route:ActivatedRoute
    ) {
      
     }

  ngOnInit(): void {
    
    this.getUsers();

    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.editUser(params.variable)
      
    })
  }
  
  editUser(id: string){
    
    this.userService.oneUser(id)
        .subscribe(
          response=>{
              
            this.users=response;
            

          });
        
   
  }






  getUsers(){
    this.userService.listUser()
    .subscribe(
      (res :User[]) => {
        console.log(res);
        this.users = res ;
      },
      err => console.log(err),
    )
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



}
