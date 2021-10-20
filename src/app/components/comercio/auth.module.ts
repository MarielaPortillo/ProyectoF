import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './user/register/register.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ComercioListComponent } from './comercio/comercio-list/comercio-list.component';
import { ComercioAddComponent } from './comercio/comercio-add/comercio-add.component';
import { ComercioEditComponent } from './comercio/comercio-edit/comercio-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComercioComponent } from './comercio/one-comercio/one-comercio.component';
import { AddUserComponent } from './user/add-user/add-user.component'
NgxPermissionsModule.forRoot()


@NgModule({
  declarations: [
    RegisterComponent,
    UserlistComponent,
    EditUserComponent,
    ComercioListComponent,
    ComercioAddComponent,
    ComercioEditComponent,
    OneComercioComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ]
})
export class AuthModule { }
