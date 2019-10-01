import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/storeService';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})
export class CandidateLoginComponent implements OnInit {

  private routeParams: any;
  userId: string;
  offerId: string;
  token: string;
  corporateId: string;

  constructor(private readonly authService: AuthenticationService, private readonly route: ActivatedRoute, private readonly storage: StoreService) { }

  ngOnInit() {
    var user = this.storage.getStoredData();
    if (!user)
    {
      this.route.queryParamMap.subscribe(params => {
        this.routeParams = { ...params.keys, ...params };
        this.userId = this.routeParams.params.userid;
        this.offerId = this.routeParams.params.offerid;
        this.token = this.routeParams.params.token;
        this.corporateId = this.routeParams.params.corporateid;
        const redirectParams = {
          extraQueryParams: {
            userId: this.userId,
            offerId: this.offerId,
            token: this.token,
            corporateId: this.corporateId
          }
        };
  
        this.authService.userManager.signinRedirect(redirectParams);
      });
    }
  }
}
