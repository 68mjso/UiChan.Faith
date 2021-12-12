import * as $ from 'jquery';
//Smoke animation

export const createSmoke = () => {
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
}

//Rain animation

export const startRain = () => {
    let count = 0;
    setInterval(() => {
        createRain(count);
        count++;
    }, 500);
}

export const createRain = (index: Number) => {
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
        complete: () => {
            //remove element on completed
            $(`#item${index}`).remove();
        },
        step: (now) => {
            //rotate element
            $(`#item${index}`).css({
                transform: `rotate(${now}deg)`,
            })
        }
    });
    $("#effectContainer").append(credit);
}