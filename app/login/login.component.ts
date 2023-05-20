import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: any = {};
  message: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.http.post('http://localhost:3000/login', this.model).subscribe(
      (response: any) => {
        console.log('Connexion reussie', response);
        this.message = 'Connexion reussie';
        this.authService.setUserInfo(response);
        this.model = {};
        this.router.navigate(['/dashboard']); // Naviguer vers le tableau de bord après une connexion réussie
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
        this.message = 'Erreur lors de la connexion';
      }
    );
  }
}
