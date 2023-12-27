import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './app/public/public.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbareComponent } from './layouts/navbare/navbare.component';
import { PreloaderComponent } from './layouts/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    FooterComponent,
    HeaderComponent,
    NavbareComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
