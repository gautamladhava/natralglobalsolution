import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  HostListener,
  Renderer2,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
Swiper.use([Navigation, Thumbs]);
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements AfterViewInit {
  // Slider Start
  @ViewChild('galleryTop') galleryTop: any;
  @ViewChild('galleryThumbs') galleryThumbs: any;

  ngAfterViewInit() {
    const galleryThumbs = new Swiper(this.galleryThumbs.nativeElement, {
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
    });

    const galleryTop = new Swiper(this.galleryTop.nativeElement, {
      modules: [Pagination],
      spaceBetween: 0,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
    this.handlePaymentDetailsClick();
  }
  // Slider End

  // Counter Start
  count = 2;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
  // Counter End

  // Visible bock on scroll Start
  @ViewChild('scrollDiv', { static: false }) scrollDiv!: ElementRef;
  // Visible bock on scroll End

  @ViewChild('paymentDetails')
  paymentDetails!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private el: ElementRef
  ) {}

  handlePaymentDetailsClick(): void {
    if (!this.paymentDetails || !this.paymentDetails.nativeElement) {
      return;
    }

    const paymentDetailsList = this.paymentDetails.nativeElement;
    paymentDetailsList.addEventListener('click', (event: Event) => {
      event.preventDefault();

      const clickedElement = event.target as HTMLElement;
      const listItem = clickedElement.closest('li');
      if (!listItem) return;

      // Handle the click event here
      const anchor = listItem.querySelector('a');
      if (anchor) {
        anchor.classList.add('active');
        const dataValue = anchor.getAttribute('data-value');
        const paymentBlocks = Array.from(
          document.querySelectorAll('.product-block')
        ); // Convert to array
        for (const block of paymentBlocks) {
          const dataTarget = (block as HTMLElement).getAttribute('data-target');
          if (dataTarget === dataValue) {
            (block as HTMLElement).style.position = 'relative';
            const offset = (block as HTMLElement).offsetTop;
            const sectionScroll = offset - 100;
            window.scrollTo({ top: sectionScroll, behavior: 'smooth' });
          }
        }
      }
    });
  }

  payment_block1(): void {
    const colors1 = [
      { r: 255, g: 255, b: 255 },
      { r: 251, g: 252, b: 253 },
      { r: 250, g: 252, b: 253 },
      { r: 248, g: 251, b: 252 },
      { r: 247, g: 250, b: 251 },
      { r: 245, g: 249, b: 250 },
      { r: 243, g: 248, b: 249 },
      { r: 239, g: 246, b: 247 },
      { r: 236, g: 244, b: 246 },
      { r: 234, g: 243, b: 244 },
      { r: 231, g: 241, b: 243 },
      { r: 227, g: 239, b: 241 },
      { r: 224, g: 237, b: 239 },
      { r: 220, g: 235, b: 238 },
      { r: 216, g: 233, b: 236 },
      { r: 212, g: 231, b: 234 },
      { r: 208, g: 229, b: 232 },
      { r: 204, g: 226, b: 230 },
      { r: 200, g: 224, b: 228 },
      { r: 196, g: 222, b: 226 },
      { r: 192, g: 220, b: 225 },
      { r: 188, g: 218, b: 223 },
    ];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors1.length - 1)),
      colors1.length - 1
    );
    const currentColor = colors1[colorIndex];
    const nextColor = colors1[Math.min(colorIndex + 1, colors1.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors1.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors1.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors1.length - 1) - colorIndex)
    );

    const acceptPaymentsElement =
      this.elementRef.nativeElement.querySelector('#more_information');
    if (acceptPaymentsElement) {
      acceptPaymentsElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', () => {
      const startfun =
        this.elementRef.nativeElement.querySelector('.product-block-wrap')
          .offsetTop + 30;
      if (window.scrollY > startfun) {
        let scrolled = window.scrollY;
        let scale = 1 - scrolled * 0.0001;
        if (scale < 0.96) {
          scale = 0.96;
        }
        const acceptPaymentsElement =
          this.elementRef.nativeElement.querySelector('#more_information');
        if (acceptPaymentsElement) {
          acceptPaymentsElement.style.transform = `scaleX(${scale})`;
        }
      } else {
        const acceptPaymentsElement =
          this.elementRef.nativeElement.querySelector('#more_information');
        if (acceptPaymentsElement) {
          acceptPaymentsElement.style.transform = `scaleX(1)`;
          acceptPaymentsElement.style.backgroundColor = `#ffffff`;
        }
      }
    });
  }

  payment_block2(): void {
    const colors2 = [
      { r: 255, g: 255, b: 255 },
      { r: 251, g: 252, b: 253 },
      { r: 250, g: 252, b: 253 },
      { r: 248, g: 251, b: 252 },
      { r: 247, g: 250, b: 251 },
      { r: 245, g: 249, b: 250 },
      { r: 243, g: 248, b: 249 },
      { r: 239, g: 246, b: 247 },
      { r: 236, g: 244, b: 246 },
      { r: 234, g: 243, b: 244 },
      { r: 231, g: 241, b: 243 },
      { r: 227, g: 239, b: 241 },
      { r: 224, g: 237, b: 239 },
      { r: 220, g: 235, b: 238 },
      { r: 216, g: 233, b: 236 },
      { r: 212, g: 231, b: 234 },
      { r: 208, g: 229, b: 232 },
      { r: 204, g: 226, b: 230 },
      { r: 200, g: 224, b: 228 },
      { r: 196, g: 222, b: 226 },
      { r: 192, g: 220, b: 225 },
      { r: 188, g: 218, b: 223 },
    ];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors2.length - 1)),
      colors2.length - 1
    );
    const currentColor = colors2[colorIndex];
    const nextColor = colors2[Math.min(colorIndex + 1, colors2.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors2.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors2.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors2.length - 1) - colorIndex)
    );

    const makePayoutsElement =
      this.elementRef.nativeElement.querySelector('#characteristics');
    if (makePayoutsElement) {
      makePayoutsElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', () => {
      const startfun =
        this.elementRef.nativeElement.querySelector('.product-block-wrap')
          .offsetTop + 30;
      if (window.scrollY > startfun) {
        let scrolled = window.scrollY;
        let scale = 1 - scrolled * 0.0001;
        if (scale < 0.97) {
          scale = 0.97;
        }
        const makePayoutsElement =
          this.elementRef.nativeElement.querySelector('#characteristics');
        if (makePayoutsElement) {
          makePayoutsElement.style.transform = `scaleX(${scale})`;
        }
      } else {
        const makePayoutsElement =
          this.elementRef.nativeElement.querySelector('#characteristics');
        if (makePayoutsElement) {
          makePayoutsElement.style.transform = `scaleX(1)`;
        }
      }
    });
  }

  payment_block3(): void {
    const colors3 = [
      { r: 255, g: 255, b: 255 },
      { r: 253, g: 254, b: 254 },
      { r: 250, g: 252, b: 252 },
      { r: 247, g: 250, b: 250 },
      { r: 243, g: 248, b: 249 },
      { r: 240, g: 246, b: 247 },
      { r: 237, g: 244, b: 245 },
      { r: 233, g: 242, b: 243 },
      { r: 230, g: 240, b: 242 },
      { r: 226, g: 237, b: 240 },
      { r: 223, g: 235, b: 238 },
      { r: 218, g: 233, b: 235 },
      { r: 217, g: 232, b: 235 },
    ];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors3.length - 1)),
      colors3.length - 1
    );
    const currentColor = colors3[colorIndex];
    const nextColor = colors3[Math.min(colorIndex + 1, colors3.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors3.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors3.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors3.length - 1) - colorIndex)
    );

    const startBusinessBankingElement =
      this.elementRef.nativeElement.querySelector('#video_instructions');
    if (startBusinessBankingElement) {
      startBusinessBankingElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', () => {
      const startfun =
        this.elementRef.nativeElement.querySelector('.product-block-wrap')
          .offsetTop + 30;
      if (window.scrollY > startfun) {
        let scrolled = window.scrollY;
        let scale = 1 - scrolled * 0.0001;
        if (scale < 0.975) {
          scale = 0.975;
        }
        const startBusinessBankingElement =
          this.elementRef.nativeElement.querySelector('#video_instructions');
        if (startBusinessBankingElement) {
          startBusinessBankingElement.style.transform = `scaleX(${scale})`;
        }
      } else {
        const startBusinessBankingElement =
          this.elementRef.nativeElement.querySelector('#video_instructions');
        if (startBusinessBankingElement) {
          startBusinessBankingElement.style.transform = `scaleX(1)`;
        }
      }
    });
  }

  payment_block4(): void {
    const colors4 = [
      { r: 255, g: 255, b: 255 },
      { r: 253, g: 254, b: 254 },
      { r: 249, g: 251, b: 252 },
      { r: 246, g: 250, b: 250 },
      { r: 241, g: 247, b: 248 },
      { r: 236, g: 244, b: 246 },
      { r: 232, g: 242, b: 244 },
      { r: 232, g: 242, b: 244 },
    ];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors4.length - 1)),
      colors4.length - 1
    );
    const currentColor = colors4[colorIndex];
    const nextColor = colors4[Math.min(colorIndex + 1, colors4.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors4.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors4.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors4.length - 1) - colorIndex)
    );

    const automatePayrollElement =
      this.elementRef.nativeElement.querySelector('#warranty_info');
    if (automatePayrollElement) {
      automatePayrollElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', () => {
      const startfun =
        this.elementRef.nativeElement.querySelector('.product-block-wrap')
          .offsetTop + 30;
      if (window.scrollY > startfun) {
        let scrolled = window.scrollY;
        let scale = 1 - scrolled * 0.0000001;
        if (scale < 0.98) {
          scale = 0.98;
        }
        const automatePayrollElement =
          this.elementRef.nativeElement.querySelector('#warranty_info');
        if (automatePayrollElement) {
          automatePayrollElement.style.transform = `scaleX(${scale})`;
        }
      } else {
        const automatePayrollElement =
          this.elementRef.nativeElement.querySelector('#warranty_info');
        if (automatePayrollElement) {
          automatePayrollElement.style.transform = `scaleX(1)`;
        }
      }
    });
  }

  payment_block5(): void {
    const colors5 = [
      { r: 255, g: 255, b: 255 },
      { r: 253, g: 254, b: 254 },
      { r: 249, g: 251, b: 252 },
      { r: 246, g: 250, b: 250 },
      { r: 241, g: 247, b: 248 },
      { r: 236, g: 244, b: 246 },
      { r: 232, g: 242, b: 244 },
      { r: 232, g: 242, b: 244 },
    ];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors5.length - 1)),
      colors5.length - 1
    );
    const currentColor = colors5[colorIndex];
    const nextColor = colors5[Math.min(colorIndex + 1, colors5.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors5.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors5.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors5.length - 1) - colorIndex)
    );

    const automatePayrollElement =
      this.elementRef.nativeElement.querySelector('#services_info');
    if (automatePayrollElement) {
      automatePayrollElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', () => {
      const startfun =
        this.elementRef.nativeElement.querySelector('.product-block-wrap')
          .offsetTop + 30;
      if (window.scrollY > startfun) {
        let scrolled = window.scrollY;
        let scale = 1 - scrolled * 0.0000001;
        if (scale < 0.985) {
          scale = 0.985;
        }
        const automatePayrollElement =
          this.elementRef.nativeElement.querySelector('#services_info');
        if (automatePayrollElement) {
          automatePayrollElement.style.transform = `scaleX(${scale})`;
        }
      } else {
        const automatePayrollElement =
          this.elementRef.nativeElement.querySelector('#services_info');
        if (automatePayrollElement) {
          automatePayrollElement.style.transform = `scaleX(1)`;
        }
      }
    });
  }

  payment_block6(): void {
    const colors6 = [
      { r: 255, g: 255, b: 255 },
      { r: 253, g: 254, b: 254 },
      { r: 249, g: 251, b: 252 },
      { r: 246, g: 250, b: 250 },
      { r: 241, g: 247, b: 248 },
      { r: 236, g: 244, b: 246 },
      { r: 232, g: 242, b: 244 },
      { r: 232, g: 242, b: 244 },
    ];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors6.length - 1)),
      colors6.length - 1
    );
    const currentColor = colors6[colorIndex];
    const nextColor = colors6[Math.min(colorIndex + 1, colors6.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors6.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors6.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors6.length - 1) - colorIndex)
    );

    const automatePayrollElement =
      this.elementRef.nativeElement.querySelector('#download');
    if (automatePayrollElement) {
      automatePayrollElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', () => {
      const startfun =
        this.elementRef.nativeElement.querySelector('.product-block-wrap')
          .offsetTop + 30;
      if (window.scrollY > startfun) {
        let scrolled = window.scrollY;
        let scale = 1 - scrolled * 0.0000001;
        if (scale < 0.99) {
          scale = 0.99;
        }
        const automatePayrollElement =
          this.elementRef.nativeElement.querySelector('#download');
        if (automatePayrollElement) {
          automatePayrollElement.style.transform = `scaleX(${scale})`;
        }
      } else {
        const automatePayrollElement =
          this.elementRef.nativeElement.querySelector('#download');
        if (automatePayrollElement) {
          automatePayrollElement.style.transform = `scaleX(1)`;
        }
      }
    });
  }

  payment_block7(): void {
    const colors7 = [{ r: 255, g: 255, b: 255 }];

    const windowScrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorIndex = Math.min(
      Math.floor(windowScrollPercentage * (colors7.length - 1)),
      colors7.length - 1
    );
    const currentColor = colors7[colorIndex];
    const nextColor = colors7[Math.min(colorIndex + 1, colors7.length - 1)];

    const r = Math.round(
      currentColor.r +
        (nextColor.r - currentColor.r) *
          (windowScrollPercentage * (colors7.length - 1) - colorIndex)
    );
    const g = Math.round(
      currentColor.g +
        (nextColor.g - currentColor.g) *
          (windowScrollPercentage * (colors7.length - 1) - colorIndex)
    );
    const b = Math.round(
      currentColor.b +
        (nextColor.b - currentColor.b) *
          (windowScrollPercentage * (colors7.length - 1) - colorIndex)
    );

    const getCreditLoansElement =
      this.elementRef.nativeElement.querySelector('#comments');
    if (getCreditLoansElement) {
      getCreditLoansElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    //if footer visible on scroll add or remove class start
    const triggerDiv = this.el.nativeElement.querySelector('#triggerDiv');
    const bodyElement = document.body;

    if (triggerDiv) {
      // console.log(triggerDiv);
      const triggerRect = triggerDiv.getBoundingClientRect();
      const startTriggerPoint = triggerRect.top;
      const bottomTriggerPoint = triggerRect.bottom;

      if (startTriggerPoint <= 0 && bottomTriggerPoint >= window.innerHeight) {
        bodyElement.classList.add('scrollspy-visible');
        this.scrollDiv.nativeElement.classList.add('visible');
      } else {
        bodyElement.classList.remove('scrollspy-visible');
        this.scrollDiv.nativeElement.classList.remove('visible');
      }
    }
    //if footer visible on scroll add or remove class end

    const stickyElements = [
      'more_information',
      'characteristics',
      'video_instructions',
      'warranty_info',
      'services_info',
      'download',
      'comments',
    ];
    stickyElements.forEach((elementId) => {
      const element = this.elementRef.nativeElement.querySelector(
        `#${elementId}`
      );
      if (element) {
        this.renderer.setStyle(element, 'position', 'sticky');
      }
    });

    const windscroll = window.pageYOffset;
    const paymentBlocks =
      this.elementRef.nativeElement.querySelectorAll('.product-block');

    paymentBlocks.forEach((paymentBlock: HTMLElement, i: number) => {
      const paymentBlockHeight = paymentBlock.offsetHeight;
      if (paymentBlock.offsetTop <= paymentBlockHeight + windscroll) {
        const activeLink = this.elementRef.nativeElement.querySelector(
          `.product-details li:nth-child(${i + 1}) a`
        );
        if (activeLink) {
          this.removeActiveClassFromLinks();
          activeLink.classList.add('active');
          // for data block
          const dataValue = activeLink.getAttribute('data-value');
          const paymentBlocks = Array.from(
            document.querySelectorAll('.product-block')
          );

          for (const block of paymentBlocks) {
            if (block) {
              const rect = block.getBoundingClientRect();
              const dataTarget = (block as HTMLElement).getAttribute(
                'data-target'
              );
              console.log(rect.top, paymentBlockHeight);
              if (rect.top >= 0 && rect.top < paymentBlockHeight) {
                if (dataTarget === dataValue) {
                  (block as HTMLElement).classList.remove('visible');
                }
              } else {
                (block as HTMLElement).classList.add('visible');
              }
            }
          }
        }
      }
    });

    this.payment_block1();
    this.payment_block2();
    this.payment_block3();
    this.payment_block4();
    this.payment_block5();
    this.payment_block6();
    this.payment_block7();
  }

  removeActiveClassFromLinks() {
    document
      .querySelectorAll('.product-details li a.active')
      .forEach((link) => link.classList.remove('active'));
  }
}
