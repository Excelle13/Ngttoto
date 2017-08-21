import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-query',
  templateUrl: './business-query.component.html',
  styleUrls: ['./business-query.component.css']
})
export class BusinessQueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goback() {
    window.history.back();
  }
}
