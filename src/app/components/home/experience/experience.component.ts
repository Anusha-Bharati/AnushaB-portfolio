import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalytics } from '../../../services/googleAnalytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls:['./experience.component.scss'] 
})
export class ExperienceComponent implements OnInit{

  experience : any[]=[];
  responsiveMenuVisible =false;
  pageYPosition: number;
  data: any ;
  url : string = '../../../../assets/data.json';

  constructor( private router: Router,
    private httpClient: HttpClient,
    private googleAnalytics: GoogleAnalytics
  ){
  }

  ngOnInit(){
    this.googleAnalytics.sendGoogleAnalytics("click_Experience", "NavLink", "Experience");
    this.httpClient.get(this.url).subscribe(res => {
      this.data = res;
      console.log(this.data[0])
    });
    this.experience = [
      {status: 'Software Developer', date: 'Dec 2022- Present', icon: 'AB', image:'eve.jpeg', name:'Eve Networks', link:'https://evenetworks.com/', button:'TypeScript',
        descr: 'Spearheaded development of billing portal, designed to automate and streamline invoices, fixed charges and tariffs processing. Used modern design for UI/UX which enhanced product value and resulted in the 40% product growth in the 1st quarter of 2024. Frontend tech stack: Angular 14, GraphQL, HTML, CSS, and Bootstrap. Backend tech stack: C#, GraphQL, ASP.NET Entity Framework, and SQL. Maintained system stability by providing prompt production support and resolving critical bugs. Utilised Git and Azure DevOps for version control and CI/CD, enabling efficient collaboration and streamlined software delivery processes. Adhered to Agile principles and methodologies, to ensure iterative and incremental project delivery.'}
    ,
    {status: 'Data Analyst', date: 'Nov 2021 - Oct 2022', icon: 'AB', image:'uob.png', name:'University of Bath', link: 'https://www.bath.ac.uk/',
      descr: 'Functioned as data analyst for comprehensive University App, responsible for managing and maintaining over 10 course structures of University of Bath. Key responsibilities encompassed conducting intricate data analyses, executing meticulous quality assurance testing, and ensuring accurate data entry for all courses and academic units offered by University.'}
    ,
    {status: 'Application Development Analyst', date: 'Dec 2020 - Sept 2021', icon: 'AB', image:'Accenture.jpeg', name:'Accenture', link:'https://www.accenture.com/in-en',
      descr: 'Excelled in conducting comprehensive business analyses, requirement assessments, and overseeing build management, consistently delivering optimal solutions that exceeded client expectations. These outstanding contributions led to prestigious recognition of being nominated and awarded FY20 Q4 Accenture Celebrates Excellence Award in Client & Customer Category. Exhibited exceptional leadership and teamwork by mentoring and managing junior team members, fostering their professional growth while taking end-to-end ownership of projects in new role, ensuring seamless execution and successful delivery.'}
    ,
    {status: 'Application Development Associate', date: 'Nov 2018 - Dec 2020', icon: 'AB', image:'Accenture.jpeg', name:'Accenture',link:'https://www.accenture.com/in-en',
      descr: 'Conducted comprehensive testing, including unit, performance, and user acceptance, ensuring software quality and seamless build migrations. Leveraged expertise in Oracle PeopleSoft FSCM modules (Accounts Payable, Receivable, Purchase Order, General Ledger) to streamline financial processes. Provided optimal solutions through meticulous analysis, user- centric design, and intuitive application functionalities. Maintained system stability by providing prompt production support and resolving critical bugs.'}
  ]
  }
  

  scroll(el:any) {
    if(document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> document.getElementById(el)?.scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }



}