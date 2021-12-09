import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handlePray() {
    const container = document.getElementById("effectContainer");
    let count = 0;
    let interval = setInterval(() => {
      var credit = document.createElement("div");
      credit.style.position = "fixed";
      credit.style.width = "64px";
      credit.style.height = "36px";
      credit.style.top = "-100px";
      credit.style.left = "100px";
      credit.style.backgroundImage = `url('assets/uichancredit.png')`;
      credit.style.backgroundSize = "64px 36px";
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
