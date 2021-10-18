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
import { AuthComponent } from './components/comercio/auth/auth.component';
import { DetalleComponent } from './components/publicacion/detalle/detalle.component';
import { AuthGuard } from './confiInit/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokeninterceptorService } from './service/comercio/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ComercioComponent,
    PeliculaComponent,
    BoletoComponent,
    ReservaComponent,
    AuthComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }