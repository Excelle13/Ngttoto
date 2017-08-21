import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  showImg(x) {
    const a = document.getElementById('wechat');
    // alert(x);
    // x.getAttribute('style').display = 'block';
    a.style.display = 'block';
  }

  hideImg(x) {
    const a = document.getElementById('wechat');
    a.style.display = 'none';
    // x.getAttribute('style').display = 'none';
  }

  showMobile() {
    const a = document.getElementById('mobile');
    a.style.display = 'block';
  }

  hideMobile() {
    const a = document.getElementById('mobile');
    a.style.display = 'none';
  }

}

export class Contact {

}
