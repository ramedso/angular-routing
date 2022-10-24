import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  name: String = 'Rafael Souza';
  zeros: String = '00';
  raNumber: number = 50832021008;
  currentDate = new Date();

  constructor() {}

  ngOnInit() {}

  getName(): String {
    return this.name;
  }

  getRaNumber(): number {
    return this.raNumber;
  }

  getZeros(): String {
    return this.zeros;
  }

  getCompleteNumber(): String {
    return 'RA: ' + this.getZeros().toString() + this.getRaNumber().toString();
  }

  getDate(): Date {
    return this.currentDate;
  }
}
