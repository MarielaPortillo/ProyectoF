import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './confiInit/auth.guard';
import { AddpeliculaComponent } from './components/cineApp/addpelicula/addpelicula.component';
import { BoletoComponent } from './components/cineApp/boleto/boleto.component';
import { PeliculaComponent } from './components/cineApp/pelicula/pelicula.component';
import { ReservaComponent } from './components/cineApp/reserva/reserva.component';
import { AuthComponent } from './components/comercio/auth/auth.component';
import { DashboardComponent } from './principal/dashboard/dashboard.component';
import { RolesGuard } from './confiInit/roles.guard';
import { UserlistComponent } from './components/comercio/user/userlist/userlist.component';
import { ComercioListComponent } from './components/comercio/comercio/comercio-list/comercio-list.component';
import { EditUserComponent } from './components/comercio/user/edit-user/edit-user.component';
import { RegisterComponent } from './components/comercio/user/register/register.component';
import { AddUserComponent } from './components/comercio/user/add-user/add-user.component';
import { UserService } from './service/comercio/user.service';
import { UserEditComponent } from './components/comercio/user/user-edit/user-edit.component';
import { EditmoviesComponent } from './components/cineApp/editmovies/editmovies.component';
import { ComercioAddComponent } from './components/comercio/comercio/comercio-add/comercio-add.component';
import { ComercioEditComponent } from './components/comercio/comercio/comercio-edit/comercio-edit.component';
import { OneComercioComponent } from './components/comercio/comercio/one-comercio/one-comercio.component';
import { ListPublicacionComponent } from './components/publicacion/list-publicacion/list-publicacion.component';
import { AddPublicacionComponent } from './components/publicacion/add-publicacion/add-publicacion.component';
import { RedsocialComponent } from './components/publicacion/redsocial/redsocial.component';

/**
 * ---------------------------OJO-----------------------------------------------
 * Para poder verificar si es rol administrador y verificar el token utilice la
 * siguiente sentencia:
 * canActivate:[AuthGuard, RolesGuard]
 */
const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: AuthComponent},
  //{ path: 'publicacion', component: AuthComponent},
  {path:"list-users",component:UserlistComponent, canActivate:[AuthGuard]},
  {path:"signup", component: RegisterComponent, canActivate:[AuthGuard]},
  {path:"createUser", component: AddUserComponent},
  {path:"list-comercios",component:ComercioListComponent, canActivate:[AuthGuard]},
  {path:"edit-user/:id", component: UserEditComponent, canActivate:[AuthGuard]},
  {path:"addComercio/:id", component: ComercioEditComponent, canActivate:[AuthGuard]},

  {path:"add-pelicula",component:AddpeliculaComponent, canActivate:[AuthGuard]},
  {path:"all-peliculas",component:PeliculaComponent, canActivate:[AuthGuard,]},
  {path:"viewComercio/:id",component:OneComercioComponent, canActivate:[AuthGuard,]},
  {path:"app-editmovies/:id", component: EditmoviesComponent, canActivate:[AuthGuard]},
  {path:'publicacion', component: ListPublicacionComponent, canActivate:[AuthGuard]},
  {path:"add-comercio", component:ComercioAddComponent, canActivate:[AuthGuard]},
  {path:"viewPublicacion/:id", component:RedsocialComponent, },
  {path:"add-publicacion", component:AddPublicacionComponent,},
  {path:"add-boleto",component:BoletoComponent},
  {path:"add-reserva",component:ReservaComponent},
  {path:"search/reserva/:id",component:ReservaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
