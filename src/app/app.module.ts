import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserServiceService } from './services/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpModule} from '@angular/http';
import { RdvComponent } from './rdv/rdv/rdv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { AllMatModulesModule } from './all-mat-modules/all-mat-modules.module';
import { TestComponent } from './test/test.component';
import { AddRdvComponent } from './add-rdv/add-rdv.component';
import { ProfileComponent } from './profile/profile.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MyrdvsComponent } from './myrdvs/myrdvs.component';
import { Myrdvs1Component } from './myrdvs1/myrdvs1.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { RdvHistoryComponent } from './rdv-history/rdv-history.component';
import { MedecinComponent } from './medecin/medecin.component';
import { RegisterComponent } from './register/register.component';
import { MypatientsComponent } from './mypatients/mypatients.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { MyrdvsMedecinComponent } from './myrdvs-medecin/myrdvs-medecin.component';
import { PatonsultationsComponent } from './patonsultations/patonsultations.component';
import { AddRdvToPatientComponent } from './add-rdv-to-patient/add-rdv-to-patient.component';
import { AddConComponent } from './add-con/add-con.component';
import { SyncfusionModule } from './syncfusion/syncfusion.module';
import { PatientsModule } from './patients/patients.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RdvComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    CalendarComponent,
    TestComponent,
    AddRdvComponent,
    ProfileComponent,
    MyrdvsComponent, Myrdvs1Component, ConsultationsComponent, RdvHistoryComponent, MedecinComponent, RegisterComponent, MypatientsComponent, PatientProfileComponent, MyrdvsMedecinComponent, PatonsultationsComponent, AddRdvToPatientComponent, AddConComponent
  ],
  entryComponents: [
    LoginComponent,
    TestComponent,
    AddRdvComponent,
    CalendarComponent,
    PatientProfileComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CdkTableModule,
    AllMatModulesModule,
    SyncfusionModule,
    PatientsModule
  ],
  providers: [
    UserServiceService,
    AuthService,
    AuthGuardService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
