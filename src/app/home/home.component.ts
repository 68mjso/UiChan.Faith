import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from "@core/api.service";
import { environment } from "@env/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hasWished: boolean = false;

  content: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  sendWish() {
    const url = environment.apiWish;
    if (url != null) {
      this.api.sendPost(url, {
        content: this.content
      });
    }
  }

  handleWish() {
    if (!this.hasWished) {
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

  dropAnimation() {
    const container = document.getElementById("effectContainer");

    let count = 0;
    let interval = setInterval(() => {
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
      var credit = document.createElement("div");
      credit.style.position = "fixed";
      credit.style.width = "64px";
      credit.style.height = "36px";
      credit.style.top = "-100px";
      credit.style.left = "100px";
      credit.style.backgroundImage = `url('assets/${item}')`;
      credit.style.backgroundSize = roll == 0 ? "64px 36px" : "36px 36px";
      credit.style.backgroundRepeat = "no-repeat";
      var left = Math.floor(Math.random() * 1920);
      credit.animate([
        {
          left: `${left}px`,
          top: `${-100}px`
        }, {
          left: `${left}px`,
          top: `${1000}px`
        }
      ], {
        // duration: (Math.floor(Math.random() * 30) + 15) * 1000,
        duration: 10000,
        iterations: Infinity,
        // iterationStart: Math.random(),
        delay: Math.floor(Math.random() * 30) + 1,
        easing: "linear"
      })
      if (container) {
        container.appendChild(credit)
        if (count > 100) {
          clearInterval(interval);
        } else {
          count++;
        }
      }
    }, 500);
  }
}
