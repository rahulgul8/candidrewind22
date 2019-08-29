import { Component, OnInit } from '@angular/core';
import { trigger, stagger, animate, style, group, query, transition, keyframes } from '@angular/animations';
import { floatIn } from '../animation'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [floatIn],
  host: {
    '[@floatIn]': ''
  }
})
export class HomeComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  albums = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}