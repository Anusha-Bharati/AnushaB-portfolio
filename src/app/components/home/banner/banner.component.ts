import { Component, OnInit } from '@angular/core';
import { GoogleAnalytics } from '../../../services/googleAnalytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit{
constructor( 
  public googleAnalytics: GoogleAnalytics
){

}
ngOnInit():void{
  this.googleAnalytics.sendGoogleAnalytics("click_Banner", "NavLink", "Banner");
}
}
