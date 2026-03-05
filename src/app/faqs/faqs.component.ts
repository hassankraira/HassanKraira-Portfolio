import { NgStyle, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgStyle,NgFor,NgIf],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();

  }
  faqs = [
    { 
      id: 0, 
      question: "Why choose Hassan ?", 
      show: false, 
      answer: "With Hassan, I personally handle every aspect of your project with dedication and expertise. I ensure tailored solutions that help your business grow and reach its full potential online."
    },
    { 
      id: 1, 
      question: "What's the typical budget?", 
      show: false, 
      answer: "The typical project budget depends on the scope of work. I offer flexible pricing to fit a range of budgets while maintaining quality."
    },
    { 
      id: 2, 
      question: "Do you accept retainers?", 
      show: false, 
      answer: "Yes, I offer retainer packages for ongoing work. This provides you with continuous support and services for updates, maintenance, or additional tasks."
    },
    { 
      id: 3, 
      question: "What's the typical work period?", 
      show: false, 
      answer: "The work period varies based on the project complexity, but I strive to deliver in a timely and efficient manner to meet your deadlines." 
    },
    { 
      id: 4, 
      question: "Do you offer discounts?", 
      show: false, 
      answer: "I offer discounts for long-term projects or retainer clients. Please contact me to discuss pricing options." 
    }
  ];
  
  
  
  shows(id: number) {
    this.faqs.at(id)!.show = !this.faqs.at(id)!.show;
    } 
    checkScroll() {
      const All = document.querySelectorAll('.hh3');

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
    

      All.forEach(item => {
        const itemTop = item.getBoundingClientRect().top + scrollTop;
        const itemHeight = item.clientHeight;
  
        if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
          item.classList.add('visible');
        } 
      });
}  
}
