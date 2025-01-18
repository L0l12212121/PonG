// ==UserScript==
// @name         [Diep.io] rbest = best
// @description  made with much fuck
// @version      1111
// @author       rbest (ft. _mikey____)
// @match        *://diep.io/*
// @match        *://diep-io.rivet.game/*
// @match        *://diepcustom.live/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==
/*
 *   M I L L I O N S   C O U N T E R
 */
(function() {
    const handler = {
        apply(r,o,args) {
            Error.stackTraceLimit = 0;
            return r.apply(o,args)
        }
    }
    Object.freeze = new Proxy(Object.freeze, handler)
})();

window.addEventListener('DOMContentLoaded', function() {
let Total_1ms = 0;
let Total_2ms = 0;
let Total_3ms = 0;
let Total_4ms = 0;

let This_year_1ms = 0;
let This_year_2ms = 0;
let This_year_3ms = 0;
let This_year_4ms = 0;

const date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth() + 1;
let Day = date.getDate();
if (localStorage.getItem('LastSessionYear') == null) {
    localStorage.setItem('LastSessionYear', Year);
}
if (localStorage.getItem('LastSessionYear') != Year) {
    localStorage.setItem('LastSessionYear', Year);

    localStorage.setItem('This_year_1ms', 0);
    localStorage.setItem('This_year_2ms', 0);
    localStorage.setItem('This_year_3ms', 0);
    localStorage.setItem('This_year_4ms', 0);
}

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.ctrlKey && 'KeyC' === event.code) {
        localStorage.setItem('Total_1ms', Total_1ms);
        localStorage.setItem('Total_2ms', Total_2ms);
        localStorage.setItem('Total_3ms', Total_3ms);
        localStorage.setItem('Total_4ms', Total_4ms);
        localStorage.setItem('This_year_1ms', This_year_1ms);
        localStorage.setItem('This_year_2ms', This_year_2ms);
        localStorage.setItem('This_year_3ms', This_year_3ms);
        localStorage.setItem('This_year_4ms', This_year_4ms);
        TotalMillions.innerHTML = `
        <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
        <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
        <div class="child">1millions: ${localStorage.getItem('Total_1ms')}</div>
        <div class="child">2millions: ${localStorage.getItem('Total_2ms')}</div>
        <div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
        <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
        </div>
        `;
        ThisYearMillions.innerHTML = `
        <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
        <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
        <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}</div>
        <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}</div>
        <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
        <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
        </div>
        `;
    }
});

if (localStorage.getItem('Total_1ms') == null) {
    localStorage.setItem('Total_1ms', Total_1ms);
}
if (localStorage.getItem('Total_2ms') == null) {
    localStorage.setItem('Total_2ms', Total_2ms);
}
if (localStorage.getItem('Total_3ms') == null) {
    localStorage.setItem('Total_3ms', Total_3ms);
}
if (localStorage.getItem('Total_4ms') == null) {
    localStorage.setItem('Total_4ms', Total_4ms);
}


if (localStorage.getItem('This_year_1ms') == null) {
    localStorage.setItem('This_year_1ms', This_year_1ms);
}
if (localStorage.getItem('This_year_2ms') == null) {
    localStorage.setItem('This_year_2ms', This_year_2ms);
}
if (localStorage.getItem('This_year_3ms') == null) {
    localStorage.setItem('This_year_3ms', This_year_3ms);
}
if (localStorage.getItem('This_year_4ms') == null) {
    localStorage.setItem('This_year_4ms', This_year_4ms);
}

const Score = document.createElement("div");
let yourScore = 0;
let opponentScore = 0;

Score.innerHTML =
`<div class="scoreboard">
  <div class="player">
    <span>You</span>
    <strong class="yourScore">${yourScore}</strong>
  </div>
  <div class="player">
    <span>Opponent</span>
    <strong class="opponentScore">${opponentScore}</strong>
  </div>
</div>
`;
const styleElement = document.createElement("style");
styleElement.textContent =
  `.scoreboard {
  opacity: 0;
  transition: opacity 0.5s ease, visibility 0.5s;
  overflow: hidden;
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 65%;
    text-shadow:
      0.18vh 0vh black,
      -0.18vh 0vh black,
      0vh -0.18vh black,
      0vh 0.18vh black,
      0.18vh 0.18vh black,
      -0.18vh 0.18vh black,
      0.18vh -0.18vh black,
      -0.18vh -0.18vh black,
      0.09vh 0.18vh black,
      -0.09vh 0.18vh black,
      0.09vh -0.18vh black,
      -0.09vh -0.18vh black,
      0.18vh 0.09vh black,
      -0.18vh 0.09vh black,
      0.18vh -0.09vh black,
      -0.18vh -0.09vh black;
  }
  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    color: #333;
  }
  .player:first-child {
    color: #00e16e;
    margin-right: 200px;
  }
  .player:last-child {
    color: #f14e54;
  }
  .player span {
    font-size: 28px;
  }
  .player strong {
  font-size: 48px;
}
`
;
Score.style.visibility = 'hidden';

const scriptElement = document.createElement("script");
scriptElement.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
scriptElement.onload = function() {
    window.updateScoreAnimated = function(newYourScore, newOpponentScore) {
        UpdateName();
        var yourScoreElem = document.querySelector('.yourScore');
        var opponentScoreElem = document.querySelector('.opponentScore');
        const tl = gsap.timeline();
        tl.to('.scoreboard', { duration: 0.5, opacity: '65%', visibility: 'visible' });

        if (newYourScore !== yourScore) {
            tl.to(yourScoreElem, { duration: 0.3, scale: 0, opacity: 1, ease: "power2.inOut" })
                .call(function() {
                yourScoreElem.innerText = newYourScore;
            })
                .to(yourScoreElem, { duration: 0.3, scale: 1, opacity: 1, ease: "power2.inOut" }, '+=0.2');
        }

        if (newOpponentScore !== opponentScore) {
            tl.to(opponentScoreElem, { duration: 0.3, scale: 0, opacity: 1, ease: "power2.inOut" })
                .call(function() {
                opponentScoreElem.innerText = newOpponentScore;
            })
                .to(opponentScoreElem, { duration: 0.3, scale: 1, opacity: 1, ease: "power2.inOut" }, '+=0.2');
        }
        tl.to('.scoreboard', { duration: 0.5, opacity: 0}, '+=1');
        tl.to('.scoreboard', { duration: 0.5, opacity: 0, visibility: 'hidden' }, '+=0.2');
    }

};



const TotalMillions = document.createElement("div");

TotalMillions.innerHTML = `
<div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
<div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
<div class="child">1millions: ${localStorage.getItem('Total_1ms')}</div>
<div class="child">2millions: ${localStorage.getItem('Total_2ms')}</div>
<div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
<div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
</div>
`;


const ThisYearMillions = document.createElement("div");

ThisYearMillions.innerHTML = `
<div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
<div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
<div class="child">1millions: ${localStorage.getItem('This_year_1ms')}</div>
<div class="child">2millions: ${localStorage.getItem('This_year_2ms')}</div>
<div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
<div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
</div>
`;


/*
 *   B A Z E   Z O N E   A L E R T
 */
'use strict';
const textContainer = document.createElement("div");

document.body.appendChild(textContainer);
document.body.appendChild(Score);
document.body.appendChild(ThisYearMillions);
document.body.appendChild(TotalMillions);
document.head.appendChild(styleElement);
document.head.appendChild(scriptElement);

