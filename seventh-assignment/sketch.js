var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var gridWidth;
var gridHeight;
var gridModuleHeight;
var gridModuleWidth;
var gridGutter;
var innerSquareWidth;


function setup(){

// grid
var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 20,
  columns: 8,
  rows: 8
});

gridWidth = grid.state.width;
gridHeight = grid.state.height;
gridGutter = grid.state.gutter; 
innerSquareWidth = gridWidth / grid.state.rows;
gridModuleHeight = grid.state.moduleHeight*2 - gridGutter;
gridModuleWidth = grid.state.moduleWidth*2 - gridGutter;

// letters object t & s

var w = 130;
var h = 150;
var sm = w * 0.17;
var me = w * 0.25;
var la = w * 0.5;

var letters = {
  t : {
    r1x: gridModuleWidth,
    r1y: gridModuleHeight,
    r1w: gridGutter,
    r1h: gridGutter
  }, 

  s : {
    r1x: w * 0.75,
    r1y: h * 0.25,
    r1s: sm,
  }
};

// draw 
draw(letters.t, letters.s, gridWidth, gridHeight, gridModuleHeight, gridModuleWidth, gridGutter, innerSquareWidth);

}

function drawLetter(letterT, letterS, width, height, modHeight, modWidth, modGutter, innerSquare) {

  console.log(letterT);

  var myGroup = r.group(0, 0);

  var tX = letterT.r1x;
  var tY = letterT.r1y;
  var tW = letterT.r1w;
  var tH = letterT.r1h;

  if(letterT.r1x < (letterT.r1x + innerSquare*2)){
    letterT.r1x += 5;
  }

  r.rect(tX, tY, tW, tH, myGroup).fill(255, 0, 0).stroke(false);
  // r.rect(tX+innerSquare, tY, tW, tH, myGroup).fill(255, 0, 0).stroke(false);
  // r.rect((tX+innerSquare*2), tY, tW, tH, myGroup).fill(255, 0, 0).stroke(false);
  // r.rect((tX+innerSquare), (tY+innerSquare), tW, tH, myGroup).fill(255, 0, 0).stroke(false);
  // r.rect((tX+innerSquare), (tY+innerSquare*2), tW, tH, myGroup).fill(255, 0, 0).stroke(false);  
 
}


function draw(letterT, letterS, gridWidth, gridHeight, gridModuleHeight, gridModuleWidth, gridGutter, innerSquareWidth){

// drawLetter(letter.t, letter.s, this.gridWidth, this.gridHeight);
drawLetter(letterT, letterS, this.gridWidth, this.gridHeight, this.gridModuleHeight, this.gridModuleWidth, this.gridGutter, this.innerSquareWidth);


r.draw();


};




