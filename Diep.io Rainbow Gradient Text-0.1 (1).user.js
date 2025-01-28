// ==UserScript==
// @name         Diep.io Rainbow Gradient Text
// @version      0.1
// @description  Apply a rainbow gradient effect to text in diep.io
// @author       By shlong edits by cyrox
// @match        *://diep.io/*
// ==/UserScript==

(() => {
    "use strict";

    const colors = [
        "#FF0000", // Red
        "#FF7F00", // Orange
        "#FFFF00", // Yellow
        "#00FF00", // Green
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#9400D3"  // Violet
    ];

    const context = CanvasRenderingContext2D.prototype; // Get the context prototype
    const textToChange = [
        "Score",
        "Lvl",
        "This is the tale of...",
        "Privacy Policy",
        "Terms of Service",
        "More games",
        "FFA",
        "Survival",
        "Domination",
        "Tag",
        "Maze",
        "Sandbox",
        "Copy party link",
        "Scoreboard",
        "Leader",
        "Game Mode",
        "(press enter to spawn)",
        "Game mode",
        "4 Teams",
        "2 Teams",
        "Changelog",
        "Last updated",
        "diep.io",
        "Connecting...",
        "*",
        "Level",
        "Time Alive",
        "Tank",
        "Copy Party Link",
        "(press enter to continue)",
        "You were killed by:",
    ];

    context.fillText = new Proxy(context.fillText, {
        apply(type, _this, args) {
            const text = args[0];
            const gradient = _this.createLinearGradient(0, 0, text.length * 10, 0);
            const colorStopInterval = 1 / (colors.length - 1);

            // Define color stops for the gradient
            for (let i = 0; i < colors.length; i++) {
                gradient.addColorStop(i * colorStopInterval, colors[i]);
            }

            _this.fillStyle = gradient;


            if (textToChange.some(t => text.startsWith(t))) {
                return type.apply(_this, args);
            }

            return type.apply(_this, args);
        },
    });
})();