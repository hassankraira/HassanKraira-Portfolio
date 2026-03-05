import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { ButtomComponent } from './buttom/buttom.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,ButtomComponent,ContactComponent,FaqsComponent,HomeComponent,ServicesComponent,WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HassanKraira';
}
