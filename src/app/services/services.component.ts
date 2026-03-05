import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor,NgStyle,NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();

  }
  services = [
    {
      id: 0,
      title: 'Web Design',
      tags: ['Design', 'Copywriting'],
      show: false, 

      description:
        'Captivating Web Designs Crafted Just for You. We Blend Creativity with Functionality, Delivering Stunning Websites that Engage, Impress, and Convert. Elevate Your Online Presence with our Expert Web Design Services.'
    },
    {
      id: 1,

      title: 'Frontend Development',

      tags: ['Development', 'UI/UX'],
      show: false, 

      description:
        'Expert Frontend Developers Crafting Pixel-Perfect, Responsive Interfaces that Deliver Seamless Experiences Across Devices and Platforms.'
    },
    {
      id: 2,

      title: 'App Development',
      tags: ['Development', 'Mobile'],
      show: false, 

      description:
        'Custom Mobile and Web Applications Built with Modern Technologies, Ensuring Performance, Reliability, and a User-Centered Experience.'
    },
    {
      id: 3,

      title: 'Website Maintenance',

      show: false, 
      tags: ['Maintenance', 'Support'],
      description:
        'Ongoing Maintenance and Support Services to Keep Your Website Secure, Optimized, and Continuously Performing at Its Best.'
    }
  ];

  
  
  
  shows(id: number) {
    this.services.at(id)!.show = !this.services.at(id)!.show;
    } 
    checkScroll() {
      const elements = document.querySelectorAll('.hh3');
    
      elements.forEach(item => {
        const rect = item.getBoundingClientRect();
    
        // If the top of the element is within the viewport
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
          if (!item.classList.contains('visible')) {
            item.classList.add('visible');
          }
        }
      });
    }
}
