import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from './animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition
    // animation triggers go here
  ]
})
export class AppComponent {

  title = 'candidRewind';

  navLinks: any[] = [{ path: "contactus", label: "Contact us" }, { path: "home", label: "Home" }, { path: "gallery", label: "Gallery" }];

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
