import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileLinksVisibilityService {
  calendarLinkVisibility: boolean;
  myRdvsLinkVisibility: boolean;
  historyLinkVisibility: boolean;
  constructor() {
    this.calendarLinkVisibility = false;
    this.myRdvsLinkVisibility = false;
    this.historyLinkVisibility = false;
   }

   showCalendar() { this.calendarLinkVisibility = true; }
   hideCalendar() { this.calendarLinkVisibility = false; }
   showMyrdvs() { this.myRdvsLinkVisibility = true; }
   hideMyrdvs() { this.myRdvsLinkVisibility = false; }
   showHistory() { this.historyLinkVisibility = true; }
   hideHistory() { this.historyLinkVisibility = false; }
   hideAll() { 
     this.hideCalendar();
     this.hideMyrdvs();
     this.hideHistory(); 
    }
   
}
