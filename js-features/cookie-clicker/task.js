"use strict";

const image = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter");

image.onclick = function() {
    image.width = 170;
    clicker__counter.textContent++;
    if (clicker__counter.textContent % 2) {
        image.width = 200;
    }
};