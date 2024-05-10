import {
  Component,
  HostListener,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { MatButtonModule } from '@angular/material/button';
import { EnquiryComponent } from '../../../shared/enquiry/enquiry.component';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
export interface PeriodicElement {
  name: string;
}
import { NgFor, NgForOf } from '@angular/common';
import { features } from 'process';
var isDragging = false;
var mouse_down = false;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    MatButtonModule,
    EnquiryComponent,
    NgFor,
    NgForOf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  fsectiontext = 'Featured ';
  fgradienttext = 'Products';
  fsubtext =
    "A fully integrated ERP solution that covers virtually all aspects of a company's business,";
  pssectiontext = 'Popular ';
  psgradienttext = 'Services  ';
  pssubtext =
    "A fully integrated ERP solution that covers virtually all aspects of a company's business,";
  elementRef: any;

  ngAfterViewInit() {
    new Swiper('.hero-wrap-outer', {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      preventClicks: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 0,
      slidesPerView: 'auto',
      freeMode: true,
      autoHeight: true,
      // autoplay: {
      //   delay: 1500, // milliseconds
      //   disableOnInteraction: false // enable autoplay even if user interacts with swiper
      // },
      // loop: false,

      effect: 'fade',
      speed: 1000,
      fadeEffect: {
        crossFade: true,
      },
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const section = document.getElementById('article-content');
    if (section?.contains(event.target as Node)) {
      const e = document.getElementById('article-content');
      const n = window.innerWidth / 3;
      const o = window.innerHeight / 3;
      const i = event.clientX / n;
      const t = event.clientY / o;
      const moveImage = e?.querySelector('#move-image img') as HTMLElement;
      if (moveImage) {
        moveImage.style.transform = `translate3d(-${i}%, -${t}%, 0)`;
      }
    }
  }

  /* daynamic content */
  Featured_Products = [
    {
      img: '../../../../assets/images/featured_products_01.jpg',
      title: 'Fiscal Cash Register ELTRADE A3',
      details:
        'Modern cash register, developed according to the latest technology',
    },
    {
      img: '../../../../assets/images/featured_products_02.jpg',
      title: 'Fiscal printer ELTRADE PRP 250F',
      details:
        'ELTRADE PRP250F KL is a fiscal printers suitable  for use in busy shops and restaurants',
    },
    {
      img: '../../../../assets/images/featured_products_03.jpg',
      title: 'Zebra LS2208 USB Register ELTRADE A3',
      details:
        'The affordable Symbol LS2208 handheld barcode scanner provides fast, reliable.',
    },
  ];
  Popular_Services = [
    {
      img: '../../../../assets/images/services_img_01.jpg',
      title: 'Electronic Data Interchange',
      details:
        'COMARCH EDI makes interchanging of documents such as orders, dispatch advices, invoices,eceiving advices, etc., easy and fast. Other documents can also be exchanged via COMARCH    EDI: inventory reports, sales reports, order responses, stock reconciliations, and all other  kinds of documents. EDI reduces mistakes by validation at different stages ',
      features_list: [
        {
          feature:
            'COMARCH EDI makes interchanging of documents such as orders, dispatch advices',
        },
        {
          feature:
            'Interchanging of documents such as orders, dispatch advices',
        },
      ],
    },
    {
      img: '../../../../assets/images/services_img_02.jpg',
      title: 'Implementation of SAP Business',
      details:
        'COMARCH EDI makes interchanging of documents such as orders, dispatch advices, invoices, receiving advices, etc., easy and fast. Other documents can also be exchanged via COMARCH  EDI: inventory reports, sales reports, order responses, stock reconciliations, and all other  kinds of documents. EDI reduces mistakes by validation at different stages',
      features_list: [
        {
          feature:
            'COMARCH EDI makes interchanging of documents such as orders, dispatch advices',
        },
        {
          feature:
            'Interchanging of documents such as orders, dispatch advices',
        },
      ],
    },
    {
      img: '../../../../assets/images/services_img_03.jpg',
      title: 'System Integration',
      details:
        'COMARCH EDI makes interchanging of documents such as orders, dispatch advices, invoices, receiving advices, etc., easy and fast. Other documents can also be exchanged via COMARCH EDI: inventory reports, sales reports, order responses, stock reconciliations, and all other kinds of documents. EDI reduces mistakes by validation at different stages',
      features_list: [
        {
          feature:
            'COMARCH EDI makes interchanging of documents such as orders, dispatch advices',
        },
        {
          feature:
            'Interchanging of documents such as orders, dispatch advices',
        },
      ],
    },
  ];

  onmouseover() {
    isDragging = true;
    mouse_down = true;
    var cursor = document.getElementById('cursor');
    (cursor as HTMLElement).style.opacity = '1';
    document
    .getElementById('custom-cursor-block')
    ?.classList.add('drag-cursor');
  }

  onmouseout() {
    isDragging = false;
    mouse_down = false;
    var cursor = document.getElementById('cursor');
    (cursor as HTMLElement).style.opacity = '0';
    document
      .getElementById('custom-cursor-block')
      ?.classList.remove('drag-cursor');
  }
  onmousemove(_e: any) {
    isDragging = true;
    if (mouse_down == true) {
      document
        .getElementById('custom-cursor-block')
        ?.classList.add('drag-cursor');
    } else {
      document
        .getElementById('custom-cursor-block')
        ?.classList.remove('drag-cursor');
    }
    const section = document.getElementById('custom-cursor-block');
    // Get cursor position relative to viewport
    const cursorX = _e.clientX;
    const cursorY = _e.clientY;
  
    // Get section position relative to viewport
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const sectionX = sectionRect.left;
      const sectionY = sectionRect.top;
      // Calculate cursor position relative to section
      const cursorInSectionX = cursorX - sectionX - 72 ;
      const cursorInSectionY = cursorY - sectionY - 28;
      const positionAboveX = cursorInSectionX; // Adjust as needed
      const positionAboveY = cursorInSectionY; // Example offset for above position

      const cursor = document.getElementById('cursor');
      if (cursor) {
        cursor.style.left = positionAboveX + 'px';
        cursor.style.top = positionAboveY + 'px';
      }
    }
  }

  onmousedown(_e: any) {
  
    const cursor = document.getElementById('cursor');
    if (cursor) {
      cursor.style.transform = 'scale(0.7)';
    }    
  }
  onmouseup(_e:any){
    const cursor = document.getElementById('cursor');
    if (cursor) {
      cursor.style.transform = 'scale(1)';
    }
  }
  onmouseover1(){
    var cursor = document.getElementById('cursor');
    (cursor as HTMLElement).style.display = 'none' ;
  }
  onmouseout1(){
    var cursor = document.getElementById('cursor');
    (cursor as HTMLElement).style.display = 'flex' ;
  }

}
