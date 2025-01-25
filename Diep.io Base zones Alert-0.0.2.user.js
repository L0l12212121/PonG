// ==UserScript==
// @name         Diep.io Base zones
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  no.
// @author       cy
// @match        https://diep.io/*
// @match        https://staging.diep.io/*
// @match        https://mobile.diep.io/*
// @match        https://diep-io.rivet.game/*
// @match        https://diep.io/?p=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
const c = CanvasRenderingContext2D.prototype;
const scalingFactor = 100; // how large the arena is
let playerX;
let playerY;

let arrowPos = [0, 0];
let minimapPos = [0, 0];
let minimapSize = [0, 0];

let position = 0;
let vertex = [];

c.strokeRect = new Proxy(c.strokeRect, {
  apply: function (method, context, args) {
    const t = context.getTransform();
    minimapPos = [t.e, t.f];
    minimapSize = [t.a, t.d];
    return Reflect.apply(method, context, args);
  },
});
c.beginPath = new Proxy(c.beginPath, {
  apply: function (method, context, args) {
    position = 0;
    vertex = [];
    return Reflect.apply(method, context, args);
  },
});
c.moveTo = new Proxy(c.moveTo, {
  apply: function (method, context, args) {
    position = 1;
    vertex.push(args);
    return Reflect.apply(method, context, args);
  },
});
c.lineTo = new Proxy(c.lineTo, {
  apply: function (method, context, args) {
    position++;
    vertex.push(args);
    return Reflect.apply(method, context, args);
  },
});
c.fill = new Proxy(c.fill, {
  apply: function (method, context, args) {
    if (
      context.fillStyle == "#000000" &&
      context.globalAlpha > 0.949 &&
      position === 3
    ) {
      arrowPos = getAverage(vertex);
      setPlayerPos();
    }

    return Reflect.apply(method, context, args);
  },
});
Object.freeze(c);

function getAverage(points) {
  let tx = 0,
    ty = 0;
  points.forEach((point) => {
    tx += point[0];
    ty += point[1];
  });
  return [tx / points.length, ty / points.length];
}
function setPlayerPos() {
  const dx = arrowPos[0] - minimapPos[0];
  const dy = arrowPos[1] - minimapPos[1];

  playerX = (dx / minimapSize[0]) * scalingFactor;
  playerY = (1 - dy / minimapSize[1]) * scalingFactor;
}

const timer1 = 1500;
const timer2 = 3000;

const blue_dan = 24.7;
const blue_def = 19.7;
const red_dan = 75.3;
const red_def = 80.3;

const def_radius = 17.5;
const dan_radius = 23.5;

let def_not = false;
let dan_not = false;

const baseCenter = {
  blue: {
    x: 7.5,
    y: 92.5,
  },
  red: {
    x: 92.5,
    y: 7.5,
  },
  purple: {
    x: 92.5,
    y: 92.5,
  },
  green: {
    x: 7.5,
    y: 7.5,
  },
};

let generalInt = setInterval(() => {
  checkZone();
}, 100);

function checkZone() {
  const party_link_button = document.getElementById("copy-party-link");
  let playersTeam;
   switch (party_link_button.className) {
    case "active blue":
      playersTeam = "blue";
      break;
    case "active purple":
      playersTeam = "purple";
      break;
    case "active green":
      playersTeam = "green";
      break;
    case "active red":
      playersTeam = "red";
      break;
  }

  if (lobby_gamemode == "teams") {
    if (playersTeam != "blue") {
      if (playerX <= blue_def) {
        createNoti("def");
      } else if (playerX <= blue_dan) {
        createNoti("dan");
      }
    }
    if (playersTeam != "red") {
      if (playerX >= red_def) {
        createNoti("def");
      } else if (playerX >= red_dan) {
        createNoti("dan");
      }
    }
  }
  if (lobby_gamemode == "4teams") {
    if (playersTeam != "blue") {
      if (calcRadius(baseCenter.blue, def_radius)) {
        createNoti("def");
      } else if (calcRadius(baseCenter.blue, dan_radius)) {
        createNoti("dan");
      }
    }
    if (playersTeam != "red") {
      if (calcRadius(baseCenter.red, def_radius)) {
        createNoti("def");
      } else if (calcRadius(baseCenter.red, dan_radius)) {
        createNoti("dan");
      }
    }
    if (playersTeam != "purple") {
      if (calcRadius(baseCenter.purple, def_radius)) {
        createNoti("def");
      } else if (calcRadius(baseCenter.purple, dan_radius)) {
        createNoti("dan");
      }
    }
    if (playersTeam != "green") {
      if (calcRadius(baseCenter.green, def_radius)) {
        createNoti("def");
      } else if (calcRadius(baseCenter.green, dan_radius)) {
        createNoti("dan");
      }
    }
  }
}

let def_int;
let dan_int;

function createNoti(type) {
  if (type == "def" && !def_not) {
    extern.inGameNotification("Base zones can atack!", "0xFF2989", timer1);
    def_not = true;
   def_int = setTimeout(() => {
      def_not = false;
    }, timer1);
  } else if (type == "dan" && !dan_not) {
    extern.inGameNotification("Base zones can chase!", "0xC929FF", timer2);
    dan_not = true;
    dan_int = setTimeout(() => {
      dan_not = false;
    }, timer2);
  }
}
function calcRadius(point, radius) {
  return (
    radius >=
    Math.sqrt(Math.pow(point.x - playerX, 2) + Math.pow(point.y - playerY, 2))
  );
}