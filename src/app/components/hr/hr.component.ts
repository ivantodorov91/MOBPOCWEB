import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) {
    this.authService.userManager.getUser()
    .then(user => {
      if (!user) {
        this.authService.userManager.signinRedirect()
      }

    })
    .catch(e => {
      console.log(e);
    });
  }

  ngOnInit() {
  }

}
