import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = new User();

    let today: any = new Date();
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 2);
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    // tslint:disable-next-line:max-line-length
    const max = `${maxDate.getFullYear()}-${maxDate.getMonth() < 10 ? '0' + maxDate.getMonth() : maxDate.getMonth()}-${maxDate.getDate() < 10 ? '0' + maxDate.getDate() : maxDate.getDate()}`;
    console.log(max);
    document.getElementById('datefield').setAttribute('min', today);
    document.getElementById('datefield').setAttribute('max', max);
  }

  success() {
    if (Math.random() > 0.5) {
      this.router.navigate(['./success'], { relativeTo: this.route });
    } else {
      this.router.navigate(['./error'], { relativeTo: this.route });
    }
  }
}
