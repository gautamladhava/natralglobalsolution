import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-link-sent',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './password-link-sent.component.html',
  styleUrl: './password-link-sent.component.scss'
})
export class PasswordLinkSentComponent {

//   constructor(private router: Router) { }
//   back_login= function () {
//     this.router.navigateByUrl('/user');
// };
}
