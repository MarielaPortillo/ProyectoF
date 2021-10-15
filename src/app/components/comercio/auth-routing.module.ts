import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component'; 

const routes: Routes = [

    //{path:'register',component:RegisterComponent},
    {path:'signin',component:AuthComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
