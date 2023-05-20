import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarSyncComponent } from './calendar-sync/calendar-sync.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';
import { TeamManagementComponent } from './team-management/team-management.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'task', component: TaskComponent }, 
  { path: 'projects', component: ProjectComponent },
  { path: 'list', component: ListComponent },
  { path: 'team-management', component: TeamManagementComponent },
  { path: 'calendar-sync', component: CalendarSyncComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
