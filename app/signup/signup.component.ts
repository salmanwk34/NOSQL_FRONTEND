import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {};
  message: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(): void {
    this.http.post('http://localhost:3000/register', this.model).subscribe(
      (response) => {
        console.log('Inscription reusie', response);
	this.message = 'Inscription reussie !';
	this.model = {};
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
        this.message = 'Erreur lors de l\'inscription';
      }
    );
  }

}
