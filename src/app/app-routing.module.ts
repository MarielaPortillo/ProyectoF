import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpeliculaComponent } from './components/cineApp/addpelicula/addpelicula.component';
import { BoletoComponent } from './components/cineApp/boleto/boleto.component';
import { PeliculaComponent } from './components/cineApp/pelicula/pelicula.component';
import { ReservaComponent } from './components/cineApp/reserva/reserva.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./components/comercio/auth.module').then(m => m.AuthModule) },
  {path:"add-pelicula",component:AddpeliculaComponent},
  {path:"all-peliculas",component:PeliculaComponent},
  {path:"editpelicula/:id", component: AddpeliculaComponent},

  {path:"add-boleto",component:BoletoComponent},
  {path:"add-reserva",component:ReservaComponent},
  {path:"search/reserva/:id",component:ReservaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
