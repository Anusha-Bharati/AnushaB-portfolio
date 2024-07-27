import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
  ]
})
export class HomeModule { }