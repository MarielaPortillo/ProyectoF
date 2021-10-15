import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './user/register/register.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
NgxPermissionsModule.forRoot()


@NgModule({
  declarations: [
    RegisterComponent,
    UserlistComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ]
})
export class AuthModule { }
