import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component'; 

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,FooterComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
