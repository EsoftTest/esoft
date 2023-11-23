"use strict";

// === Секундомер ===аег

const counterElement = document.querySelector('#counter')
let counter = 0;
let timerID;

// Start

const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
 //   console.log('btnStart');
     timerID = setInterval(function (){
        counter++;
        counterElement.innerText = counter;
    }, 1000);
};

// Pause

const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
//    console.log('btnPause');
    clearInterval(timerID);
//    console.log('timerID', timerID);
};

// Reset

const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
 //   console.log('btnReset');
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);

};
