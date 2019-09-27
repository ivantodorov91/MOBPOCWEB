export class StoreService {

  getStoredData() {
    const data = JSON.parse(sessionStorage.getItem(`oidc.user:https://localhost:44352:groupyfy-app`));
    return data;
  }

}
