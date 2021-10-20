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
  {path:"createUser", component: RegisterComponent},
  {path:"list-comercios",component:ComercioListComponent, canActivate:[AuthGuard]},
  {path:"app-edituser/:id", component: EditUserComponent, canActivate:[AuthGuard]},
  {path:"add-pelicula",component:AddpeliculaComponent, canActivate:[AuthGuard, RolesGuard]},
  {path:"all-peliculas",component:PeliculaComponent, canActivate:[AuthGuard,]},
  {path:"editpelicula/:id", component: AddpeliculaComponent, canActivate:[AuthGuard]},
  { path: 'publicacion', component: DashboardComponent, canActivate:[AuthGuard]},

  {path:"add-boleto",component:BoletoComponent},
  {path:"add-reserva",component:ReservaComponent},
  {path:"search/reserva/:id",component:ReservaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
