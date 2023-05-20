import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Ajout de RouterModule
import { AuthService } from './auth.service'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { EditComponent } from './edit/edit.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { CalendarSyncComponent } from './calendar-sync/calendar-sync.component'; // Importation de ProjectComponent

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ListComponent,
    ProjectComponent,
    EditComponent,
    TeamManagementComponent,
    CalendarSyncComponent // Ajout de ProjectComponent à la liste des déclarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, // Ajout de RouterModule à la liste des imports
    AppRoutingModule, // Ajout de AppRoutingModule à la liste des imports
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
