import { Injectable } from '@angular/core';
import { UserManager, User, Log, UserManagerSettings } from 'oidc-client';
import { HttpClient } from 'selenium-webdriver/http';


const settings: UserManagerSettings = {
  authority: 'https://localhost:44352',
  client_id: 'groupyfy-app',
  redirect_uri: `http://localhost:4200/assets/oidc-login-redirect.html`,
  response_type: 'id_token token',
  scope: 'openid profile groupyfy-api email',
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: true
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userManager = new UserManager(settings);

  constructor() {
  }

}
