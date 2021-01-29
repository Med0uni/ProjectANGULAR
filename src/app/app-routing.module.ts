import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParticipantsComponent } from './participants/participants.component';
import { FormateursComponent } from './formateurs/formateurs.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'formateurs', component: FormateursComponent },
  { path: 'participants', component: ParticipantsComponent }

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes, {enableTracing: true}),
  RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
