import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HrComponent } from './components/hr/hr.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateLoginComponent } from './components/candidate-login/candidate-login.component';
import { StoreService } from './services/storeService';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HrComponent,
    CandidateComponent,
    CandidateLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
