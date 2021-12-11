import { Component, OnDestroy, OnInit } from '@angular/core';
import { bounceInRightOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation({ anchor: 'enter1' }),
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 200 }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200 })
  ]
})
export class AboutComponent implements OnInit, OnDestroy {

  image: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
