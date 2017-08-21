import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  private logins: Array<Login>;

  constructor(private routeInfo: ActivatedRoute) {
    const fb = new FormBuilder();
    // this.formModel = fb.group({
    //   username: ['', Validators.minLength(3)],
    //   password: [null, this.passValidator]
    // });


    this.logins = [
      new Login('zhaobo', '123456'),
      new Login('ttuser', '123456'),
      new Login('ttebd', '123456'),
      new Login('wix', '123456'),
    ];


  }

  passValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    } else {
    }
    return {pass: true};
  }

  // formModel: FormGroup;
  getAllCategories(): string[] {
    return ['zhaobo', 'ttuser'];
  }

  onLogin() {
  }

  ngOnInit() {
    this.login = this.routeInfo.snapshot.params['login'];
  }
}

export class Login {
  constructor(public username: string,
              public password: string) {
  }
}


