// canvas setup
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

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

// grid parameters
var gridWidth = grid.state.width;
var gridHeight = grid.state.height;
var gridGutter = grid.state.gutter; 
var innerSquareWidth = gridWidth / grid.state.rows;
var gridModuleHeight = grid.state.moduleHeight*2 - gridGutter;
var gridModuleWidth = grid.state.moduleWidth*2 - gridGutter;


// letters T & S
var lines = [
  { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight)},
  { fromVec: new Rune.Vector(gridModuleWidth*1.75, gridModuleHeight), toVec: new Rune.Vector(gridModuleWidth*1.75, gridModuleHeight*1.75)},

  { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2)},
  { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2.5)},
  { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2.5), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2.5)},

  { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2.5), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*3)},
  { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*3), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*3)}

];


var cur = 0;
var curLine = 0;

// draw
r.on('update', function() {

  var pos = lines[curLine].fromVec.lerp(lines[curLine].toVec, cur);
  r.rect(pos.x, pos.y, gridGutter, gridGutter).fill(255,0,0).stroke(false);

  cur += 0.01;  

  if(cur > 1) {
    curLine++;
    cur = 0;
  }

  if(!lines[curLine]) r.pause()
  
});

r.play();


