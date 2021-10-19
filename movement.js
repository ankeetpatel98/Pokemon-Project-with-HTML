const cycle = [0,1,2,3];
const DOWN = 0;
const UP = 3;
const LEFT = 1;
const RIGHT = 2;
const FRAME_LIMIT = 15;
const MOVE_SPEED = 3;

var loopIndex = 0;
var countFrames = 0;
var pressedKey = {}
var xposition = 395;
var yposition = 300;
var yplace = 0;
var currentDirection = DOWN;
var img = new Image();
var background = new Image();
var btImg = new Image();
var enemy = new Image();

btImg.src = "PBC.png"
background.src = "road.png";
img.src = "player.png";
enemy.src = "enemy.png";

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
  pressedKey[event.key] = true;
  //console.log(pressedKey);
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
  pressedKey[event.key] = false;
}

function startAni(){
    var radioValue = $("input[name='option']:checked").val();
	if(radioValue == "bt"){
        var audio = document.getElementById("myAudio");
        audio.volume = 0.1;
        var audio2 = document.getElementById("myAudio2");
        audio2.pause();
        loopAni();
    }
}

function loopAni(){

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var moving = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (pressedKey.w){
        moveChar(0, -MOVE_SPEED, UP, 70);
        yplace = 3;
        moving = true;
    } 
    else if (pressedKey.s) {
        moveChar(0, MOVE_SPEED, DOWN, 70);
        yplace = 0;
        moving = true;
    }
    else if (pressedKey.a) {
        moveChar(-MOVE_SPEED, 0, LEFT, 50);
        yplace = 1;
        moving = true;
    } 
    else if (pressedKey.d) {
        moveChar(MOVE_SPEED, 0, RIGHT, 50);
        yplace = 2;
        moving = true;
    }

    if(moving){
        countFrames++;
        if(countFrames >= FRAME_LIMIT){
            countFrames = 0;
            loopIndex++;
            if(loopIndex >= cycle.length){
                loopIndex = 0;
            }
        }
        draw(cycle[loopIndex], currentDirection, xposition, yposition);
    }

    if(!moving){
        loopIndex = 0;
        draw(0, yplace, xposition, yposition);

    }

    if(xposition <= 162 && xposition >= 130 && yposition >= 247  && yposition <= 279 && currentDirection == UP){
        if(pressedKey.e){
            var canvas = document.getElementById('myCanvas');
            canvas.style.visibility = "hidden";
            var btcanvas = document.getElementById('battleCanvas');
            btcanvas.style.visibility = "visible";
            var ctx = btcanvas.getContext('2d');
            ctx.drawImage(btImg, 0,0,570,380);
            var audio = document.getElementById("myAudio");
            audio.pause();
            audio.currentTime = 0;
            var audio2 = document.getElementById("myAudio2");
            audio2.currentTime = 0;
            audio2.play();
            audio2.volume = 0.1;
            battleBegin();
        }
    }
    if(xposition <= 80 && xposition >= 29 && yposition >= 80 && yposition <= 90 && currentDirection == LEFT){
        if(pressedKey.e){
            var canvas = document.getElementById('myCanvas');
            canvas.style.visibility = "hidden";
            var btcanvas = document.getElementById('battleCanvas');
            btcanvas.style.visibility = "visible";
            var ctx = btcanvas.getContext('2d');
            ctx.drawImage(btImg, 0,0,570,380);
            var audio = document.getElementById("myAudio");
            audio.pause();
            audio.currentTime = 0;
            var audio2 = document.getElementById("myAudio2");
            audio2.currentTime = 0;
            audio2.play();
            audio2.volume = 0.1;
            battleBegin();
        }
    }
    if(xposition <= 478  && xposition >= 430  && yposition >= 80  && yposition <= 90 && currentDirection == RIGHT){
        if(pressedKey.e){
            var canvas = document.getElementById('myCanvas');
            canvas.style.visibility = "hidden";
            var btcanvas = document.getElementById('battleCanvas');
            btcanvas.style.visibility = "visible";
            var ctx = btcanvas.getContext('2d');
            ctx.drawImage(btImg, 0,0,570,380);
            var audio = document.getElementById("myAudio");
            audio.pause();
            audio.currentTime = 0;
            var audio2 = document.getElementById("myAudio2");
            audio2.currentTime = 0;
            audio2.play();
            audio2.volume = 0.1;
            battleBegin();
        }
    }
    if(xposition <= 232 && xposition >= 200 && yposition >= 13  && yposition <= 45 && currentDirection == UP){
        if(pressedKey.e){
            var canvas = document.getElementById('myCanvas');
            canvas.style.visibility = "hidden";
            var btcanvas = document.getElementById('battleCanvas');
            btcanvas.style.visibility = "visible";
            var ctx = btcanvas.getContext('2d');
            ctx.drawImage(btImg, 0,0,570,380);
            var audio = document.getElementById("myAudio");
            audio.pause();
            audio.currentTime = 0;
            var audio2 = document.getElementById("myAudio2");
            audio2.currentTime = 0;
            audio2.play();
            audio2.volume = 0.1;
            battleBegin();
        }
    }

    window.requestAnimationFrame(loopAni);
}

function draw(xframe, yframe, canvasX, canvasY){

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(background, 0,0,570,380);
    ctx.drawImage(enemy, 250, 375, 26, 26, 130, 247, 64, 64);
    ctx.drawImage(enemy, 335, 145, 26, 26, 29, 85, 64, 64);
    ctx.drawImage(enemy, 295, 340, 26, 26, 478, 85, 64, 64);
    ctx.drawImage(enemy, 265, 445, 26, 26, 200, 13, 64, 64);
    ctx.drawImage(img, xframe * 64, yframe * 64, 64, 64, canvasX, canvasY, 64, 64);

}

function moveChar(xDel, yDel, direction, type) {
    var canvas = document.getElementById('myCanvas');
    if (xposition + xDel > 0 && xposition + type + xDel < canvas.width) {
      xposition += xDel;
    }
    if (yposition + yDel > 0 && yposition + type + yDel < canvas.height) {
      yposition += yDel;
    }
    currentDirection = direction;
}

function battleOver(){
    var canvas = document.getElementById('myCanvas');
    canvas.style.visibility = "visible";
    var btcanvas = document.getElementById('battleCanvas');
    btcanvas.style.visibility = "hidden";
    var audio = document.getElementById("myAudio2");
    audio.pause();
    audio.currentTime = 0;
    var audio2 = document.getElementById("myAudio");
    audio2.currentTime = 0;
    audio2.play();
    audio2.volume = 0.1;
}
