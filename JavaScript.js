var leftArrow = 37;   // the keycode of left arrow key
var upArrow = 38;
var rightArrow = 39;
var downArrow = 40;
var leftPos;
var upPos;
var container;
var ball;
var containerWidth;
var containerHeight
var hits = 0;

function init() {
    container = document.getElementById("container")
    ball = document.getElementById("ball");
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
    leftPos = containerWidth / 2;
    upPos = containerHeight/ 2;
    ball.style.left = leftPos + "px";
    ball.style.top = upPos + "px";
    document.addEventListener("keydown", onkeydown);
}

function onkeydown(ev) {
    ev = ev || window.event;
    console.log("ev.keyCode =  " + ev.keyCode);

    if (ev.keyCode === downArrow) {
        if (upPos+ball.offsetHeight >= container.offsetHeight) {
            alert("You reached the left edge! please watch out!");
            hits++;
            checkHits();
        }
        else {
            upPos = upPos + 50;
            ball.style.top = upPos + "px";
        }
    }
    else if (ev.keyCode === upArrow) {
        if (upPos<=0) {
            alert("You reached the left edge! please watch out!");
            hits++;
            checkHits();
        }
        else {
            upPos = upPos - 50;
            ball.style.top = upPos + "px";
        }
    }
    else if (ev.keyCode === leftArrow) {
        if (leftPos <= 0) {
            alert("You reached the left edge! please watch out!");
            hits++;
            checkHits();
        }
        else {
            leftPos = leftPos - 50;
            ball.style.left = leftPos + "px";
        }
    }
    else if (ev.keyCode === rightArrow) {
        if (ball.offsetWidth + leftPos >= container.offsetWidth) {
            alert("You reached the left edge! please watch out!");
            hits++;
            checkHits();
        }
        else {
            leftPos = leftPos + 50;
            ball.style.left = leftPos + "px";
        }
    }
}

function checkHits() {
    if(hits==3){
        var img = document.createElement("IMG");
        img.src="gameover.png";
        container.appendChild(img);
        img.id = "game-over-img"
        document.removeEventListener("keydown", onkeydown);
        container.removeChild(ball);
}
}