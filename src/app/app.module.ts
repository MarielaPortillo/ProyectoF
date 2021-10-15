import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CineAppComponent } from './models/cine-app/cine-app.component';
import { ComercioComponent } from './models/comercio/comercio.component';
import { RedSocialComponent } from './models/red-social/red-social.component';

@NgModule({
  declarations: [
    AppComponent,
    CineAppComponent,
    ComercioComponent,
    RedSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
