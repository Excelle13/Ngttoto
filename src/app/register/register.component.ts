import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: string;


  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.register = this.routeInfo.snapshot.params['register'];
  }

}

export class Register {
  constructor(public username: string,
              public password: string,
              public email: string,
              public phone: number) {
  }
}
