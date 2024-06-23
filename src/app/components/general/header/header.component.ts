import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'] 
})
export class HeaderComponent {
  title = 'myPortfolio';
  active = 1;

  constructor(){

  }
  
  downloadCV(){
    window.open('/assets/cv.pdf', '_blank');
  }
}