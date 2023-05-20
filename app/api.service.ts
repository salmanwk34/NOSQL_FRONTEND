import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login`, { username, password });
  }

  logout() {
    return this.http.get(`${this.BASE_URL}/logout`);
  }

  getDashboard() {
    return this.http.get(`${this.BASE_URL}/dashboard`);
  }
}
