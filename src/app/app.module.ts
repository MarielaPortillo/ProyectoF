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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeninterceptorService } from './service/comercio/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './principal/menu/menu.component';
import { FooterComponent } from './principal/footer/footer.component'
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/comercio/user/userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ComercioComponent,
    PeliculaComponent,
    BoletoComponent,
    ReservaComponent,
    AuthComponent,
    DetalleComponent,
    MenuComponent,
    FooterComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
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