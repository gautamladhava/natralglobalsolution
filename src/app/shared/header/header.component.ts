import { Component, HostBinding, Renderer2, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatSelectTrigger } from '@angular/material/select';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ElementRef, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { SearchComponent } from '../../view/modal/search/search.component';
import { ClickOutsideDirective } from '../directive/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatDialogActions,
    MatDialogClose,
    ClickOutsideDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //Select dropDown
  dropdownOpen = false;

  openDropdown() {
    // this.dropdownOpen = !this.dropdownOpen;
    this.dropdownOpen = !this.dropdownOpen;
    document.getElementById("custom-dropdown")?.classList.toggle("open-dropdown")
  }

  @ViewChild('targetDiv')
  targetDiv!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.targetDiv.nativeElement.contains(event.target)) {
      this.dropdownOpen =false;
      document.getElementById("custom-dropdown")?.classList.remove("open-dropdown")
    }
  }

  selectedText = 'English';

  selectItem(item: string) {
    this.selectedText = item;
    this.dropdownOpen = false;
  }

  //Mega Menu start
  constructor(private renderer: Renderer2, public dialog: MatDialog) {}

  megaMenuVisible: boolean = false;

  toggleMegaMenu() {
    this.megaMenuVisible = true;
    this.renderer.addClass(document.body, 'mega-menu-open');
  }
  closeMegaMenu() {
    this.megaMenuVisible = false;
    this.renderer.removeClass(document.body, 'mega-menu-open');
  }

  //Mobile toggle
  toggleClass(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    console.log(event.target);

    if (hasClass) {
      this.renderer.removeClass(event.target, className);
    } else {
      this.renderer.addClass(event.target, className);
    }
  }
  //Mega Menu end

  //Modal start
  openDialog() {
    const dialogRef = this.dialog.open(SearchComponent, {
      panelClass: 'search-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  //Modal end

  // Hamburger Menu start
  @HostBinding('class.open-menu') isOpenMenu: boolean = false;

  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    this.renderer.addClass(document.body, 'sidebar-open');
  }
  // Hamburger Menu end

  onClickOutside() {
    document.body.classList.remove('sidebar-open');
  }
}
