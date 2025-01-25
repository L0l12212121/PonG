// ==UserScript==
// @name         Add Shadow
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       cy
// @match        https://diep.io/*
// @grant        none
// ==/UserScript==
let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
setTimeout(() => {
    let gui = () => {
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 10;
        window.requestAnimationFrame(gui);
    }
 gui();
}, 1000);