import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CineAppComponent } from './models/cine-app/cine-app.component';
import { ComercioComponent } from './components/comercio/comercio/comercio.component'; 
//import { RedSocialComponent } from './models/red-social/red-social.component';
import { PeliculaComponent } from './components/cineApp/pelicula/pelicula.component';
import { BoletoComponent } from './components/cineApp/boleto/boleto.component';
import { ReservaComponent } from './components/cineApp/reserva/reserva.component'; 
import { UserComponent } from './components/comercio/user/user.component'; 
import { AuthComponent } from './components/comercio/auth/auth.component';
import { DetalleComponent } from './components/publicacion/detalle/detalle.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ComercioComponent,
    PeliculaComponent,
    BoletoComponent,
    ReservaComponent,
    UserComponent,
    AuthComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
