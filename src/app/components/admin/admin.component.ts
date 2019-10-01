import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { StoreService } from 'src/app/services/storeService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
