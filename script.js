const watchImage = document.getElementById("watch-image");

const blackBtn = document.getElementById("black-btn");
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const pinkBtn = document.getElementById("pink-btn");
const purpleBtn = document.getElementById("purple-btn");

const timeBtn = document.getElementById("time-btn");
const heartBtn = document.getElementById("heart-btn");

const watchContent = document.getElementById("watch-content");

// Default Active Button

blackBtn.classList.add("active-color");
timeBtn.classList.add("active-feature");

// Time Function

function showTime() {
    watchContent.innerHTML =
        new Date().toLocaleTimeString();
}
showTime();
let timer = setInterval(showTime, 1000);

// Remove Active Color

function removeColorSelection() {
    blackBtn.classList.remove("active-color");
    redBtn.classList.remove("active-color");
    blueBtn.classList.remove("active-color");
    pinkBtn.classList.remove("active-color");
    purpleBtn.classList.remove("active-color");
}

// Color Buttons

blackBtn.onclick = function () {
    watchImage.src = "./images/black.png";
    removeColorSelection();
    blackBtn.classList.add("active-color");
};

redBtn.onclick = function () {
    watchImage.src = "./images/red.png";
    removeColorSelection();
    redBtn.classList.add("active-color");
};

blueBtn.onclick = function () {
    watchImage.src = "./images/blue.png";
    removeColorSelection();
    blueBtn.classList.add("active-color");
};

pinkBtn.onclick = function () {
    watchImage.src = "./images/pink.png";
    removeColorSelection();
    pinkBtn.classList.add("active-color");
};

purpleBtn.onclick = function () {
    watchImage.src = "./images/purple.png";
    removeColorSelection();
    purpleBtn.classList.add("active-color");
};

// Remove Active Feature

function removeFeatureSelection() {
    timeBtn.classList.remove("active-feature");
    heartBtn.classList.remove("active-feature");
}

// Time Button

timeBtn.onclick = function () {
    removeFeatureSelection();
    timeBtn.classList.add("active-feature");
    clearInterval(timer);
    showTime();
    timer = setInterval(showTime, 1000);
};

// Heart Rate Button

heartBtn.onclick = function () {
    removeFeatureSelection();
    heartBtn.classList.add("active-feature");
    clearInterval(timer);
    const bpm =
        Math.floor(Math.random() * 40) + 60;
    watchContent.innerHTML =
        "❤️<br>" + bpm + " BPM";
};