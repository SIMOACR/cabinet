import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddRdvComponent } from './add-rdv/add-rdv.component';
import { MedecinComponent } from './medecin/medecin.component';
import { Myrdvs1Component } from './myrdvs1/myrdvs1.component';
import { MyrdvsComponent } from './myrdvs/myrdvs.component';
import { RdvHistoryComponent } from './rdv-history/rdv-history.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { MypatientsComponent } from './mypatients/mypatients.component';
import { PatientsModule } from './patients/patients.module';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'user/:userId', component: UserComponent, canActivate: [AuthGuardService] },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'calendar', component: CalendarComponent },
  {path: 'addRdv', component: AddRdvComponent },
  {
    path: 'patient', 
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
    // component: Myrdvs1Component,
    // children: [
    //   {path: '', redirectTo: 'calendar', pathMatch: 'full' },
    //   {path: 'calendar', component: CalendarComponent },
    //   {path: 'myrdvs', component: MyrdvsComponent },
    //   {path: 'myRdvHistory', component: RdvHistoryComponent },
    //   {path: 'consultations/:rdvId', component: ConsultationsComponent },
    // ]
  },
  {path: 'refresh', component: HomeComponent },
  {
    path: 'medecin',
    component: MedecinComponent,
    children: [
      {path: '', redirectTo: 'calendar/med', pathMatch: 'full' },
      {path: 'calendar/:med', component: CalendarComponent },
      {path: 'mypatients', component: MypatientsComponent},
    ]
  },
  {path: 'profile-profile/:id', component: MedecinComponent },
  {path: 'patient-rdvs/:id', component: MedecinComponent },
  {path: 'patient-consultations/:id', component: MedecinComponent },
  {path: 'add-rdv-to-patient/:id', component: MedecinComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
