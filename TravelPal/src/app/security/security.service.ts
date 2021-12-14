import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  authResponse,
  signInCredentials,
  signUpCredentials,
} from './userCredentials.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private tokenKey: string = 'token';
  private expirationTokenKey: string = 'token-expiration';
  constructor(private _http: HttpClient) {}

  isAuthenticated() {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) return false;

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration as string);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  signUp(credentials: signUpCredentials) {
    return this._http.post<authResponse>(
      'https://localhost:44325/api/accounts/signUp',
      credentials
    );
  }

  signIn(credentials: signInCredentials) {
    return this._http.post<authResponse>(
      'https://localhost:44325/api/accounts/signIn',
      credentials
    );
  }

  saveToken(authRes: authResponse) {
    localStorage.setItem(this.tokenKey, authRes.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authRes.expiration.toString()
    );
  }

  getFieldFromJWT(field: string) {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return '';

    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }
}
