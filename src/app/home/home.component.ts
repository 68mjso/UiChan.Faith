import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from "@app/@shared/api.service";
import * as route from '@core/url';
import { bounceInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rubberBandOnEnterAnimation } from 'angular-animations';

import { startRain, createSmoke } from '@core/utilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    rubberBandOnEnterAnimation({ anchor: 'enter1', delay: 500 }),
    bounceInLeftOnEnterAnimation({ anchor: 'enter' }),
  ]
})
export class HomeComponent implements OnInit {

  hasWished: boolean = false;

  isInvalidInput: boolean = false;

  content: string = '';

  prayerCount: Number = 0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPrayerCount();
  }

  validateInput() {
    if (this.content.trim() == "") {
      this.isInvalidInput = true;
      return false;
    }
    return true;
  }

  sendWish() {
    if (!this.validateInput) {
      return;
    }
    const url = route.url_wish;
    this.api.sendPost(url, {
      content: this.content
    });
  }

  async getPrayerCount() {
    const response = await this.api.sendGet(route.url_wish_count);
    console.log(response);
    if (response) {

    }
  }

  handleWish() {
    if (!this.hasWished) {
      startRain();
      createSmoke();
      this.sendWish();
      this.hideSidebar();
      this.hasWished = true;
    }
  }

  hideSidebar() {
    $("#wishForm").css({
      "left": "-400px",
    });
  }

}
