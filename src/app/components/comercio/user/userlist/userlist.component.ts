import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { users } from 'src/app/models/comercio/usuario';
import { UserService } from 'src/app/service/comercio/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterComponent } from '../register/register.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {

  users: users[] = [];
  user:users= {} as users;
  use:any;
  displayedColumns: string[] = ['_id', 'username', 'email', 'acciones'];
  columns: string[] = ['username', 'email'];
  columnas: string[] = ['username','email', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<users>;
  
  constructor(
    private userService: UserService, 
    private http:HttpClient, 
    private route:ActivatedRoute,
    private dialog: MatDialog,
    ) {
      
     }

  ngOnInit(): void {
    
    this.getUsers();
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;

    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.editUser(params._id)
      
    })
  }
  
  openDialog(user?: users) {
    this.dialog.open(RegisterComponent, { data: { user } })
  }
  editUser(id: string | undefined ){
    
    this.userService.oneUser(id)
        .subscribe(
          response=>{
            console.log(response)
            this.user=response;
          });
        
   
  }
  eliminarUsuario(id: string) {
    if (confirm("estas seguro de eliminar este usuario?")) {
      this.userService.deleteUser(id)
      .subscribe(
        res => {
          this.getUsers();
        },)
    }
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
