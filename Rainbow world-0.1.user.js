// ==UserScript==
// @name         Rainbow world
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  maybe another bad script
// @author       idk
// @match        *://diep.io/
// @grant        none
// ==/UserScript==

'use strict';

(() => {
	const script = document.createElement("script");
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.7/chroma.min.js";
	document.head.append(script);

    script.addEventListener('load', () => {
        const colors = chroma.scale(['red', 'orange', 'yellow', 'lime', 'cyan', 'mediumpurple', 'red']).colors(800);
        let index = 0;

        setInterval(() => {
            index += 1;
            if (index > colors.length) index = 0;

            const scale = "0x" + colors[index].substr(1, Infinity)
            const black = [ 0, 1, 2, 8, 9, 10, 11, 12, 13, 14, 16, 17 ]

            black.forEach(function(i) {
                input.execute(`net_replace_color ${i} `);
            })

            black.splice(0, black.length, ...[
                'ren_score_bar_fill_color',
            ])

            black.forEach(function(i) {
                input.execute(i + ' ');
            });

            var rainbow = [
                'net_replace_color 15',               
                'ren_bar_background_color',
                'ren_health_fill_color',
                'ren_minimap_border_color',
                'net_replace_color 8',
                'net_replace_color 14',
                'net_replace_color 2',
                'ren_fps true',
                'net_replace_color 10',
                'net_replace_color 9',
                'net_replace_color 11',
                'ren_xp_bar_fill_color',

            ];

            rainbow.forEach(function(i) {
                input.execute(i + ' ' + scale);
            });

            input.execute(`ui_replace_colors` + ` ${scale}`.repeat(8));
        });
    });
})();