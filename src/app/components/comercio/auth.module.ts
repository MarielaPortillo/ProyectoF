import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './user/register/register.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ComercioListComponent } from './comercio/comercio-list/comercio-list.component';
import { ComercioAddComponent } from './comercio/comercio-add/comercio-add.component';
import { ComercioEditComponent } from './comercio/comercio-edit/comercio-edit.component';
NgxPermissionsModule.forRoot()


@NgModule({
  declarations: [
    RegisterComponent,
    UserlistComponent,
    EditUserComponent,
    ComercioListComponent,
    ComercioAddComponent,
    ComercioEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ]
})
export class AuthModule { }
