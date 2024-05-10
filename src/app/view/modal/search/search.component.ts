import { Component } from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductComponent } from '../../../shared/product/product.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    ProductComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(public dialogRef: MatDialogRef<SearchComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedTabIndex: number = 0;

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
