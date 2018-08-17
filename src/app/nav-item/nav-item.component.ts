import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() text: string;
  @Input() route: string;
  @Input() icon: string;

  constructor(
    public router: Router
  ) { }

  ngOnInit() { }
}
