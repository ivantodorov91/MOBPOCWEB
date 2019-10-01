import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication.service';
import { Title } from '@angular/platform-browser';
import { StoreService } from './services/storeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GroupyfyWeb';
  table: { label: string, value: string }[];

  constructor(private readonly titleService: Title, private readonly storage: StoreService, private readonly authService: AuthenticationService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.fillTable();
  }

  changeRole()
  {
    const redirectParams = {
      extraQueryParams: {
        role: "HR Admin",
        corporateId: "4BE19F26-ABBD-46AB-8572-71946A878EF9"
      }
    };

    this.authService.userManager.signinRedirect(redirectParams);
  }

  private fillTable() {
    debugger;
    const user = this.storage.getStoredData();
    if (user) {
      this.table = [];
      if (user.profile.name) {
        this.table.push({
          label: 'Username',
          value: user.profile.name
        });
      }
      if (user.profile.role) {
        this.table.push({
          label: 'Role',
          value: user.profile.role
        });
      }
      if (user.profile.corporateId) {
        this.table.push({
          label: 'CorporateId',
          value: user.profile.corporateId
        });
      }
      if (user.profile.offerId) {
        this.table.push({
          label: 'OfferId',
          value: user.profile.offerId
        });
      }
    }
  }
}
