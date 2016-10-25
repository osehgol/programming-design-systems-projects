var pct = 0; 
var exponent = 4;
var l = 0;
var m = 0;

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
    c2x: w * 0.7,
    c2y: h * 0.66,
    c2s: me
  }
};

function drawLetter(letter, width, height) {
  var myGroup = r.group(0, 0);
  // r.rect(0, 0, w, h, myGroup).stroke(false)
 
  l += 5;
  if(pct < 1.0){
    l = 0 + (pct * width);
    m = 0 + (pow(pct, exponent)*height) ;
  }

  r.circle(l, m, letter.c1s, myGroup).fill(255, 0, 0).stroke(false);
  console.log(letter.c1x)    
 
}

function draw(){

drawLetter(letters.b, gridWidth, gridHeight);

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

var size = 40;

r.draw();


};


