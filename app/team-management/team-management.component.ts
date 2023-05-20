// team-management.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
  inviteEmail: string = '';
  userRole: string = '';
  taskId: string = '';
  progress: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  inviteMember(): void {
    this.http.post('http://localhost:3000/invite', { email: this.inviteEmail }).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  setRole(): void {
    this.http.post('http://localhost:3000/setRole', { email: this.inviteEmail, role: this.userRole }).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  assignTask(): void {
    this.http.post('http://localhost:3000/assignTask', { email: this.inviteEmail, taskId: this.taskId }).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  trackProgress(): void {
    // Send an HTTP request to your server to track the progress of a task
    this.http.post('http://localhost:3000/trackProgress', { taskId: this.taskId, progress: this.progress }).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
