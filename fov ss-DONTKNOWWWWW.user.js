// ==UserScript==
// @name         fov_doest_work gg 
// @version      2.0
// @author       cy
// @match        *://diep.io/*
// @run-at       document-start
// ==/UserScript==

let Module;
Object.defineProperty(Object.prototype, "HEAP32", {
    configurable: true,
    set(HEAP32) {
        delete Object.prototype.HEAP32;
        this.HEAP32 = HEAP32;
        Module = this;
    }
});

let CorrectTank = "Tank";
let CorrectLvl = 0;

function hookMethod(target, callback) {
    const context = CanvasRenderingContext2D.prototype;
    context[target] = new Proxy(context[target], {
        apply(type, _this, args) {
            callback(_this, args);
            return type.apply(_this, args);
        },
    });
}

hookMethod('fillText', (thisArg, args) => {
    const text = args[0];
    if (text.match("Lvl")) {
        CorrectTank = text.replace(/[0-9]/g, '').slice(5);
        CorrectLvl = parseInt(text.replace(CorrectTank, '').replace("Lvl ", ''));
        window.DiepTank = CorrectTank;
        window.DiepLvl = CorrectLvl;
    }
});

let LvlFov = [0, 0.5500000119, 0.5472704768, 0.544554472, 0.5418519378, 0.5391628146, 0.5364870429, 0.533824563, 0.5311753154, 0.5285391808, 0.5259161592, 0.5233061314, 0.5207090378, 0.5181248784, 0.515553534, 0.512994945, 0.5104490519, 0.5079157948, 0.5053950548, 0.5028868914, 0.5003911853, 0.4979078174, 0.4954368174, 0.4929780364, 0.4905314744, 0.4880970716, 0.4856747389, 0.4832644165, 0.4808660746, 0.4784796238, 0.4761050344, 0.4737422168, 0.4713911116, 0.4690516889, 0.4667238891, 0.4644076228, 0.4621028602, 0.4598095119, 0.4575275779, 0.4552569389, 0.4529975951, 0.4507494569, 0.4485124648, 0.4462865889, 0.4440717697, 0.4418679136, 0.4418679178];

let fov = 0.5;
let working = false;
let ready = false;
let b = [];
let fovid;
let notificationCount = 0;
let fovNotification = null;

setInterval(() => {
    if (!working && !ready && Module) {
        working = true;
        let lvl = window.DiepLvl;
        let num = new Int32Array(new Float32Array([LvlFov[lvl]]).buffer);
        console.log(num[0]);
        first(num[0]);
    }
}, 2000);

let style = document.createElement("style");
style.innerHTML = `.notification { position: fixed; padding: 10px; color: #fff; font-size: 14px; transition: opacity 0.5s ease-in-out; opacity: 1; z-index: 10000000; }
#fovNotification { position: fixed; padding: 10px; top: 10px; left: 50%; transform: translateX(-50%); color: #fff; font-size: 14px; z-index: 10000001; display: none; }`;
document.head.append(style);

let i = 0;

function push(text, duration = 3000) {
    i++;
    notificationCount++;
    let notification = document.createElement("div");
    notification.innerHTML = `<span class="notification" id="notif${i}">${text}</span>`;
    document.getElementById('canvas').insertAdjacentHTML('beforebegin', notification.innerHTML);
    notification = document.querySelector(`#notif${i}`);
    notification.style.left = `${(window.innerWidth / 2) - (notification.offsetWidth / 2)}px`;
    notification.style.top = `${10 + (notificationCount - 1) * 40}px`;
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.remove();
            notificationCount--;
        }, 500);
    }, duration);
}

function showFovNotification(text) {
    if (!fovNotification) {
        fovNotification = document.createElement("span");
        fovNotification.id = 'fovNotification';
        fovNotification.innerHTML = text;
        document.body.appendChild(fovNotification);
    } else {
        fovNotification.innerHTML = text;
    }
    fovNotification.style.display = 'block';
    setTimeout(() => {
        fovNotification.style.display = 'none';
    }, 1000);
}

function first(g) {
    let a = Module.HEAP32;
    for (let index = 0; index < a.length; ++index) {
        if (a[index] === g) {
            b.push([index]);
        }
    }
    setTimeout(() => {
        if (b.length !== 1) {
            b = [];
            working = false;
            push(`lvl up for fov`);
        } else {
            push(`Fov found scroll ur mouse to change the fov`, 6000);
            push(``, 6000);
            working = false;
            ready = true;
            fovid = b[0];
            changefov(fov);
        }
    }, 2000);
}

document.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        fov += 0.01;
        showFovNotification(fov.toFixed(2));
    } else if (event.deltaY > 0) {
        fov -= 0.01;
        showFovNotification(fov.toFixed(2));
    }
});

function changefov(fov1) {
    let num = new Int32Array(new Float32Array([fov1]).buffer);
    Module.HEAP32[fovid] = num;
}


setInterval(() => {
    if (!working && ready) changefov(fov);
}, 100);