textContainer.style.display = 'none';
function baseZoneAlert() {
    let gamemode = localStorage.getItem('gamemode');
    if (gamemode === 'sandbox' || gamemode === 'ffa' || gamemode === 'maze' || gamemode === 'event') {
        textContainer.style.display = 'none';
    }
    if (gamemode === 'teams') {
        if ((player.x < 0.25 || player.x > 0.75) && player.x != NaN && btnBazeZoneAlert.active && !btnHideUI.active) {
            textContainer.style.display = 'block';
        } else {
            textContainer.style.display = 'none';
        }
        // Blue
        if (player.x < 0.25) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; center:50%; font-family:Ubuntu; color:#00b2e1	; font-style:normal; font-size:3.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Blue drones can chase you
            </div>`;
        }
        if (player.x < 0.194) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; right:50%; font-family:Ubuntu; color:#00b2e1	; font-style:normal; font-size:5.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Blue drones are attacking you
            </div>`;
        }
        // Red
        if (player.x > 0.75) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; center:50%; font-family:Ubuntu; color:#f14e54	; font-style:normal; font-size:3.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Red drones can chase you
            </div>`;
        }
        if (player.x > 0.806) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; right:50%; font-family:Ubuntu; color:#f14e54	; font-style:normal; font-size:5.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Red drones are attacking you
            </div>`;
        }
    }
    if (gamemode === '4teams') {
        let distFromBlue = Math.sqrt(Math.pow(player.x - 0.075, 2) + Math.pow(player.y - 0.075, 2));
        let distFromRed = Math.sqrt(Math.pow(player.x - 0.925, 2) + Math.pow(player.y - 0.925, 2));
        let distFromGreen = Math.sqrt(Math.pow(player.x - 0.075, 2) + Math.pow(player.y - 0.925, 2));
        let distFromPurple = Math.sqrt(Math.pow(player.x - 0.925, 2) + Math.pow(player.y - 0.075, 2));
        if ((distFromBlue < 0.237 || distFromRed < 0.237 || distFromGreen < 0.237 || distFromPurple < 0.237) && player.x != NaN && btnBazeZoneAlert.active && !btnHideUI.active) {
            textContainer.style.display = 'block';
        } else {
            textContainer.style.display = 'none';
        }
        //Blue
        if (distFromBlue < 0.237) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; center:50%; font-family:Ubuntu; color:#00b2e1	; font-style:normal; font-size:3.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Blue drones can chase you
            </div>`;
        }
        if (distFromBlue < 0.17) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; right:50%; font-family:Ubuntu; color:#00b2e1	; font-style:normal; font-size:5.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Blue drones are attacking you
            </div>`;
        }
        //Red
        if (distFromRed < 0.237) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; center:50%; font-family:Ubuntu; color:#f14e54	; font-style:normal; font-size:3.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Red drones can chase you
            </div>`;
        }
        if (distFromRed < 0.17) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; right:50%; font-family:Ubuntu; color:#f14e54	; font-style:normal; font-size:5.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Red drones are attacking you
            </div>`;
        }
        //Green
        if (distFromGreen < 0.237) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; center:50%; font-family:Ubuntu; color:#00e16e	; font-style:normal; font-size:3.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Green drones can chase you
            </div>`;
        }
        if (distFromGreen < 0.17) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; right:50%; font-family:Ubuntu; color:#00e16e	; font-style:normal; font-size:5.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Green drones are attacking you
            </div>`;
        //Purple
        }
        if (distFromPurple < 0.237) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; center:50%; font-family:Ubuntu; color:#bf7ff5	; font-style:normal; font-size:3.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Purple drones can chase you
            </div>`;
        }
        if (distFromPurple < 0.17) {
            textContainer.innerHTML = `
            <div style='pointer-events:none; user-select:none; text-align:center; bottom:95%; right:50%; font-family:Ubuntu; color:#bf7ff5	; font-style:normal; font-size:5.85vh; opacity:65%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            Purple drones are attacking you
            </div>`;
        }
    }
}
var arenaDim;
var score = NaN;
var fov;
var isAfk = 0;
var dead = true;
var showedBuilds = false;
var AlertState = 0;
//setup canvas
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = document.getElementById('canvas').getContext('2d');
});

// run main Loop
(function() {
    setInterval(() => {
        if (getScore() >= 0) {
            dead = false;
        }
        baseZoneAlert();
        if (getScore() == -1 && !showedBuilds && (typeof(btnAutoRespawn) != 'undefined' && !btnAutoRespawn.active)) {
            var someButtonActive = false;
            buildGui._buttons.forEach((button) => {
                button.style['background-color'] = "#2B2D2F";
                if (button.active == true) {
                    button.style['background-color'] = "#B8860B";
                    someButtonActive = true;
                }
                if (someButtonActive) {
                    buildGui._guiBody.style.display = 'block';
                } else if (gui._guiBody.style.display == 'none') {
                    buildGui._guiBody.style.display = 'none';
                }
                button.active = false;
            });
            showedBuilds = true;
        }
        if ((getScore() != -1 || btnHideUI.active) && settingsgui._guiBody.style.display == 'none') {
            TotalMillions.style.display = 'none';
            ThisYearMillions.style.display = 'none';
        } else {
            TotalMillions.style.display = 'block';
            ThisYearMillions.style.display = 'block';
        }
    }, 100);
})();
let _rScore = "0";
CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {
    apply(fillRect, ctx, [text, x, y, ...blah]) {
        if (text.startsWith('Score: ')) _rScore = text

        fillRect.call(ctx, text, x, y, ...blah);
    }
});
const getScore = () => {
    if (!input.should_prevent_unload()) return -1;
    return parseFloat(_rScore.slice(7).replace(/,/g, ''));
}
let pressedO = false;
let killCounted = false;
let killed = false;
let deathCounted = false;
let timeoutId;
let death = 0;
let spawned = false;
CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {
    apply(fillRect, ctx, [text, x, y, ...blah]) {
        if (text.startsWith('Score: ')) {
            death += 1;
            spawned = true;
            if (death == 1 && !deathCounted) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                    deathCounted = true
                } else if (!pressedO && typeof(btn1v1Score) != 'undefined' && btn1v1Score.active) {
                    updateScoreAnimated(yourScore, opponentScore + 1);
                    opponentScore += 1;
                    UpdateName();
                    deathCounted = true;
                }
            }
            if (death > 1) {
                deathCounted = false;
            }
        }
        if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active && text == "Copy party link" && !deathCounted && !input.should_prevent_unload()) {
            death = 0;
        }
        if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active && killed && !pressedO && !deathCounted) {
            deathCounted = true;
            const targetPlayer = ui.players.find(player => player.identityId === opponentID);
            if (targetPlayer && (text == targetPlayer.name || (text == "An unnamed tank" && targetPlayer.name == "")
                                 || text == "Triangle" || text == "Crasher" || text == "Pentagon" || text == "Square" || text == "Alpha Pentagon")) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                } else {
                    updateScoreAnimated(yourScore, opponentScore + 1);
                    opponentScore += 1;
                    UpdateName();
                }
            }
            killed = false;
        }
        if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active && text == "You were killed by:") killed = true;
        if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active && text.startsWith("You've killed") && !pressedO && !killCounted) {
            const targetPlayer = ui.players.find(player => player.identityId === opponentID);
            const killedName = text.substring(14);
            if (!timeoutId && targetPlayer && (killedName === targetPlayer.name || (killedName === "an unnamed tank" && targetPlayer.name === ""))) {
                if (!killCounted) {
                    killCounted = true;
                    setTimeout(function() {
                        killCounted = false;
                    }, 6000);
                    timeoutId = setTimeout(() => {
                        updateScoreAnimated(yourScore + 1, opponentScore);
                        yourScore += 1;
                        UpdateName();
                        timeoutId = null;
                    }, 1000);
                }
            }
        }
        fillRect.call(ctx, text, x, y, ...blah);
    }
});
/*
 *   C L A S S E S
 */
const codeToKey = {
  "Backquote": "`",
  "Backslash": "\\",
  "BracketLeft": "[",
  "BracketRight": "]",
  "Comma": ",",
  "Digit0": "0",
  "Digit1": "1",
  "Digit2": "2",
  "Digit3": "3",
  "Digit4": "4",
  "Digit5": "5",
  "Digit6": "6",
  "Digit7": "7",
  "Digit8": "8",
  "Digit9": "9",
  "Equal": "=",
  "IntlBackslash": "\\",
  "IntlRo": "¥",
  "IntlYen": "¥",
  "KeyA": "A",
  "KeyB": "B",
  "KeyC": "C",
  "KeyD": "D",
  "KeyE": "E",
  "KeyF": "F",
  "KeyG": "G",
  "KeyH": "H",
  "KeyI": "I",
  "KeyJ": "J",
  "KeyK": "K",
  "KeyL": "L",
  "KeyM": "M",
  "KeyN": "N",
  "KeyO": "O",
  "KeyP": "P",
  "KeyQ": "Q",
  "KeyR": "R",
  "KeyS": "S",
  "KeyT": "T",
  "KeyU": "U",
  "KeyV": "V",
  "KeyW": "W",
  "KeyX": "X",
  "KeyY": "Y",
  "KeyZ": "Z",
  "Minus": "-",
  "Period": ".",
  "Quote": "'",
  "Semicolon": ";",
  "Slash": "/",
  "Space": "",
  "Backspace": "Bksp",
  "Enter": "Ent",
  "Tab": "Tab",
  "CapsLock": "CapLck",
  "Escape": "Esc",
  "ArrowDown": "⬇",
  "ArrowLeft": "⬅",
  "ArrowRight": "➡",
  "ArrowUp": "⬆",
  "End": "End",
  "Home": "Home",
  "Insert": "Ins",
  "PageDown": "PgDn",
  "PageUp": "PgUp",
  "Delete": "Del",
  "ContextMenu": "CtxMenu",
  "ControlLeft": "Ctrl",
  "ControlRight": "Ctrl",
  "AltLeft": "Alt",
  "AltRight": "Alt",
  "ShiftLeft": "Shift",
  "ShiftRight": "Shift",
  "MetaLeft": "Meta",
  "MetaRight": "Meta",
  "OSLeft": "OS",
  "OSRight": "OS",
  "F1": "F1",
  "F2": "F2",
  "F3": "F3",
  "F4": "F4",
  "F5": "F5",
  "F6": "F6",
  "F7": "F7",
  "F8": "F8",
  "F9": "F9",
  "F10": "F10",
  "F11": "F11",
  "F12": "F12",
  "NumLock": "NumLck",
  "ScrollLock": "ScrLck",
};
class Gui {
    constructor(title) {
        this._colors = ['#2B2D2F'];
        this._buttons = [];
        this._keyCodeButtons = [];
        this._defaultKeyCodes = {};

        this._title = title;
        this._gui;
        this._guiHead;
        this._guiBody;
        this.gamemode = null;

        this._init();

        this._enableShortcuts();
    }

    _init() {
        const nonce = `a${(Math.random() * 1e5) | 0}`;
GM_addStyle(
    `.${nonce} {
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
    }
    .${nonce} .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        z-index: 9998;
    }
    .${nonce} button{
        font-family: Ubuntu;
        color: #fff;
        text-shadow: -.1em -.1em 0 #000, 0 -.1em 0 #000, .1em -.1em 0 #000, .1em 0 0 #000, .1em .1em 0 #000, 0 .1em 0 #000, -.1em .1em 0 #000, -.1em 0 0 #000;
        opacity: 0.8;
        padding: .3em .5em;
        width: 100%;
        transition: all .15s;
        white-space: nowrap;
        z-index: 9998;
    }
    .${nonce} .keycode-button {
        width: 30px;
        background-color: #2B2D2F;
        z-index: 9999;
    }
    .${nonce} button:active:not([disabled]) {
        filter: brightness(1.5);
    }
    .${nonce} button:hover:not([disabled]):not(:active) {
        filter: brightness(1.5);
    }`
);
        this._gui = document.createElement('div');
        this._guiHead = document.createElement('div');
        this._guiBody = document.createElement('div');

        this._gui.className = `${nonce}`;
        this._guiBody.style.display = 'block';

        document.body.appendChild(this._gui);
        this._gui.appendChild(this._guiHead);
        this._gui.appendChild(this._guiBody);
    }

