import { Component, OnInit } from '@angular/core';
import { ApiService } from "@app/@shared/api.service";
import * as route from '@core/url';
import { bounceInLeftOnEnterAnimation, bounceOutLeftOnLeaveAnimation, bounceInOnEnterAnimation, fadeOutAnimation } from 'angular-animations';
import * as $ from 'jquery';
import { startRain, createSmoke } from '@core/utilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    bounceInLeftOnEnterAnimation({ anchor: 'formEnter' }),
    bounceOutLeftOnLeaveAnimation({ anchor: 'formLeave' }),
    bounceInOnEnterAnimation({ anchor: 'prayEnter' }),
    fadeOutAnimation({ anchor: 'prayLeft' })
  ]
})
export class HomeComponent implements OnInit {

  hasWished: boolean = false;

  isInvalidInput: boolean = false;

  content: string = '';

  prayerCount: Number = 0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.getPrayerCount();
  }

  validateInput() {
    if (this.content.trim() == "") {
      this.isInvalidInput = true;
      return false;
    }
    return true;
  }

  sendWish() {
    if (!this.validateInput()) {
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
  }

  handleWish() {
    if (!this.hasWished) {
      this.sendWish();
      setTimeout(() => {
        $("#prayer").animate({
          top: "500px",
          left: "850px",
          opacity: 0
        }, {
          duration: 1000,
        });
        setTimeout(() => {
          startRain();
          createSmoke();
        },1000);
      }, 1000);

    }
    this.hasWished = true;
  }

}
