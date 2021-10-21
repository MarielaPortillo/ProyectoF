import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CineAppComponent } from './models/cine-app/cine-app.component';
import { ComercioListComponent } from './components/comercio/comercio/comercio-list/comercio-list.component'; 
//import { RedSocialComponent } from './models/red-social/red-social.component';
import { PeliculaComponent } from './components/cineApp/pelicula/pelicula.component';
import { BoletoComponent } from './components/cineApp/boleto/boleto.component';
import { ReservaComponent } from './components/cineApp/reserva/reserva.component'; 
import { AuthComponent } from './components/comercio/auth/auth.component';
import { AuthGuard } from './confiInit/auth.guard';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeninterceptorService } from './service/comercio/token-interceptor.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './principal/menu/menu.component';
import { FooterComponent } from './principal/footer/footer.component'
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/comercio/user/userlist/userlist.component';
import { RolesGuard } from './confiInit/roles.guard';
import { RegisterComponent } from './components/comercio/user/register/register.component';
import { EditUserComponent } from './components/comercio/user/edit-user/edit-user.component';
import { AddUserComponent } from './components/comercio/user/add-user/add-user.component';
import { UserEditComponent } from './components/comercio/user/user-edit/user-edit.component';
import { EditmoviesComponent } from './components/cineApp/editmovies/editmovies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddpeliculaComponent } from './components/cineApp/addpelicula/addpelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    ComercioListComponent,
    PeliculaComponent,
    BoletoComponent,
    ReservaComponent,
    AuthComponent,
    MenuComponent,
    FooterComponent,
    UserlistComponent,
    RegisterComponent,
    EditUserComponent,
    AddUserComponent,
    UserEditComponent,
    EditmoviesComponent,
    AddpeliculaComponent,
    EditmoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    },
    RolesGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }