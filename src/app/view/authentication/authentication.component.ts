import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthSideblogComponent } from '../../shared/auth-sideblog/auth-sideblog.component';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [RouterOutlet,AuthSideblogComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

}
