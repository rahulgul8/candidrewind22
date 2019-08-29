import { Component, OnInit } from '@angular/core';
import { trigger, stagger, animate, style, group, query, transition, keyframes } from '@angular/animations';


export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    query('section', style({ opacity: 0 }), { optional: true }),
    query('section', stagger(300, [
      style({ transform: 'translateY(200px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true }),
  ])
  // ,
  // transition(':leave', [
  //   query('section', stagger(300, [
  //     style({ transform: 'translateY(0px)', opacity: 1 }),
  //     animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(100px)', opacity: 0 })),
  //   ]), { optional: true }),
  // ])
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [homeTransition],
  host: {
    '[@homeTransition]': ''
  }
})
export class HomeComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  albums = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}