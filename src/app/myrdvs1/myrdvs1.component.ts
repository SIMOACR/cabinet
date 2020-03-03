import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myrdvs1',
  templateUrl: './myrdvs1.component.html',
  styleUrls: ['./myrdvs1.component.css']
})
export class Myrdvs1Component implements OnInit {

  patthname;
  interfaceName;
  isPatient;
  constructor() {
  }

  ngOnInit() {
    this.interfaceName = this.constructor.name;
    this.isPatient = true;
    this.path();
  }

  path() {
    this.patthname = window.location.pathname;
  }

}
