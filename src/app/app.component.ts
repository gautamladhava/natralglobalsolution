import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'natur-global-frontend';
  elementRef: any;

  ngOnInit() {
    this.header();
    this.footer();
  }
  /* header funcation */
  header() {
    const header = document.getElementById('header');
    const main_content = document.getElementById('main-content');
    if (header && main_content) {
      let header_height = header.getBoundingClientRect().height;
      main_content.style.paddingTop = header_height + 'px';
    }
  }
  /* footer funcation */
  footer() {
    const footer = document.getElementById('footer');
    const wrapper = document.getElementById('wrapper');
    if (footer && wrapper) {
      let footer_height = footer.getBoundingClientRect().height;  
      wrapper.style.paddingBottom = footer_height + 'px';
      footer.style.marginTop = -footer_height + 'px';
    }
  }
  @HostListener('window:resize')
  onResize() {
    setTimeout(() => {
      this.header();
      this.footer();
    }, 300);
  }
}
