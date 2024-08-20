import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GoogleAnalytics } from './services/googleAnalytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  url : string = '../assets/data.json';
  data: any ;
  responsiveMenuVisible =false;

  constructor(private httpClient: HttpClient,
  public googleAnalytics: GoogleAnalytics){
  }
  
  ngOnInit(): void {
    this.googleAnalytics.sendGoogleAnalytics("click", "Button", "Main Page");
    AOS.init();
  }
  ScrollIntoView(elem: string) {
    console.log(elem);
      document.querySelector(elem)?.scrollIntoView({behavior: 'smooth', block: 'start' });
    this.responsiveMenuVisible=false;
  }

  downloadCV(){
    window.open('assets/cv.pdf', '_blank');
  }


}
 