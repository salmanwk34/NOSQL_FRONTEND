import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  onLogin(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }

  // Stocker l'information de l'utilisateur connect dans  le localStorage
  setUserInfo(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Verif si l'utilisateur est connecté
  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  // Supprimer l'information de l'utilisateur connect localStorage
  logout() {
    localStorage.removeItem('user');
  }
}
