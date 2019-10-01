import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { StoreService } from 'src/app/services/storeService';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService, private readonly storage: StoreService) {
    var user = storage.getStoredData();
    if (!user)
    {
      this.authService.userManager.signinRedirect()
    }
  }

  ngOnInit() {
  }

}
