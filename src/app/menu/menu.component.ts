import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  classList: string[] = ['icon', 'c_hamburger'];
  constructor() { }

  ngOnInit() {
  }

  click(e) {
    let open = 'open';
    var i = this.classList.indexOf(open);
    if (i === -1)
      this.classList.push(open);
    else
      this.classList.splice(i, 1);
  }

}