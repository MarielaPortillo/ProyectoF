import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component'; 
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { RegisterComponent } from './user/register/register.component';
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [

    //{path:'register',component:RegisterComponent},
    {path:'signin',component:AuthComponent},
    {path:'signup',component:RegisterComponent},
    {path:'userList',component:UserlistComponent},
    {path:'editUser',component:EditUserComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
