import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
    private httpClient: HttpClient
  ){
  }

  ngOnInit(){

    this.httpClient.get(this.url).subscribe(res => {
      this.data = res;
      console.log(this.data[0])
    });
    this.experience = [
      {status: 'Software Developer', date: 'Dec 2022- Present', icon: 'AB', image:'eve.jpeg', name:'Eve Networks', button:'TypeScript',
        descr: 'Spearheaded development of cutting-edge billing portal, accounting application designed to automate and streamline invoices, fixed charges and tariffs processing. Revamped billing portal by refactoring legacy code, leveraging modern design and optimisation techniques for elevated user experience by enhancing product value, delivering intuitive, highly responsive portal tailored to target audience needs and complex business logic requirements.'}
    ,
    {status: 'Data Analyst', date: 'Nov 2021 - Oct 2022', icon: 'AB', image:'uob.png', name:'University of Bath',
      descr: 'Functioned as data analyst for comprehensive University App, responsible for managing and maintaining over 10 course structures of University of Bath. Key responsibilities encompassed conducting intricate data analyses, executing meticulous quality assurance testing, and ensuring accurate data entry for all courses and academic units offered by University.'}
    ,
    {status: 'Application Development Analyst', date: 'Dec 2020 - Sept 2021', icon: 'AB', image:'Accenture.jpeg', name:'Accenture',
      descr: 'Excelled in conducting comprehensive business analyses, requirement assessments, and overseeing build management, consistently delivering optimal solutions that exceeded client expectations. These outstanding contributions led to prestigious recognition of being nominated and awarded FY20 Q4 Accenture Celebrates Excellence Award in Client & Customer Category. Exhibited exceptional leadership and teamwork by mentoring and managing junior team members, fostering their professional growth while taking end-to-end ownership of projects in new role, ensuring seamless execution and successful delivery.'}
    ,
    {status: 'Application Development Associate', date: 'Nov 2018 - Dec 2020', icon: 'AB', image:'Accenture.jpeg', name:'Accenture',
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