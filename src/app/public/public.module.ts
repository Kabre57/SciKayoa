import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AmenagementComponent } from './pages/amenagement/amenagement.component';
import { ServicesComponent } from './pages/services/services.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AmenagementComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
