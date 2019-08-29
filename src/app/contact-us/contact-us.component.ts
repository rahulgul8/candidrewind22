import { Component, OnInit } from '@angular/core';
import { floatIn } from '../animation'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [floatIn],
  host: {
    '[@floatIn]': ''
  }
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}