    addButton(text, onclick, keyCode) {
        if (!keyCode) {
             keyCode = null;
        }
        this._defaultKeyCodes[text] = keyCode;
        return this._addButton(this._guiBody, text, onclick, keyCode);
    }

    resetKeyCodes() {
        this._buttons.forEach((button) => {
            let text = button.innerHTML;
            if (text.startsWith('0')) text = '00:00:00';
            button.keyCode = this._defaultKeyCodes[text];
            button.parentNode.querySelector('.keycode-button').innerHTML = button.keyCode ? codeToKey[button.keyCode] : '-';
        });
        localStorage.setItem('buttonKeyCodes', JSON.stringify(this._defaultKeyCodes));
    }

    removeButton(button) {
        button.active = false;
        button.parentNode.remove();
    }

    destroy() {
        document.removeEventListener('keydown', this._keyDownHandler);
        this._buttons.forEach((button) => {
            this.removeButton(button);
        });
        this._guiHead.remove();
        this._guiBody.remove();
        this._gui.remove();
    }

    _addButton(parent, text, onclick, keyCode) {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'button-wrapper';

        const buttonText = document.createElement('div');
        buttonText.innerHTML = text;

        const keyCodeButton = document.createElement('button');
        keyCodeButton.className = 'keycode-button';
        keyCodeButton.onclick = () => this._setKeyCode(mainButton, keyCodeButton);

        const mainButton = document.createElement('button');

        const savedCustomKeyBindings = JSON.parse(localStorage.getItem('buttonKeyCodes'));
        if (savedCustomKeyBindings && (text in savedCustomKeyBindings)) {
            mainButton.keyCode = savedCustomKeyBindings[text];
        } else {
            mainButton.keyCode = keyCode;
        }
        mainButton.innerHTML = text;
        mainButton.onclick = onclick;

        keyCodeButton.innerHTML = mainButton.keyCode ? codeToKey[mainButton.keyCode] : '-';

        if (text == "Prediction Movement" && localStorage.getItem('predictionMovement') == "true") {
            mainButton.style['background-color'] = "#008000";
            mainButton.active = true;
        } else {
            mainButton.style['background-color'] = this._colors[this._buttons.length % this._colors.length];
        }

        buttonWrapper.appendChild(keyCodeButton);
        buttonWrapper.appendChild(mainButton);

        parent.appendChild(buttonWrapper);
        this._buttons.push(mainButton);
        this._keyCodeButtons.push(keyCodeButton);
        return mainButton;
    }

    _enableShortcuts() {
        document.addEventListener('keydown', (event) => {
            if (document.getElementById('textInputContainer').style.display === 'block') return;

            this._buttons.forEach((button) => {
                if (button.keyCode === event.code && ((!player.dead) || (event.altKey && player.dead))) button.onclick();
                if (70 === event.code) {
                    if (this._guiBody.style.display === 'block') {
                        this._guiBody.style.display = 'none';
                        buildGui._guiBody.style.display = 'none';
                    } else {
                        this._guiBody.style.display = 'block';
                        buildGui._guiBody.style.display = 'block';
                    }
                }
            });
        });
    }

    _setKeyCode(button, keyCodeButton) {
        if (settingsgui._guiBody.style.display === 'block') {
            keyCodeButton.innerHTML = '...';
            keyCodeButton.style['background-color'] = "#008000";
            const keyPressHandler = (event) => {
                if (event.key === "-") {
                    button.keyCode = null;
                } else {
                    button.keyCode = event.code;
                }
                keyCodeButton.innerHTML = codeToKey[event.code];
                document.removeEventListener('keydown', keyPressHandler);
                let buttonKeyCodes = JSON.parse(localStorage.getItem('buttonKeyCodes')) || {};
                let text = button.innerHTML;
                if (text.startsWith('0')) text = '00:00:00';
                buttonKeyCodes[text] = button.keyCode;
                localStorage.setItem('buttonKeyCodes', JSON.stringify(buttonKeyCodes));
                keyCodeButton.style['background-color'] = "#2B2D2F";
            };
            document.addEventListener('keydown', keyPressHandler);
        }
    }
}

class BuildGui {
        constructor(title) {
        this._colors = ['#2B2D2F'];
        this._buttons = [];
        this._keyCodeButtons = [];
        this._defaultKeyCodes = {};

        this._title = title;
        this._gui;
        this._guiHead;
        this._guiBody;

        this._init();

        this._enableShortcuts();
    }

    _init() {
        const nonce = `a${(Math.random() * 1e5) | 0}`;
GM_addStyle(
    `.${nonce} {
        position: absolute;
        top: 0;
        left: 0;
    }
    .${nonce} .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        z-index: 9999;
    }
    .${nonce} button{
        font-family: Ubuntu;
        color: #fff;
        text-shadow: -.1em -.1em 0 #000, 0 -.1em 0 #000, .1em -.1em 0 #000, .1em 0 0 #000, .1em .1em 0 #000, 0 .1em 0 #000, -.1em .1em 0 #000, -.1em 0 0 #000;
        opacity: 0.8;
        padding: .3em .5em;
        width: 85%;
        transition: all .15s;
        white-space: nowrap;
        z-index: 9999;
    }
    .${nonce} .keycode-button {
        width: 25px;
        background-color: #2B2D2F;
        z-index: 9999;
    }
    .${nonce} button:active:not([disabled]) {
        filter: brightness(1.5);
    }
    .${nonce} button:hover:not([disabled]):not(:active) {
        filter: brightness(1.5);
    }`
);
        this._gui = document.createElement('div');
        this._guiHead = document.createElement('div');
        this._guiBody = document.createElement('div');

        this._gui.className = `${nonce}`;
        this._guiBody.style.display = 'block';

        document.body.appendChild(this._gui);
        this._gui.appendChild(this._guiHead);
        this._gui.appendChild(this._guiBody);
    }

    addButton(text, onclick, keyCode) {
        if (!keyCode) {
             keyCode = null;
        }
        this._defaultKeyCodes[text] = keyCode;
        return this._addButton(this._guiBody, text, onclick, keyCode);
    }

    resetKeyCodes() {
        this._buttons.forEach((button) => {
            let text = button.innerHTML;
            if (text.startsWith('0')) text = '00:00:00';
            button.keyCode = this._defaultKeyCodes[text];
            button.parentNode.querySelector('.keycode-button').innerHTML = button.keyCode ? codeToKey[button.keyCode] : '-';
        });
        localStorage.setItem('buildButtonKeyCodes', JSON.stringify(this._defaultKeyCodes));
    }

    removeButton(button) {
        button.parentNode.remove();
        button.active = false;
    }

    destroy() {
        document.removeEventListener('keydown', this._keyDownHandler);
        this._buttons.forEach((button) => {
            this.removeButton(button);
        });
        this._guiHead.remove();
        this._guiBody.remove();
        this._gui.remove();
    }

    _addButton(parent, text, onclick, keyCode) {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'button-wrapper';

        const buttonText = document.createElement('div');
        buttonText.innerHTML = text;

        const keyCodeButton = document.createElement('button');
        keyCodeButton.className = 'keycode-button';
        keyCodeButton.onclick = () => this._setKeyCode(mainButton, keyCodeButton);

        const mainButton = document.createElement('button');

        const savedCustomKeyBindings = JSON.parse(localStorage.getItem('buildButtonKeyCodes'));
        if (savedCustomKeyBindings && savedCustomKeyBindings[text]) {
            mainButton.keyCode = savedCustomKeyBindings[text];
        } else {
            mainButton.keyCode = keyCode;
        }
        mainButton.innerHTML = text;
        mainButton.onclick = onclick;

        keyCodeButton.innerHTML = mainButton.keyCode ? codeToKey[mainButton.keyCode] : '-';

        if (text == "Prediction Movement" && localStorage.getItem('predictionMovement') == "true") {
            mainButton.style['background-color'] = "#008000";
            mainButton.active = true;
        } else {
            mainButton.style['background-color'] = this._colors[this._buttons.length % this._colors.length];
        }
        buttonWrapper.appendChild(mainButton);
        buttonWrapper.appendChild(keyCodeButton);

        parent.appendChild(buttonWrapper);
        this._buttons.push(mainButton);
        this._keyCodeButtons.push(keyCodeButton);
        return mainButton;
    }

    _setKeyCode(button, keyCodeButton) {
        if (settingsgui._guiBody.style.display === 'block') {
            keyCodeButton.innerHTML = '...';
            keyCodeButton.style['background-color'] = "#008000";
            const keyPressHandler = (event) => {
                if (event.key === "-") {
                    button.keyCode = null;
                } else {
                    button.keyCode = event.code;
                }
                keyCodeButton.innerHTML = codeToKey[event.code];
                document.removeEventListener('keydown', keyPressHandler);
                let buttonKeyCodes = JSON.parse(localStorage.getItem('buildButtonKeyCodes')) || {};
                let text = button.innerHTML;
                if (text.startsWith('0')) text = '00:00:00';
                buttonKeyCodes[text] = button.keyCode;
                localStorage.setItem('buildButtonKeyCodes', JSON.stringify(buttonKeyCodes));
                keyCodeButton.style['background-color'] = "#2B2D2F";
            };
            document.addEventListener('keydown', keyPressHandler);
        }
    }
    _enableShortcuts() {
        document.addEventListener('keydown', (event) => {
            if (document.getElementById('textInputContainer').style.display === 'block') return;
            this._buttons.forEach((button) => {
                if (button.keyCode === event.code) button.onclick();
            });
        });
    }
}
class SettingsGui {
    constructor(title) {
        this._colors = ['#2B2D2F'];
        this._buttons = [];

        this._title = title;
        this._gui;
        this._guiHead;
        this._guiBody;

        this._init();

        this._enableShortcuts();
    }

