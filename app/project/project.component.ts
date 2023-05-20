import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projectForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    this.http.post('http://localhost:3000/projects', this.projectForm.value)
      .subscribe(res => console.log(res));
  }
}
