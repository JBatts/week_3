"use strict";
window.onload = init;
function init() {
const helloBtn = document.getElementById("helloBtn");
helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked() {
messagePara.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium dolor earum facere iure itaque, iste porro quos dolorum molestias natus esse modi mollitia obcaecati numquam asperiores libero aspernatur tempore!"
}