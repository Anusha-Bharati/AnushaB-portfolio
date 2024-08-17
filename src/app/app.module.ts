import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from "primeng/card"; 
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { ContactComponent } from './components/home/contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { GoogleAnalytics } from './services/googleAnalytics.service';

@NgModule({
  declarations: [
    AppComponent,
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
    MatIconModule,
    //GtagModule.forRoot({ trackingId: 'G-SFLLQME37G', trackPageviews: true })
    NgxGoogleAnalyticsModule.forRoot('G-SFLLQME37G')
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
