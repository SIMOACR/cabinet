import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScheduleModule, 
    RecurrenceEditorModule,
  ],
  exports: [
    ScheduleModule, 
    RecurrenceEditorModule,
  ],
  providers: [
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService
  ]
})
export class SyncfusionModule { }
