import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  url : string = '../assets/data.json';
  data: any ;
  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe(res => {
      this.data = res;
      console.log(this.data[0])
    });
    
      AOS.init();
  }
}
 