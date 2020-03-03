import { TestComponent } from './../test/test.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isVisible = true;
  constructor(private dialog: MatDialog) {
    console.log("Date1");
    console.log(new Date().getDay());
    console.log(new Date().getMonth());
    console.log(new Date().getFullYear());
   }

  ngOnInit() {
    console.log("gggggg");
    console.log(window.location.pathname);
  }

  openDialog(){
    this.dialog.open(TestComponent);
  }

}
