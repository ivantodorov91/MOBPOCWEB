import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CandidateLoginComponent } from './components/candidate-login/candidate-login.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { HrComponent } from './components/hr/hr.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'hr', component: HrComponent },
  { path: 'candidate', component: CandidateComponent,
    children: [{ path: 'login', component: CandidateLoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
