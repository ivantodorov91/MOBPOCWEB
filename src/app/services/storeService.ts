export class StoreService {

  user: {
    profile: {
      name: string,
      role: string,
      corporateId?: string,
      offerId?: string,
    },
  };
  getStoredData() {
    this.user = JSON.parse(sessionStorage.getItem(`oidc.user:https://localhost:44352:groupyfy-app`));
    return this.user;
  }

}
