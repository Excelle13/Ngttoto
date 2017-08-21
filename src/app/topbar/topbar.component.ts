import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input()
  serviceName: string;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // this.serviceName = this.routeInfo.snapshot.params[this.serviceName];
    this.serviceName = this.routeInfo.snapshot.params['topbar'];
  }


}


