// ==UserScript==
// @name         Time
// @namespace    http://tampermonkey.net/
// @version      1.2
// @author       cyyyyy
// @match        https://*diep.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let startTime = 0;
    let spawnedIn = false;
    let counterContainer, ratioLabel, counter;
    let prettyText = false;

    const createCounter = () => {
        // Crear el contenedor principal
        counterContainer = document.createElement('div');
        counterContainer.style.position = 'fixed';
        counterContainer.style.right = '1.3%';
        counterContainer.style.top = '75.3%';
        counterContainer.style.transform = 'translateY(-50%)';
        counterContainer.style.color = 'white';
        counterContainer.style.textShadow =
            'black 2px -0px 0px, black 0px -0px 10px, black -0px 2px 0px, black 0px 0px 0px, ' +
            'black -2px -2px 1px, black 0px -0px 0px, black -2px 2px 0px, black 0px 2px 0px, ' +
            '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';
        counterContainer.style.fontSize = '11px';
        counterContainer.style.zIndex = '1000';
        counterContainer.style.borderRadius = '5px';
        counterContainer.style.display = 'flex';
        counterContainer.style.flexDirection = 'column'; // Organiza los elementos verticalmente

        // Crear el texto "Current Ratio:"
        ratioLabel = document.createElement('div');
        ratioLabel.textContent = 'Current Ratio:';
        ratioLabel.style.fontWeight = 'bold'; // Opcional: resaltar el texto
        ratioLabel.style.marginBottom = '1px'; // Espacio entre el texto y el contador

        // Crear el contador de tiempo
        counter = document.createElement('div');
        counter.textContent = 'Loading...';

        // Agregar elementos al contenedor
        counterContainer.appendChild(ratioLabel);
        counterContainer.appendChild(counter);

        // Agregar el contenedor a la página
        document.body.appendChild(counterContainer);
    };

    const getTime = () => {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return Math.floor((now - startOfDay) / 1000);
    };

    const formatTime = (hours, minutes, seconds) => {
        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else if (minutes > 0) {
            return `${minutes}:${String(seconds).padStart(2, '0')}`;
        } else {
            return `${seconds}`;
        }
    };

    const checkSpawned = () => {
        if (typeof __common__ !== 'undefined' && __common__.screen_state === 'in-game') {
            if (!spawnedIn) {
                startTime = getTime();
            }
            spawnedIn = true;
        } else {
            spawnedIn = false;
        }
        return spawnedIn;
    };

    const updateTime = () => {
        checkSpawned();

        if (spawnedIn) {
            const now = getTime();
            const elapsedTime = now - startTime;

            const hours = Math.floor(elapsedTime / 3600);
            const minutes = Math.floor((elapsedTime % 3600) / 60);
            const seconds = elapsedTime % 60;

            if (prettyText) {
                counter.textContent = formatTime(hours, minutes, seconds);
            } else {
                counter.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        } else {
            counter.textContent = 'Not Spawned Yet';
        }
    };

    createCounter();
    setInterval(updateTime, 1000);
})();