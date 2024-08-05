import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from "primeng/card"; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { ContactComponent } from './components/home/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    BannerComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet, 
    RouterModule,
    NgbNavModule,
    TimelineModule,
    CardModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
