import { Component, OnInit } from '@angular/core';
import { Project } from '../list/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe((projects: Project[]) => this.projects = projects);
  }

  editProject(project: Project): void {
    project.editing = true;
  }

  confirmEdit(project: Project): void {
    this.projectService.updateProject(project._id, project)
      .subscribe((updatedProject: Project) => {
        const index = this.projects.findIndex(p => p._id === updatedProject._id);
        this.projects[index] = updatedProject;
	this.projects[index].editing = false;
      });
  }

  deleteProject(id: string): void {
    this.projectService.deleteProject(id)
      .subscribe(() => this.projects = this.projects.filter(project => project._id !== id));
  }
}
