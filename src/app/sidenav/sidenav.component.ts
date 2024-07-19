import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuItems = [
    { name: 'Home', link: 'home' },
    { name: 'Add Workout', link: 'add-list' },
    { name: 'Search in List', link: 'workout-list' },
    { name: 'Charts', link: 'workout-chart' }
  ];
  shouldRun = true;
  opened = false;
  closed = !this.opened;
  events: string[] = [];

  toggleShouldRun() {
    this.shouldRun = !this.shouldRun;
  }

  toggleSidenav() {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }
}
