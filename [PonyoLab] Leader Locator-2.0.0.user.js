// ==UserScript==
// @name          [PonyoLab] Leader Locator
// @namespace     https://tampermonkey.net/
// @version       2.0.0
// @description   Made in PonyoLab
// @icon          https://diep.io/favicon-96x96.png
// @author        Ponyoで～す
// @match         *://diep.io/*
// @grant         unsafeWindow
// @run-at        document-load
// ==/UserScript==
function loadGui() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // 言語設定
    const languageTable = {

        // 日本語
        "ja": {

            // 設定
            "leaderPosition": "位置",
            "leaderDirection": "方向",
            "leaderArea": "エリア",
            "leaderAim": "エイム"

        },

        // 英語
        "en": {

            // 設定
            "leaderPosition": "Arrow",
            "leaderDirection": "Minimap",
            "leaderArea": "Area",
            "leaderAim": "AIM"