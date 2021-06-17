var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", changeFace, false);
var screenWidth = screen.width - 100;

var face1 = document.getElementById("face1");
var face2 = document.getElementById("face2");
var faces = document.getElementById("faces");
face2.style.width = screenWidth / 4 + "px";
face1.style.width = screenWidth / 4 + "px";

var maxWidth = screenWidth / 2;

var prevX = 0;
function changeFace(e) {
  var xDirection = getMouseDirection(e);
  var face1Width = face1.offsetWidth;
  var face2Width = face2.offsetWidth;
  if (xDirection == "left") {
    moveLeft(face1Width, face2Width);
  } else {
    moveRight(face1Width, face2Width);
  }
}
function moveLeft(face1Width, face2Width) {
  if (face2Width < maxWidth) {
    face2.style.width = face2Width + 10 + "px";
    face1.style.width = face1Width - 10 + "px";

    //Move image Left
    var picPos = faces.offsetLeft;
    maxLeft = 150;

    faces.style.left = picPos > maxLeft ? picPos - 4 + "px" : picPos;

    //Change opacity
    percentage = getPercentage(face1Width, screenWidth / 4);
    document.getElementById("text1").style.opacity =
      percentage > 0.2 ? percentage : 0;

    percentage = getPercentage(face2Width, screenWidth / 4);
    document.getElementById("text2").style.opacity =
      percentage > 0.2 ? percentage : 0;
  }
}
function moveRight(face1Width, face2Width) {
  if (face1Width < maxWidth) {
    face1.style.width = face1Width + 10 + "px";
    face2.style.width = face2Width - 10 + "px";
  }

  //Move Image Right
  var picPos = faces.offsetLeft;
  maxRight = screenWidth / 2 - 150;

  faces.style.left = picPos < maxRight ? picPos + 4 + "px" : picPos;

  //change opacity
  percentage = getPercentage(face2Width, screenWidth / 4);
  document.getElementById("text2").style.opacity =
    percentage > 0.2 ? percentage : 0;

  percentage = getPercentage(face1Width, screenWidth / 4);
  document.getElementById("text1").style.opacity =
    percentage > 0.2 ? percentage : 0;
}
function getMouseDirection(e) {
  newX = e.pageX;
  if (prevX < newX) {
    xDirection = "right";
  } else {
    xDirection = "left";
  }

  prevX = newX;
  return xDirection;
}
function getPercentage(width, total) {
  return (width * 100) / total / 100;
}
