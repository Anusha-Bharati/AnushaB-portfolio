import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  url : string = '../assets/data.json';
  data: any ;
  responsiveMenuVisible =false;

  constructor(private httpClient: HttpClient,private router: Router){
  }
  
  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe(res => {
      this.data = res;
      console.log(this.data[0])
    });
    
      AOS.init();
  }
  ScrollIntoView(elem: string) {
    console.log(elem);
    if(document.getElementById(elem)) {
      document.getElementById(elem)?.scrollIntoView({behavior: 'smooth'});
    //document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth'});
    }
    this.responsiveMenuVisible=false;
  }

  downloadCV(){
    window.open('/assets/cv.pdf', '_blank');
  }
}
 