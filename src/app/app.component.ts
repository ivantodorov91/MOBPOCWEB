import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GroupyfyWeb';
  table: { label: string, value: string }[];

  constructor(private readonly authService: AuthenticationService) {
    this.authService.userManager.getUser()
    .then(user => console.log(user))
    .catch(e => console.log(e));
  }
}
