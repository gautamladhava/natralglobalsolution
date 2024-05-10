import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { EnquiryComponent } from '../../../shared/enquiry/enquiry.component';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {  OnInit } from '@angular/core';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [EnquiryComponent,NgFor, CommonModule,
    NgForOf,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,MatButtonToggleModule,MatIconModule, ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  viewControl = new FormControl('');
  shorting= [
    {value: 'A-Z', viewValue: 'A-Z'},
    {value: 'Z-A', viewValue: 'Z-A'},
    {value: '0-9', viewValue: '0-9'},
  ];

  toggleGroup: any;
  dropdownOpen1 = false;

  openDropdown1() {
    // this.dropdownOpen = !this.dropdownOpen;
    this.dropdownOpen1 = !this.dropdownOpen1;
    document.getElementById("custom-dropdown1")?.classList.toggle("open-dropdown")
  }

  @ViewChild('targetDiv1')
  targetDiv1!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.targetDiv1.nativeElement.contains(event.target)) {
      this.dropdownOpen1 =false;
      document.getElementById("custom-dropdown1")?.classList.remove("open-dropdown")
    }
  }

  selectedText1 = 'Hardware';
  selectedValue = 'grid-view'; // Default selected value
  selectItem(item: string) {
    this.selectedText1 = item;
    this.dropdownOpen1 = false;
  }

  Featured_Products = [
    {
      img: '../../../../assets/images/hardware_img01.jpg',
      title: 'Fiscal Cash Registers',
      details:
        'Eltrade offers full range of hardware and software solutions for your business',
    },
    {
      img: '../../../../assets/images/hardware_img02.jpg',
      title: 'Fiscal Printers',
      details:
        'The fiscal printers are indispensable for heavy loaded sites which require speed, quality and reliability. They are an integral part of any professionally developed POS system.',
    },
    {
      img: '../../../../assets/images/hardware_img03.jpg',
      title: 'Barcode Scanners',
      details:
        'An affordable hand scanner for scanning both 1D and 2D barcodes. The DS2208 effortlessly reads the usual 1D and 2D barcodes from paper, labels, mobile phones and computer monitors.',
    },
    {
      img: '../../../../assets/images/hardware_img04.jpg',
      title: 'Fiscal Cash Registers',
      details:
        'Fiscal Cash Registers is extremely reliable, with quiet thermo-printing and automatic cutter that can be adjusted for full or partial cutting of the receipt. The fiscal device has a built-in tax terminal with GPRS module for connection to the NRA.',
    },
    {
      img: '../../../../assets/images/hardware_img05.jpg',
      title: 'Mobile terminals',
      details:
        'Mobile terminals for data collection offered by Eltrade, are used in warehouses, logistic stations, home delivery, transportation and logistics, service operations, manufacturing plants, food and non-food stores.',
    },
  ];
}
