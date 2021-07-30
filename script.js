
//----------initial data---------//
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');  
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

//----------events----------//
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorEventClick);
});

screen.addEventListener('mousedown', MouseDownEvent);
screen.addEventListener('mousemove', MouseMoveEvent);
screen.addEventListener('mouseup', MouseUpEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);


//----------functions----------//
function colorEventClick(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function MouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function MouseMoveEvent(e) {
    if (canDraw) {
      draw(e.pageX, e.pageY);
    }
}
function MouseUpEvent() {
    canDraw = false;
}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //---Processo CTX---//
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
