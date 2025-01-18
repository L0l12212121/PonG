// ==UserScript==
// @name         Diep.io Debug Info Toggle
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Toggle debug info and FPS display in diep.io
// @author       cyrox
// @match        *://diep.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function showInfo() {
        input.execute("ren_debug_info true");
        input.execute("ren_fps true");
    }

    function hideInfo() {
        input.execute("ren_debug_info false");
        input.execute("ren_fps false");
    }

    // Add key event listeners to toggle the info display
    window.addEventListener('keydown', (event) => {
        if (event.key === 'i') { // Press 'I' to toggle info
            showInfo();
        } else if (event.key === 'z') { // Press 'Z' to hide info
            hideInfo();
        }
    });

    console.log("Debug Info Toggle script loaded.");
})();