import { ContactComponent } from './../contact/contact.component';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
    work: any[] = [
      {
        name: 'Phoenix',
        description: "Phoenix is an Angular-based school management platform with real-time updates, Oracle SQL backend, and a responsive design for seamless service scheduling.",
                img: 'assets/Phoenix.png',
        vist:"https://hassankraira.github.io/Phoenix_center/#/Home",


      },
      {
        name: 'Bookme',
        description: "BookMe is an Angular-based booking platform with real-time updates, Oracle SQL backend, and a responsive design for seamless service scheduling.",
        img: 'assets/Bookme.png',
        vist:"https://mohamedkassem.club/krira/bookme/",


      },
      {
        name: "Cornam Metals",
        description: "Cornam Metals provides high-quality metals and alloys, specializing in sourcing, processing, and distributing a wide range of industrial metal products.",
        img: 'assets/CornamMetals.png',
        vist:"https://mohamedkassem.club/krira/CornamMetals/Home",
      },
      {
        name: "HassanTech",
        description:"HassanTech delivers innovative tech solutions, offering cutting-edge software and hardware services tailored to meet the needs of businesses and individuals.",
        img: 'assets/HassanTech.png',
        vist:"https://hassankraira.github.io/HassanTech3/Home",

      }
     
    ];
    sendm(message:string){
    //  ContactComponent.message=message
      //console.log(ContactComponent.message)
console.log(message)
    }
}