    _init() {
        const nonce = `a${(Math.random() * 1e5) | 0}`;
        GM_addStyle(
            `.${nonce} button{display:block;font-family:Ubuntu;color:#fff;text-shadow:-.1em -.1em 0 #000,0 -.1em 0 #000,.1em -.1em 0 #000,.1em 0 0 #000,.1em .1em 0 #000,0 .1em 0 #000,-.1em .1em 0 #000,-.1em 0 0 #000;opacity:0.8;border:0;padding:.3em .5em;width:100%;transition:all .15s}.${nonce}{top:50%;left:50%;position:absolute;z-index:9999}.${nonce} button:active:not([disabled]){filter:brightness(1.5)}.${nonce} button:hover:not([disabled]):not(:active){filter:brightness(1.5)}`

        );
        this._gui = document.createElement('div');
        this._guiHead = document.createElement('div');
        this._guiBody = document.createElement('div');


        this._gui.className = `${nonce}`;
        this._guiBody.style.display = 'none';

        document.body.appendChild(this._gui);
        this._gui.appendChild(this._guiHead);
        this._gui.appendChild(this._guiBody);

    }
    addButton(text, onclick, keyCode) {
        return this._addButton(this._guiBody, text, onclick, keyCode);
    }
    removeButton(button) {
        button.remove();
        button.active = true;
    }
    reset() {
        const head = this._buttons[0];
        this._buttons.forEach((x, i) => {
            if (i === 0) return;
            this.removeButton(x);
        });
        this._buttons = [head];
    }
    _addButton(parent, text, onclick, keyCode) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.keyCode = keyCode;
        button.onclick = onclick;
        button.style['background-color'] = this._colors[this._buttons.length % this._colors.length];
        button.addEventListener('contextmenu', (e) => e.preventDefault());

        parent.appendChild(button);
        this._buttons.push(button);
        return button;
    }
    _enableShortcuts() {
        document.addEventListener('keydown', (event) => {
            if (document.getElementById('textInputContainer').style.display === 'block') return;
            this._buttons.forEach((button) => {
                if (button.keyCode === event.code) button.onclick();
            });
        });
    }
}
let _minimapWidth = 0;
let _minimapHeight = 0;
let _x00 = 0;
let _y00 = 0;
class Minimap {
    constructor() {
        this._minimapWidth;
        this._minimapHeight;
        this._x00;
        this._y00;
        this._pointX;
        this._pointY;
        this._viewportWidth;
        this._viewportHeight;
        this._x;
        this._y;

        this._minimapHook();
        this._arrowHook();
    }
    _arrowHook() {
        let index = 0;
        const stack = Array(4);

        let pointA;
        let pointB;
        let pointC;

        const calculatePos = () => {
            const side1 = ((pointA[0] - pointB[0]) ** 2 + (pointA[1] - pointB[1]) ** 2) ** 0.5;
            const side2 = ((pointA[0] - pointC[0]) ** 2 + (pointA[1] - pointC[1]) ** 2) ** 0.5;
            const side3 = ((pointB[0] - pointC[0]) ** 2 + (pointB[1] - pointC[1]) ** 2) ** 0.5;

            this._pointX = (pointA[0] + pointB[0] + pointC[0]) / 3;
            this._pointY = (pointA[1] + pointB[1] + pointC[1]) / 3;

            const _strokeRect = CanvasRenderingContext2D.prototype.strokeRect;
            const _toString = Function.prototype.toString;
            let strokeRect;

            this._x = (this._pointX - _x00) / _minimapWidth;
            this._y = (this._pointY - _y00) / _minimapHeight;
        };

        function hook(target, callback){
            const check = () => {
                window.requestAnimationFrame(check)
                const func = CanvasRenderingContext2D.prototype[target]

                if(func.toString().includes(target)){

                    CanvasRenderingContext2D.prototype[target] = new Proxy (func, {
                        apply (method, thisArg, args) {
                            callback(thisArg, args)

                            return Reflect.apply (method, thisArg, args)
                        }
                    });
                }
            }
            check()
        }
        index = 0;

        hook('beginPath', function(context, args) {
            index = 0;
            stack[index++] = 0;
        });
        hook('moveTo', function(context, args) {
            if (index == 1 && stack[index - 1] == 0) {
                stack[index++] = 1;
                pointA = args;
            } else {
                index = 0;
            }
        });
        hook('lineTo', function(context, args) {
            if (index == 2 && stack[index - 1] == 1) {
                stack[index++] = 2;
                pointB = args;
            } else if (index == 3 && stack[index - 1] == 2) {
                stack[index++] = 2;
                pointC = args;
            } else {
                index = 0;
            }
        });
        hook('fill', function(context, args) {
            if (context.globalAlpha != 1 || context.fillStyle != '#000000') {
                return;
            }
            if (index == 4) {
                calculatePos();
                index = 0;
            }
        });
    }
    _minimapHook() {
        const _strokeRect = CanvasRenderingContext2D.prototype.strokeRect;
        const _toString = Function.prototype.toString;
        let strokeRect;
        strokeRect = function(...args) {
            const transform = this.getTransform();
            _minimapWidth = transform.a;
            _minimapHeight = transform.d;
            _x00 = transform.e;
            _y00 = transform.f;
            _strokeRect.call(this, ...args);
        }
        const toString = function() {

            switch(this) {
                case strokeRect: return _toString.call(_strokeRect);
                case toString: return _toString.call(_toString);
            }

            return _toString.call(this);

        };
        CanvasRenderingContext2D.prototype.strokeRect = strokeRect;
        Function.prototype.toString = toString;
    }
}

