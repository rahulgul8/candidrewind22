import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { routerTransition, changeScreen } from './animation';
import { interval, of, timer } from 'rxjs';
import { switchMap, map, repeat } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition,
    changeScreen
  ]
})
export class AppComponent implements OnInit {

  title = 'candidRewind';

  navLinks: any[] = [{ path: "contactus", label: "Contact us" }, { path: "home", label: "Home" }, { path: "gallery", label: "Gallery" }];

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  state: boolean = true;

  toggleState() {
    this.state = this.state ? false : true;
  }

  ngOnInit() {
    of("").pipe(switchMap(() => timer(this.getRandomDelay()))).pipe(repeat()).subscribe(e => this.toggleState());

  }

  getRandomNumber() {
    return ~~(Math.random() * 200)
  }

  getRandomDelay() {
    let v = (Math.random() * 1000) + 5000;
    return v;
  }
}
