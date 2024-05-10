import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [MatButtonModule ],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  @Input() section_text = '';
  @Input() gradient_text="";
  @Input() sub_text=""
} 
