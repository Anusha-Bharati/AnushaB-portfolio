import { Component, OnInit } from '@angular/core';
import { GoogleAnalytics } from '../../../services/googleAnalytics.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
constructor(  public googleAnalytics: GoogleAnalytics){

}
ngOnInit():void{
this.googleAnalytics.sendGoogleAnalytics("click_Contact", "NavLink", "Contact");
}
}
