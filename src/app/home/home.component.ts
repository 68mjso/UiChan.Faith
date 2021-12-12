import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from "@app/@shared/api.service";
import * as route from '@core/url';
import { bounceInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rubberBandOnEnterAnimation } from 'angular-animations';

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

  content: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  sendWish() {
    const url = route.url_wish;
    this.api.sendPost(url, {
      content: this.content
    });
  }

  handleWish() {
    if (!this.hasWished) {
      var SmokeMachine = require('@bijection/smoke');
      var canvas: any = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');

      var party = SmokeMachine(ctx, [133, 133, 133, 0.8]);

      party.start() // start animating

      party.addSmoke(500, 500, 10) // wow we made smoke

      party.setPreDrawCallback(function (dt: any) {
        party.addSmoke(innerWidth / 2, innerHeight, .5)
        canvas.width = innerWidth
        canvas.height = innerHeight
      })
      // setTimeout(function () {

      //   party.stop() // stop animating

      //   party.addSmoke(600, 500, 100)
      //   party.addSmoke(500, 600, 20)

      //   for (var i = 0; i < 10; i++) {
      //     party.step(10) // pretend 10 ms pass and rerender
      //   }

      //   setTimeout(function () {
      //     party.start()
      //   }, 1000)

      // }, 1000)
      this.sendWish();
      this.hideSidebar();
      this.dropAnimation();
      this.hasWished = true;
    }
  }

  hideSidebar() {
    $("#wishForm").css({
      "left": "-400px",
    });
  }

  createElement(index: Number) {
    let item = '';
    let roll = Math.floor(Math.random() * 3);
    switch (roll) {
      case 1:
        item = "Acquaint_Fate.png";
        break;
      case 2:
        item = "Intertwined_Fate.png";
        break;
      default:
        item = "uichancredit.png";
        break;
    }
    const left = Math.floor(Math.random() * 1920);
    let x = left;
    const duration = (Math.floor(Math.random() * 20) + 5) * 1000;
    const credit = $(`<div id="item${index}"></div>`).css({
      "position": "fixed",
      "width": "64px",
      "height": "36px",
      "top": "-100px",
      "left": `${left}px`,
      "background-image": `url('assets/${item}')`,
      "background-size": roll == 0 ? "64px 36px" : "36px 36px",
      "background-repeat": "no-repeat",
      'transform': 'rotate(0deg)'
    }).animate({
      top: '1080px',
      deg: 360
    }, {
      duration: duration,
      delay: Math.floor(Math.random() * 30) + 1,
      easing: "linear",
      // complete: this.createElement,
      step: (now) => {
        $(`#item${index}`).css({
          transform: `rotate(${now}deg)`,
        })
      }
    });
    $("#effectContainer").append(credit);
  }

  dropAnimation() {
    let count = 0;
    let interval = setInterval(() => {
      this.createElement(count);
      if (count > 100) {
        clearInterval(interval);
      } else {
        count++;
      }
    }, 500);
  }
}
