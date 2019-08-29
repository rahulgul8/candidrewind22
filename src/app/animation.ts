import { sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
    sequence([
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ])
]);

export const floatIn = trigger('floatIn', [
  transition(':enter', [
    query('section', style({ opacity: 0 }), { optional: true }),
    query('section', stagger(300, [
      style({ transform: 'translateY(200px)' }),
      animate('0.3s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true }),
  ])
  ,
  transition(':leave', [
    query('section', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('0.3s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(100px)', opacity: 0 })),
    ]), { optional: true }),
  ])
]);