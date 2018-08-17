import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { JsonPipe } from '@angular/common';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HCI';

  NavItems: NavItem[] = [
    {
      text: 'Home',
      icon: 'fa-home',
      route: '/index'
    },
    {
      text: 'Book an Appointment',
      icon: 'fa-calendar',
      route: '/booking'
    },
    {
      text: 'Contact Us',
      icon: 'fa-phone',
      route: '/contact'
    }
  ];

  constructor(public snackBar: MatSnackBar) {
    console.log(this.NavItems);
  }

  openSnackBar() {
    this.snackBar.open('Appointment saved successfully', 'Ok');
  }

  spin(elem: any) {
    if (elem.target.classList.contains('fa-spin')) {
      elem.target.classList.remove('fa-spin');
    } else {
      elem.target.classList.add('fa-spin');
    }
  }
}
