import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) {
    this.authService.userManager.getUser()
    .then(user => console.log(user))
    .catch(e => console.log(e));
  }

  ngOnInit() {
  }

}
