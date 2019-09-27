import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private readonly authService: AuthenticationService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.routeParams = { ...params.keys, ...params };
      this.userId = this.routeParams.params.userId;
      this.offerId = this.routeParams.params.offerId;
      this.token = this.routeParams.params.token;

      const redirectParams = {
        userId: this.userId,
        offerId: this.offerId,
        token: this.token
      };

      this.authService.userManager.signinRedirect(redirectParams)
      .then(resp => console.log(resp))
      .catch(e => console.log(e));
    });
  }

}
