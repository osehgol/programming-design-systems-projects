var pct = 0; 
var exponent = 4;
var step = 0.01;

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


var w = 130;
var h = 150;
var sm = w * 0.17;
var me = w * 0.25;
var la = w * 0.5;


var letters = {
  b : {
    c1x: w * 0.75,
    c1y: h * 0.25,
    c1s: sm,
    c2x: w * 0.75,
    c2y: h * 0.25,
    c2s: sm,
    c3x: w * 0.75,
    c3y: h * 1.75,
    c3s: sm
  },

  a : {
    c3x: w * 0.75,
    c3y: h * 0.25,
    c3s: sm,
  }
};

function drawLetter(letter, width, height, moduleHeight, letterA) {
  var myGroup = r.group(0, 0);
  // r.rect(0, 0, w, h, myGroup).stroke(false)

  console.log(width);
  console.log(moduleHeight);


  if(letter.c1x <= width){
    letter.c1x += 5;
  } else if (letter.c1y < height){
    letter.c1y += 5;
  } 
  // else if (letter.c1y == 220){
  //   letter.c1x -= 5;
  // }

  r.circle(letter.c1x, letter.c1y, letter.c1s, myGroup).fill(255, 0, 0).stroke(false);

  if(letter.c2y <= height){
    letter.c2y += 5;
  } 

  r.circle(letter.c2x, letter.c2y, letter.c2s, myGroup).fill(255, 0, 0).stroke(false);  
  

  if(letter.c3x <= width){
    letter.c3x +=5;
  }
  r.circle(letter.c3x, letter.c3y, letter.c3s, myGroup).fill(255, 0, 0).stroke(false);  

// console.log(letter.c3x+moduleHeight*2);  


  var thisX = letterA.c3x;
  var thisY = letterA.c3y;

  // small "a"
  pct += step;
   if (pct < 1.0) {
    thisX = 2*250 - pct * 220;
    thisY = 2*250 - pow(pct, exponent) * 220;
  }
  r.circle(thisX, thisY, letterA.c3s, myGroup).fill(255, 0, 0).stroke(false);  

}

function draw(){

// grid

var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 20,
  columns: 3,
  rows: 3
});

var gridWidth = grid.state.width;
var gridHeight = grid.state.height;
var gridModuleHeight = grid.state.moduleHeight;

// console.log(gridModuleHeight);


var size = 40;

r.draw();

drawLetter(letters.b, gridWidth, gridHeight, gridModuleHeight, letters.a);


};


