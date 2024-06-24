import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('out => in', [
        animate('300ms ease-in')
      ]),
      transition('in => out', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'HRRR';

  sidebarState: string = 'out';

  toggleSidebar() {
    this.sidebarState = this.sidebarState === 'out' ? 'in' : 'out';
  }
  
  display:boolean = false;
}