class Player {
    constructor() {
        this._minimap = new Minimap();
        this._mouse = { x: NaN, y: NaN };
        this._dead = true;
        this._tank = '';
        this._score = -1;

        const player = this;

        //Dead Listener
        setInterval(() => {
            if(!unsafeWindow.input) return;
            const isDead = !unsafeWindow.input.should_prevent_unload();
            if (this._dead == isDead) return;
            this._dead = isDead;

            if (this._dead) this.ondead();
            else this.onspawn();
        }, 20);
        //Tank Listener
        CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {
            apply(fillText, ctx, [text, x, y, ...blah]) {
                const patternTank = /Lvl (\d{2}|[1-9])(.*?)$/;
                const match = text.match(patternTank);
                if (match) {
                    player._tank = match[2].trim();
                }

                fillText.call(ctx, text, x, y, ...blah);
            }
        });
        //Score Listener
        CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {
            apply(fillRect, ctx, [text, x, y, ...blah]) {
                if (text.startsWith('Score: ')) {
                    player._score = parseFloat(text.slice(7).replace(/,/g, ''));
                }

                fillRect.call(ctx, text, x, y, ...blah);
            }
        });
    }
    get x() {
        return this._minimap._x;
    }
    get y() {
        return this._minimap._y;
    }
    get dead() {
        return this._dead;
    }
    get tank() {
        return this._tank;
    }
    get score() {
        return this._score;
    }
    get gamemode() {
        return unsafeWindow.localStorage.gamemode;
    }
    goto(x, y) {
        const dX = x - this.x;
        const dY = y - this.y;
        const len = Math.sqrt(dX ** 2 + dY ** 2);
        if (dX > 0) {
            unsafeWindow.input.key_down('68');
            unsafeWindow.input.key_up('65');
        } else {
            unsafeWindow.input.key_down('65');
            unsafeWindow.input.key_up('68');
        }
        if (dY > 0) {
            unsafeWindow.input.key_down('83');
            unsafeWindow.input.key_up('87');
        } else {
            unsafeWindow.input.key_down('87');
            unsafeWindow.input.key_up('83');
        }
    }
    ondead() {
        showedBuilds = false;
        if (this.score >= 4000000) {
            TotalMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
                <div class="child">1millions: ${localStorage.getItem('Total_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('Total_2ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">3millions: ${localStorage.getItem('Total_3ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">4millions: ${localStorage.getItem('Total_4ms')}<span style="color: #7CFC00">+1</span></div>
                </div>
                `;
            localStorage.setItem('Total_1ms', JSON.parse(localStorage.getItem('Total_1ms')) + 1);
            localStorage.setItem('Total_2ms', JSON.parse(localStorage.getItem('Total_2ms')) + 1);
            localStorage.setItem('Total_3ms', JSON.parse(localStorage.getItem('Total_3ms')) + 1);
            localStorage.setItem('Total_4ms', JSON.parse(localStorage.getItem('Total_4ms')) + 1);

            ThisYearMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
                <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}<span style="color: #7CFC00">+1</span></div>
                </div>
                `;
            localStorage.setItem('This_year_1ms', JSON.parse(localStorage.getItem('This_year_1ms')) + 1);
            localStorage.setItem('This_year_2ms', JSON.parse(localStorage.getItem('This_year_2ms')) + 1);
            localStorage.setItem('This_year_3ms', JSON.parse(localStorage.getItem('This_year_3ms')) + 1);
            localStorage.setItem('This_year_4ms', JSON.parse(localStorage.getItem('This_year_4ms')) + 1);
        } else if (this.score >= 3000000) {
            TotalMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
                <div class="child">1millions: ${localStorage.getItem('Total_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('Total_2ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">3millions: ${localStorage.getItem('Total_3ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
                </div>
                `;
            localStorage.setItem('Total_1ms', JSON.parse(localStorage.getItem('Total_1ms')) + 1);
            localStorage.setItem('Total_2ms', JSON.parse(localStorage.getItem('Total_2ms')) + 1);
            localStorage.setItem('Total_3ms', JSON.parse(localStorage.getItem('Total_3ms')) + 1);

            ThisYearMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
                <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
                </div>
                `;
            localStorage.setItem('This_year_1ms', JSON.parse(localStorage.getItem('This_year_1ms')) + 1);
            localStorage.setItem('This_year_2ms', JSON.parse(localStorage.getItem('This_year_2ms')) + 1);
            localStorage.setItem('This_year_3ms', JSON.parse(localStorage.getItem('This_year_3ms')) + 1);
        } else if (this.score >= 2000000) {
            TotalMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
                <div class="child">1millions: ${localStorage.getItem('Total_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('Total_2ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
                <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
                </div>
                `;
            localStorage.setItem('Total_1ms', JSON.parse(localStorage.getItem('Total_1ms')) + 1);
            localStorage.setItem('Total_2ms', JSON.parse(localStorage.getItem('Total_2ms')) + 1);

            ThisYearMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
                <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
                <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
                </div>
                `;
            localStorage.setItem('This_year_1ms', JSON.parse(localStorage.getItem('This_year_1ms')) + 1);
            localStorage.setItem('This_year_2ms', JSON.parse(localStorage.getItem('This_year_2ms')) + 1);
        } else if (this.score >= 1000000) {
            TotalMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
                <div class="child">1millions: ${localStorage.getItem('Total_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('Total_2ms')}</div>
                <div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
                <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
                </div>
                `;
            localStorage.setItem('Total_1ms', JSON.parse(localStorage.getItem('Total_1ms')) + 1);
            ThisYearMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
                <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}<span style="color: #7CFC00">+1</span></div>
                <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}</div>
                <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
                <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
                </div>
                `;
            localStorage.setItem('This_year_1ms', JSON.parse(localStorage.getItem('This_year_1ms')) + 1);
        } else {
            TotalMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
                <div class="child">1millions: ${localStorage.getItem('Total_1ms')}</div>
                <div class="child">2millions: ${localStorage.getItem('Total_2ms')}</div>
                <div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
                <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
                </div>
                `;
            ThisYearMillions.innerHTML = `
                <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
                <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}</div>
                <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}</div>
                <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
                <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
                </div>
                `;
        }

        const scoreRegex = /^\d{1,2}-\d{1,2}/;
        if (typeof(btn1v1Score) != 'undefined' && !btn1v1Score.active) {
            ui.username = ui.username.replace(scoreRegex, '');
        }

        if (typeof(btnAutoRespawn) != 'undefined' && btnAutoRespawn.active) {
            if (ui.__selectedGameMode == "sandbox" && !pressedO && typeof(btn1v1Score) != 'undefined' && btn1v1Score.active) {
                setTimeout(function() {
                    input.grantReward();
                    UpdateName();
                    input.execute('game_spawn "' + ui.username + '"');
                }, 600);
            } else {
                btnTime.innerHTML = '00:00:00';
                input.grantReward();
                if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active) {
                    UpdateName();
                }
                input.execute('game_spawn "' + ui.username + '"');
            }
        }
    }
    onspawn() {
    }
}

/*
 *   H E L P E R   F U N C T I O N S
 */
function onbtnAfk() {
    this.active = !this.active;
    if (this.active) {
        this.style['background-color'] = "#008000";
        this.x = player.x;
        this.y = player.y;
    } else {
        unsafeWindow.input.key_up('65');
        unsafeWindow.input.key_up('68');
        unsafeWindow.input.key_up('87');
        unsafeWindow.input.key_up('83');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnFreezeMouse() {
    this.active = !this.active;
    if (this.active) {
        this.style['background-color'] = "#008000";
    } else {
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnRepelNecro() {
    this.active = !this.active;
    if (this.active) {
        let repelTime = 25 * 1000;
        unsafeWindow.input.key_down('16');
        this.repelInterval = setInterval(() => {
            unsafeWindow.input.key_down('16');
            setTimeout(() => unsafeWindow.input.key_up('16'), repelTime);
        }, 2 * repelTime + 1300);
        this.style['background-color'] = "#008000";
    } else {
        clearInterval(this.repelInterval);
        unsafeWindow.input.key_up('16');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnRepelOverlord() {
    this.active = !this.active;
    if (this.active) {
        let repelTime = 60 * 1000;
        unsafeWindow.input.key_down('16');
        this.repelInterval = setInterval(() => {
            unsafeWindow.input.key_up('16');
            setTimeout(() => unsafeWindow.input.key_down('16'), 3000);
        }, repelTime);
        this.style['background-color'] = "#008000";
    } else {
        clearInterval(this.repelInterval);
        unsafeWindow.input.key_up('16');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnUpAndDown() {
    this.active = !this.active;
    if (this.active) {
        this.down = true;
        this.x = player.x;
        this.style['background-color'] = "#008000";
    } else {
        unsafeWindow.input.key_up('65');
        unsafeWindow.input.key_up('68');
        unsafeWindow.input.key_up('87');
        unsafeWindow.input.key_up('83');
        this.style['background-color'] = "#2B2D2F";
    }
}

function onbtnPredictMovement() {
    this.active = !this.active;
    if (this.active) {
        localStorage.setItem('predictionMovement', true);
        input.set_convar("net_predict_movement", true);
        this.style['background-color'] = "#008000";
    } else {
        localStorage.setItem('predictionMovement', false);
        input.set_convar("net_predict_movement", false);
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnHideUpgrades() {
    this.active = !this.active;
    if (this.active) {
        input.set_convar("ren_upgrades", false);
        this.style['background-color'] = "#008000";
    } else {
        input.set_convar("ren_upgrades", true);
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnInfArrow() {
    this.active = !this.active;
    'use strict';
    const crx = CanvasRenderingContext2D.prototype;
    crx.moveTo = new Proxy(crx.moveTo, {
        apply(f, _this, args) {
            if (_this.fillStyle === '#000000' && _this.globalAlpha === 0) {
                _this.fillStyle = 'black';
            }
            return f.apply(_this, args);
        }
    });
    if (this.active) {
    crx.moveTo = new Proxy(crx.moveTo, {
        apply(f, _this, args) {
            if (_this.globalAlpha === 0) {_this.globalAlpha = 0.5;
            }
            return f.apply(_this, args);
        }
    });
        this.style['background-color'] = "#008000";
    } else {
    crx.moveTo = new Proxy(crx.moveTo, {
        apply(f, _this, args) {
            if (_this.globalAlpha === 0) {
                _this.globalAlpha = 0.0000001;
            }
            return f.apply(_this, args);
        }
    });
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnHideUI() {
    this.active = !this.active;
    if (this.active) {
        input.set_convar("ren_ui", false);
        this.style['background-color'] = "#008000";
    } else {
        input.set_convar("ren_ui", true);
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnPredatorStack() {
    if (player.tank === "Predator" || player.tank === "Hunter" ) {
        this.style['background-color'] = "#008000";
    }
    function shoot(w) {
        input.key_down(1);
        setTimeout (() => {
            input.key_up(1);
        },w);
    }

    let reload = ui.__playerAttributes.attributes[1].slotsFilled;
    const predator = [
        [50, 500, 1400, 2800], // 0 reload
        [50, 500, 1300, 2700], // 1 reload
        [50, 400, 1200, 2450], // 2 reload
        [50, 300, 1100, 2200], // 3 reload
        [50, 300, 1000, 2100], // 4 reload
        [50, 300, 900, 1800], // 5 reload
        [50, 300, 800, 1700], // 6 reload
        [50, 300, 750, 1500], // 7 reload
    ]
    const hunter = [
        [50, 1200], // 0 reload
        [50, 1100], // 1 reload
        [50, 1000], // 2 reload
        [50, 950], // 3 reload
        [50, 800], // 4 reload
        [50, 725], // 5 reload
        [50, 700], // 6 reload
        [50, 625], // 7 reload
    ]

    function clump() {
        shoot(predator[reload][0]);
        setTimeout(() => {
            shoot(predator[reload][1]);
        },predator[reload][2]);
        setTimeout(() => {
            input.key_down (69);
            input.key_up (69);
            btnPredatorStack.style['background-color'] = "#2B2D2F";
        },predator[reload][3]);
    }
    function clump2(){
        shoot(hunter[reload][0]);
        setTimeout(() => {
            input.key_down (69);
            input.key_up (69);
            btnPredatorStack.style['background-color'] = "#2B2D2F";
        },hunter[reload][1]);
    }
    if (player.tank === "Predator") clump();
    else if (player.tank === "Hunter") clump2();
}
function onbtnBuildOL() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 656565658484848456565848484633232');
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        input.execute('game_stats_build 0');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnBuildSP() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 656565658787878756565878787633232');
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        input.execute('game_stats_build 0');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnBuildAN() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 656565658484848456565848484677777');
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        this.style['background-color'] = "#2B2D2F";
        input.execute('game_stats_build 0');
    }
}
function onbtnBuildRAM() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 338823238228888323232777777711111');
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        input.execute('game_stats_build 0');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnBuildFFAOL() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 656565658484848456565848484633277');
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        input.execute('game_stats_build 0');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnBuildPRED() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 656565658484848456565844477677777');
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        input.execute('game_stats_build 0');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnBuildFIGHTER() {
    this.active = !this.active;
    if (this.active) {
        input.execute('game_stats_build 656565658484848477777775656568884')
        buildGui._buttons.forEach((button) => {
            if (button != this) {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            }
        });
        this.style['background-color'] = "#008000";
    } else {
        input.execute('game_stats_build 0');
        this.style['background-color'] = "#2B2D2F";
    }
}
/*
function onbtnBuilds() {
    this.active = !this.active;
    if (btnBuildSP.active === false && btnBuildAN.active === false && btnBuildOL.active === false && btnBuildFFAOL.active === false && btnBuildRAM.active === false && btnBuildPRED.active === false && btnBuildFIGHTER.active === false && this.active) {
        this.style['background-color'] = "#2B2D2F";
    }
    if (this.active) {;
        buildgui._guiBody.style.display = 'none';
    } else {
        buildgui._guiBody.style.display = 'block';
        this.style['background-color'] = "#008000";
    }
}
*/
function onbtnBazeZoneAlert() {
    this.active = !this.active;

    if (this.active) {
        this.style['background-color'] = "#008000";
    } else {
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnAutoRespawn() {
    this.active = !this.active;

    if (this.active) {
        input.grantReward();
        UpdateName();
        input.execute('game_spawn "' + ui.username + '"');
        this.style['background-color'] = "#008000";
    } else {
        this.style['background-color'] = "#2B2D2F";
    }
}
let opponentID = '';
let userID = '';
function UpdateName() {
    const scoreRegex = /^\d{1,2}-\d{1,2}/;
    if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active) {
        if (!scoreRegex.test(ui.username) || !ui.username.startsWith(opponentScore + '-' + yourScore)) {
            ui.username = ui.username.replace(scoreRegex, '');
            ui.username = opponentScore + '-' + yourScore + ui.username;
        }
    }
}
function onbtn1v1Score() {
    this.active = !this.active;

    if (this.active) {
        userID = ui.__managerCtx.identity.identityId;
        const validOpponents = ui.players.filter(player => player.identityId !== userID && !player.name.includes('(dead)'));

        if (validOpponents.length === 1) {
            opponentID = validOpponents[0].identityId;
            yourScore = 0;
            opponentScore = 0;
            this.style['background-color'] = "#008000";
            UpdateName();
        } else {
            const scoreRegex = /^\d{1,2}-\d{1,2}/;
            ui.username = ui.username.replace(scoreRegex, '');
            this.active = false;
            this.style['background-color'] = "#2B2D2F";
        }
    } else {
        const scoreRegex = /^\d{1,2}-\d{1,2}/;
        ui.username = ui.username.replace(scoreRegex, '');
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtn10fps() {
    this.active = !this.active;

    if (this.active) {
        this.style['background-color'] = "#008000";
    } else {
        this.style['background-color'] = "#2B2D2F";
    }
}
function onbtnResetBinds() {
    gui.resetKeyCodes();
    buildGui.resetKeyCodes()
}

function onbtnShowAfk() {
    this.active = !this.active;
    if (this.active) {
        showAfkButton = true;
    } else {
        showAfkButton = false;
    }
    recreateButtons();
}
function onbtnShowPredictMovement() {
    this.active = !this.active;
    if (this.active) {
        showPredictMovementButton = true;
    } else {
        showPredictMovementButton = false;
    }
    recreateButtons();
}
function onbtnTime() {
    let host = window.xhttp = ui.lobbyId;
    let removeDashes = host.replace(/-/g, "");
    let link = `https://diep.io?p=${removeDashes}`;
    navigator.clipboard.writeText(link);
}

/*
 *   M A I N
 */

var showTimeButton = true;
var showAfkButton = true;
var showRepelsButtons = true;
var showUpAndDownButton = true;
var showPredictMovementButton = true;
var showHideUpgradesButton = true;
var showHideUIButton = true;
var showPredatorStackButton = true;
var showBazeZoneAlertButton = true;
var showBuilds = true;
var showAutoRespawnButton = true;
var show1v1ScoreButton = true;

var alwaysL = true;
var alwaysK = true;
var hidePrivacy = true;
var millionsCounter = true;
var hidePlayers = true; // todo

window.gui = new Gui('I LOVE RBEST ❤');
const player = new Player();
window.buildGui = new BuildGui('Builds');
let settingsgui = new SettingsGui();

function recreateButtons() {
    let gamemode = player.gamemode;
    if (gamemode === 'sandbox') {
        showTimeButton = false;
        showAfkButton = false;
        showRepelsButtons = false;
        showUpAndDownButton = false;
        showPredictMovementButton = true;
        showHideUpgradesButton = true;
        showHideUIButton = true;
        showPredatorStackButton = true;
        showBazeZoneAlertButton = false;
        showBuilds = true;
        showAutoRespawnButton = true;
        show1v1ScoreButton = true;

        alwaysL = true;
        alwaysK = false;
        hidePrivacy = true;
        millionsCounter = true;
        hidePlayers = true;
    }
    if (gamemode === 'ffa' || gamemode === 'maze' || gamemode === 'event') {
        showTimeButton = true;
        showAfkButton = false;
        showRepelsButtons = false;
        showUpAndDownButton = false;
        showPredictMovementButton = true;
        showHideUpgradesButton = true;
        showHideUIButton = true;
        showPredatorStackButton = true;
        showBazeZoneAlertButton = false;
        showBuilds = true;
        showAutoRespawnButton = true;
        show1v1ScoreButton = false;

        alwaysL = true;
        alwaysK = false;
        hidePrivacy = true;
        millionsCounter = true;
        hidePlayers = true;
    }
    if (gamemode === 'teams') {
        showTimeButton = true;
        showAfkButton = true;
        showRepelsButtons = true;
        showUpAndDownButton = true;
        showPredictMovementButton = true;
        showHideUpgradesButton = true;
        showHideUIButton = true;
        showPredatorStackButton = true;
        showBazeZoneAlertButton = true;
        showBuilds = true;
        showAutoRespawnButton = true;
        show1v1ScoreButton = false;

        alwaysL = true;
        alwaysK = false;
        hidePrivacy = true;
        millionsCounter = true;
        hidePlayers = true;
    }
    if (gamemode === '4teams') {
        showTimeButton = true;
        showAfkButton = true;
        showRepelsButtons = true;
        showUpAndDownButton = false;
        showPredictMovementButton = true;
        showHideUpgradesButton = true;
        showHideUIButton = true;
        showPredatorStackButton = true;
        showBazeZoneAlertButton = true;
        showBuilds = true;
        showAutoRespawnButton = true;
        show1v1ScoreButton = false;

        alwaysL = true;
        alwaysK = false;
        hidePrivacy = true;
        millionsCounter = true;
        hidePlayers = true;
    }
    if (gui.gamemode != gamemode) {
        gui.destroy();
        buildGui.destroy();
        window.gui = new Gui('I LOVE RBEST ❤');
        gui.gamemode = gamemode;
        window.buildGui = new BuildGui('Builds');
        if (showTimeButton) window.btnTime = gui.addButton('00:00:00', onbtnTime, 'KeyC');
        if (showAfkButton) window.btnAfk = gui.addButton('AFK', onbtnAfk, 'KeyQ');
        if (showRepelsButtons) {
            window.btnRepelNecro = gui.addButton('Repel Necro', onbtnRepelNecro);
            window.btnRepelOverlord = gui.addButton('Repel Overlord', onbtnRepelOverlord);
        }
        if (showUpAndDownButton) window.btnUpAndDown = gui.addButton('Up and Down', onbtnUpAndDown, 'KeyN');
        if (showPredictMovementButton) window.btnPredictMovement = gui.addButton('Prediction Movement', onbtnPredictMovement);
        if (showHideUpgradesButton) window.btnHideUpgrades = gui.addButton('Hide Upgrades', onbtnHideUpgrades);
        if (showHideUIButton) window.btnHideUI = gui.addButton('Hide UI', onbtnHideUI, 'KeyY');
        if (showPredatorStackButton) window.btnPredatorStack = gui.addButton('Pred/Hunt Stack', onbtnPredatorStack, 'KeyP');
        if (showBazeZoneAlertButton) window.btnBazeZoneAlert = gui.addButton('Base Alert', onbtnBazeZoneAlert, 'KeyB');
        if (showAutoRespawnButton) window.btnAutoRespawn = gui.addButton('Auto Respawn', onbtnAutoRespawn, 'KeyR');
        if (show1v1ScoreButton) window.btn1v1Score = gui.addButton('1v1 Score', onbtn1v1Score);

        if (showBuilds) {
            window.btnBuildOL = buildGui.addButton('OverLord', onbtnBuildOL);
            window.btnBuildSP = buildGui.addButton('SpreadShot', onbtnBuildSP);
            window.btnBuildAN = buildGui.addButton('Annihilator', onbtnBuildAN);
            window.btnBuildRAM = buildGui.addButton('Rammer', onbtnBuildRAM);
            window.btnBuildFFAOL = buildGui.addButton('FFA OL', onbtnBuildFFAOL);
            window.btnBuildPRED = buildGui.addButton('Predator', onbtnBuildPRED);
            window.btnBuildFIGHTER = buildGui.addButton('Fighter', onbtnBuildFIGHTER);
        }
    }
}
recreateButtons();


let btnResetBinds = settingsgui.addButton('Reset binds', onbtnResetBinds);

buildGui._buttons.forEach((button) => {
    button.active = false;
});

// Timer
(function() {
    var time = '00:00:00';
    var rawTime = 0;
     // Main code (runs once a second)
    setInterval(() => {

        // Get time and display on main timer
        if (input.should_prevent_unload()) {
            let [hours, minutes, seconds] = time.split(':');
            if (parseInt(seconds) + 1 !== 60) {
                let addZero = (parseInt(seconds) + 1).toString().length == 1 ? '0' : '';
                seconds = `${addZero}${parseInt(seconds) + 1}`;
                rawTime += 1;
            } else {
                if (parseInt(minutes) + 1 !== 60) {
                    let addZero = (parseInt(minutes) + 1).toString().length == 1 ? '0' : '';
                    seconds = '00';
                    minutes = `${addZero}${parseInt(minutes) + 1}`;
                } else {
                    let addZero = (parseInt(hours) + 1).toString().length == 1 ? '0' : '';
                    seconds = '00';
                    minutes = '00';
                    hours = `${addZero}${parseInt(hours) + 1}`;
                }
            }

            time = `${hours}:${minutes}:${seconds}`;
        } else if (!input.should_prevent_unload()) {
            time = '00:00:00';
            rawTime = 0;
        }
        recreateButtons();
        if (typeof(btnTime) != 'undefined') btnTime.innerHTML = time;
    }, 1000);
})();
if (localStorage.getItem('predictionMovement') == null) {
    localStorage.setItem('predictionMovement', false);
}
(function() {
    var interval = setInterval(function() {
        //
        // active button actions
        if (unsafeWindow.input && !btnPredictMovement.active && localStorage.getItem('predictionMovement') == "false") {
            unsafeWindow.input.set_convar('net_predict_movement', false);
        }
        if (unsafeWindow.input && btnPredictMovement.active && localStorage.getItem('predictionMovement') == "true") {
            unsafeWindow.input.set_convar('net_predict_movement', true);
        }
        if (isActiveL && input.should_prevent_unload()) {
            unsafeWindow.input.key_down('76');
        } else {
            unsafeWindow.input.key_up('76');
        }
        if (isActiveK && input.should_prevent_unload()) {
            unsafeWindow.input.key_down('75');
        } else {
            unsafeWindow.input.key_up('75');
        }
        if (typeof(btnAfk) != 'undefined' && btnAfk.active) player.goto(btnAfk.x, btnAfk.y);
        else if (typeof(btnUpAndDown) != 'undefined' && btnUpAndDown.active) {
            if (btnUpAndDown.down) {
                player.goto(btnUpAndDown.x, 1);
                if (player.y >= 0.95) btnUpAndDown.down = false;
             } else {
                 player.goto(btnUpAndDown.x, 0);
                 if (player.y <= 1 - 0.95) btnUpAndDown.down = true;
             }
        }
        const scoreRegex = /^\d{1,2}-\d{1,2}/;
        if (typeof(btn1v1Score) != 'undefined' && !btn1v1Score.active) {
            ui.username = ui.username.replace(scoreRegex, '');
        }

    }, 100);
})();
(function() {
    var interval = setInterval(function() {
        //
        // active button actions
        /*
        if(unsafeWindow.input && !btnPredictMovement.active) {
            unsafeWindow.input.set_convar('net_predict_movement', false);
        }
        */
        if (btnBuildOL.active) {
            input.execute('game_stats_build 656565658484848456565848484633232')
        }
        if (btnBuildSP.active) {
            input.execute('game_stats_build 656565658787878756565878787633232')
        }
        if (btnBuildAN.active) {
            input.execute('game_stats_build 656565658484848456565848484677777')
        }
        if (btnBuildRAM.active) {
            input.execute('game_stats_build 338823238228888323232777777711111')
        }
        if (btnBuildFFAOL.active) {
            input.execute('game_stats_build 656565658484848456565848484633277')
        }
        if (btnBuildPRED.active) {
            input.execute('game_stats_build 656565658484848456565844477677777')
        }
        if (btnBuildFIGHTER.active) {
            input.execute('game_stats_build 656565658484848477777775656568884')
        }
        //
        // rivet token clearer
        /*const handler = {
            apply(ref, obj, args){
                if (args[0] == "rivet:token") {
                    return null
                }
                return ref.apply(obj,args)
            }
        }
        localStorage.getItem = new Proxy(localStorage.getItem, handler)
        localStorage.setItem = new Proxy(localStorage.setItem, handler)
        */
        //
        // no Privacy settings button
        let a = document.getElementById("qc-cmp2-container");
        if(a != null) {
            a.parentElement.removeChild(a);
        }
        if (input.should_prevent_unload())document.querySelector('d-base').shadowRoot.querySelector('d-game').shadowRoot.querySelector('#user-list-toggle').style.display = 'none';
        const scoreRegex = /^\d{1,2}-\d{1,2}/;
        if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active) {
            const targetPlayer = ui.players.find(player => player.identityId === opponentID);
            if (targetPlayer && targetPlayer.name) {
                const match = targetPlayer.name.match(scoreRegex);
                if (match) {
                    let [targYourScore, targOpponentScore] = match[0].split('-');
                    if (targYourScore == yourScore + 1) {
                        updateScoreAnimated(yourScore + 1, opponentScore);
                        yourScore += 1;
                        UpdateName();
                    }
                }
            }
        }

    }, 1000);
})();
/*
(function freezeMouse() {
    const canvas = document.getElementById('canvas');
    input.set_convar("ren_fps", true);
    canvas.onmousemove = new Proxy(canvas.onmousemove, {
        apply(target, thisArg, args) {
            if (btnFreezeMouse?.active) return;
            target.apply(thisArg, args);
        },
    });
})();
*/
/*
var delayInMilliseconds = 3000;

setTimeout(function() {
    'use strict';
        input.set_convar("ren_debug_info", true);
}, delayInMilliseconds)
*/
var isActiveL = true;
var isActiveK = true;

var lastKeypressTime = new Date();
var delta = 500;
var timer;
addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        input.grantReward();
        if (!player.dead) {
            buildGui._buttons.forEach((button) => {
                if (button.style['background-color'] == "rgb(184, 134, 11)" || button.style['background-color'] == "rgb(0, 128, 0)") {
                    button.active = true;
                    button.style['background-color'] = "#008000";
                } else {
                    button.style['background-color'] = "#2B2D2F";
                    button.active = false;
                }
            });
            if (gui._guiBody.style.display === 'none') {
                buildGui._guiBody.style.display = 'none';
            }
        }
    }
    if (e.keyCode == 38) {
        for (var i = 0; i < buildGui._buttons.length; i++) {
            if (buildGui._buttons[i].style['background-color'] == "rgb(184, 134, 11)") {
                buildGui._buttons[i].style['background-color'] = "#2B2D2F";
                buildGui._buttons[(buildGui._buttons.length + i - 1) % buildGui._buttons.length].style['background-color'] = "rgb(184, 134, 11)";
                break;
            }
        }
    }
    if (e.keyCode == 40) {
        for (i = 0; i < buildGui._buttons.length; i++) {
            if (buildGui._buttons[i].style['background-color'] == "rgb(184, 134, 11)") {
                buildGui._buttons[i].style['background-color'] = "#2B2D2F";
                buildGui._buttons[(buildGui._buttons.length + i + 1) % buildGui._buttons.length].style['background-color'] = "rgb(184, 134, 11)";
                break;
            }
        }
    }
    if (e.keyCode == 70) {
        if (gui._guiBody.style.display === 'block') {
            gui._guiBody.style.display = 'none';
            buildGui._guiBody.style.display = 'none';
            settingsgui._guiBody.style.display = 'none';

            TotalMillions.style.display = 'none';
            ThisYearMillions.style.display = 'none';
            TotalMillions.innerHTML = `
            <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
            <div class="child">1millions: ${localStorage.getItem('Total_1ms')}</div>
            <div class="child">2millions: ${localStorage.getItem('Total_2ms')}</div>
            <div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
            <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
            </div>
            `;
            ThisYearMillions.innerHTML = `
            <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
            <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}</div>
            <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}</div>
            <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
            <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
            </div>
            `;
            Score.style.visibility = 'hidden';
            Score.innerHTML = `<div class="scoreboard"><div class="player"><span>You</span><strong class="yourScore">${yourScore}</strong></div><div class="player"><span>Opponent</span><strong class="opponentScore">${opponentScore}</strong></div></div>`;
            styleElement.textContent = `.scoreboard { opacity: 0; transition: opacity 0.5s ease, visibility 0.5s; overflow: hidden; position: fixed; top: 100px; left: 50%; transform: translateX(-50%); display: flex; justify-content: space-between; align-items: center; opacity: 65%; text-shadow: 0.18vh 0vh black, -0.18vh 0vh black, 0vh -0.18vh black, 0vh 0.18vh black, 0.18vh 0.18vh black, -0.18vh 0.18vh black, 0.18vh -0.18vh black, -0.18vh -0.18vh black, 0.09vh 0.18vh black, -0.09vh 0.18vh black, 0.09vh -0.18vh black, -0.09vh -0.18vh black, 0.18vh 0.09vh black, -0.18vh 0.09vh black, 0.18vh -0.09vh black, -0.18vh -0.09vh black; } .player { display: flex; flex-direction: column; align-items: center; font-family: Arial, sans-serif; color: #333; } .player:first-child { color: #00e16e; margin-right: 200px; } .player:last-child { color: #f14e54; } .player span { font-size: 28px; } .player strong { font-size: 48px; }`;

        } else {
            gui._guiBody.style.display = 'block';
            buildGui._guiBody.style.display = 'block';
        }
    }
    if (e.keyCode == 76 && e.isTrusted) {
        isActiveL ^= true;
    }
    if (e.keyCode == 75 && e.isTrusted) {
        isActiveK ^= true;
    }
    if (e.keyCode == 85) {
        var thisKeypressTime = new Date();
        if (thisKeypressTime - lastKeypressTime <= delta) {
            buildGui._buttons.forEach((button) => {
                button.active = false;
                button.style['background-color'] = "#2B2D2F";
            });
            thisKeypressTime = 0;
        }
        lastKeypressTime = thisKeypressTime;
    }
    if (e.keyCode === 79) {
        if (timer) clearTimeout(timer);

        pressedO = true;

        timer = setTimeout(function() {
            pressedO = false;
        }, 6000);
    }
    if (e.keyCode === 187 && e.shiftKey) {
        if (settingsgui._guiBody.style.display === 'none') {
            settingsgui._guiBody.style.display = 'block';
            gui._guiBody.style.display = 'block';
            buildGui._guiBody.style.display = 'block';

            TotalMillions.style.display = 'block';
            ThisYearMillions.style.display = 'block';
            TotalMillions.innerHTML = `
            <div class="parent" style='pointer-events:auto; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
                <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>
                    Total</div>
                    <div class="child">1millions: <input type="number" id="Total_1ms_input" value="${localStorage.getItem('Total_1ms')}" style="width: 40px"}"></div>
                    <div class="child">2millions: <input type="number" id="Total_2ms_input" value="${localStorage.getItem('Total_2ms')}" style="width: 40px"}"></div>
                    <div class="child">3millions: <input type="number" id="Total_3ms_input" value="${localStorage.getItem('Total_3ms')}" style="width: 40px"}"></div>
                    <div class="child">4millions: <input type="number" id="Total_4ms_input" value="${localStorage.getItem('Total_4ms')}" style="width: 40px"}"></div>
                </div>
            </div>`;

            ThisYearMillions.innerHTML = `
            <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
            <div class="child">1millions: <input type="number" id="This_year_1ms_input" value="${localStorage.getItem('This_year_1ms')}" style="width: 40px"}"></div>
            <div class="child">2millions: <input type="number" id="This_year_2ms_input" value="${localStorage.getItem('This_year_2ms')}" style="width: 40px"}"></div>
            <div class="child">3millions: <input type="number" id="This_year_3ms_input" value="${localStorage.getItem('This_year_3ms')}" style="width: 40px"}"></div>
            <div class="child">4millions: <input type="number" id="This_year_4ms_input" value="${localStorage.getItem('This_year_4ms')}" style="width: 40px"}"></div>
            </div>
            `;

            document.querySelectorAll('input[type="number"]').forEach(input => {
                input.addEventListener('input', () => {
                    const newValue = input.value;
                    const key = input.id.replace('_input', '');
                    localStorage.setItem(key, newValue);
                });
            });
            if (typeof(btn1v1Score) != 'undefined' && btn1v1Score.active) {
                Score.style.visibility = 'visible';
            }
            Score.innerHTML = `<div class="scoreboard"><div class="player"><span>You</span><div><button class="decrease">-</button><strong class="yourScore">${yourScore}</strong><button class="increase">+</button></div></div><div class="player"><span>Opponent</span><div><button class="decrease">-</button><strong class="opponentScore">${opponentScore}</strong><button class="increase">+</button></div></div></div>`;
            styleElement.textContent = `.scoreboard { opacity: 0; transition: opacity 0.5s ease, visibility 0.5s; position: fixed; top: 100px; left: 50%; transform: translateX(-50%); display: flex; justify-content: space-between; align-items: center; opacity: 65%; text-shadow: 0.18vh 0vh black, -0.18vh 0vh black, 0vh -0.18vh black, 0vh 0.18vh black, 0.18vh 0.18vh black, -0.18vh 0.18vh black, 0.18vh -0.18vh black, -0.18vh -0.18vh black, 0.09vh 0.18vh black, -0.09vh 0.18vh black, 0.09vh -0.18vh black, -0.09vh -0.18vh black, 0.18vh 0.09vh black, -0.18vh 0.09vh black, 0.18vh -0.09vh black, -0.18vh -0.09vh black; } .player { display: flex; flex-direction: column; align-items: center; font-family: Arial, sans-serif; color: #333; } .player:first-child { color: #00e16e; margin-right: 200px; } .player:last-child { color: #f14e54; } .player span { font-size: 28px; } .player strong { font-size: 48px; } .player div { display: flex; align-items: center; position: relative; } .player .decrease, .player .increase { cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%); width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-size: 16px; } .player .decrease { left: -45px; } .player .increase { right: -45px; } .player .decrease:hover, .player .increase:hover { background-color: lightgray; }`;

            // Найти все кнопки уменьшения и увеличения
            const decreaseButtons = document.querySelectorAll('.decrease');
            const increaseButtons = document.querySelectorAll('.increase');

            // Для каждой кнопки уменьшения добавить обработчик события
            decreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const scoreElement = button.nextElementSibling;
                    if (scoreElement.classList.contains('yourScore')) {
                        yourScore = parseInt(scoreElement.innerHTML);
                        if (yourScore > 0) yourScore--;
                        scoreElement.innerHTML = yourScore;
                    } else if (scoreElement.classList.contains('opponentScore')) {
                        opponentScore = parseInt(scoreElement.innerHTML);
                        if (opponentScore > 0) opponentScore--;
                        scoreElement.innerHTML = opponentScore;
                    }
                });
            });

            // Для каждой кнопки увеличения добавить обработчик события
            increaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const scoreElement = button.previousElementSibling;
                    if (scoreElement.classList.contains('yourScore')) {
                        yourScore = parseInt(scoreElement.innerHTML);
                        yourScore++;
                        scoreElement.innerHTML = yourScore;
                    } else if (scoreElement.classList.contains('opponentScore')) {
                        opponentScore = parseInt(scoreElement.innerHTML);
                        opponentScore++;
                        scoreElement.innerHTML = opponentScore;
                    }
                });
            });


        } else {
            settingsgui._guiBody.style.display = 'none';

            TotalMillions.style.display = 'none';
            ThisYearMillions.style.display = 'none';
            TotalMillions.innerHTML = `
            <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; left:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>Total</div>
            <div class="child">1millions: ${localStorage.getItem('Total_1ms')}</div>
            <div class="child">2millions: ${localStorage.getItem('Total_2ms')}</div>
            <div class="child">3millions: ${localStorage.getItem('Total_3ms')}</div>
            <div class="child">4millions: ${localStorage.getItem('Total_4ms')}</div>
            </div>
            `;
            ThisYearMillions.innerHTML = `
            <div class="parent" style='pointer-events:none; user-select:none; position:fixed; text-align:left; bottom:43%; right:1.3%; font-family:Ubuntu; color:#FFFFFF; font-style:normal; font-size:2.55vh; opacity:100%; text-shadow:black 0.18vh 0vh,black -0.18vh 0vh,black 0vh -0.18vh,black 0vh 0.18vh,black 0.18vh 0.18vh, black -0.18vh 0.18vh, black 0.18vh -0.18vh, black -0.18vh -0.18vh, black 0.09vh 0.18vh, black -0.09vh 0.18vh, black 0.09vh -0.18vh, black -0.09vh -0.18vh, black 0.18vh 0.09vh, black -0.18vh 0.09vh, black 0.18vh -0.09vh, black -0.18vh -0.09vh'>
            <div class="child" style='font-size:3.9vh; text-shadow:black 0.2vh 0vh, black -0.2vh 0vh, black 0vh -0.2vh, black 0vh 0.2vh, black 0.2vh 0.2vh, black -0.2vh 0.2vh, black 0.2vh -0.2vh, black -0.2vh -0.2vh, black 0.1vh 0.2vh, black -0.1vh 0.2vh, black 0.1vh -0.2vh, black -0.1vh -0.2vh, black 0.2vh 0.1vh, black -0.2vh 0.1vh, black 0.2vh -0.1vh, black -0.2vh -0.1vh'>${Year}</div>
            <div class="child">1millions: ${localStorage.getItem('This_year_1ms')}</div>
            <div class="child">2millions: ${localStorage.getItem('This_year_2ms')}</div>
            <div class="child">3millions: ${localStorage.getItem('This_year_3ms')}</div>
            <div class="child">4millions: ${localStorage.getItem('This_year_4ms')}</div>
            </div>
            `;
            Score.style.visibility = 'hidden';
            Score.innerHTML = `<div class="scoreboard"><div class="player"><span>You</span><strong class="yourScore">${yourScore}</strong></div><div class="player"><span>Opponent</span><strong class="opponentScore">${opponentScore}</strong></div></div>`;
            styleElement.textContent = `.scoreboard { opacity: 0; transition: opacity 0.5s ease, visibility 0.5s; overflow: hidden; position: fixed; top: 100px; left: 50%; transform: translateX(-50%); display: flex; justify-content: space-between; align-items: center; opacity: 65%; text-shadow: 0.18vh 0vh black, -0.18vh 0vh black, 0vh -0.18vh black, 0vh 0.18vh black, 0.18vh 0.18vh black, -0.18vh 0.18vh black, 0.18vh -0.18vh black, -0.18vh -0.18vh black, 0.09vh 0.18vh black, -0.09vh 0.18vh black, 0.09vh -0.18vh black, -0.09vh -0.18vh black, 0.18vh 0.09vh black, -0.18vh 0.09vh black, 0.18vh -0.09vh black, -0.18vh -0.09vh black; } .player { display: flex; flex-direction: column; align-items: center; font-family: Arial, sans-serif; color: #333; } .player:first-child { color: #00e16e; margin-right: 200px; } .player:last-child { color: #f14e54; } .player span { font-size: 28px; } .player strong { font-size: 48px; }`;

        }
    }
});



document.addEventListener('mousedown', function(e) {
    if (e.button == 0) {
        input.grantReward();
    }
});
});

