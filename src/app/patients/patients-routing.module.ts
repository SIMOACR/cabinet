import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { MyrdvsComponent } from '../myrdvs/myrdvs.component';
import { RdvHistoryComponent } from '../rdv-history/rdv-history.component';
import { ConsultationsComponent } from '../consultations/consultations.component';
import { Myrdvs1Component } from '../myrdvs1/myrdvs1.component';


const patientsRoutes: Routes = [
  {
    path: '',
    component: Myrdvs1Component,
    children: [
      {path: '', redirectTo: 'myrdvs', pathMatch: 'full' },
      {path: 'calendar', component: CalendarComponent },
      {path: 'myrdvs', component: MyrdvsComponent },
      {path: 'myRdvHistory', component: RdvHistoryComponent },
      {path: 'consultations/:rdvId', component: ConsultationsComponent }
    ]
  }
];

@NgModule({
  declarations: [Myrdvs1Component],
  imports: [RouterModule.forChild(patientsRoutes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
