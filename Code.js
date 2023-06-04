var ball = document.getElementById("ball");
var field = document.getElementById("field");

var moving = false;

field.addEventListener("mousedown", initialClick, false);

function move(e){

    var newX = e.clientX - 10;
    var newY = e.clientY - 10;
  
    image.style.left = newX + "px";
    image.style.top = newY + "px";
  
    
  }
  
  function initialClick(e) {
    console.log (e.pageX);
    ball.style.left = e.pageX + "px";
    ball.style.top = e.pageY + "px";
  }