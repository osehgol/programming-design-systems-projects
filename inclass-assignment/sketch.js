// You can only use black (0) and white (255). 
// You are only allowed to use triangle(), rect() and ellipse() once each, 
// and no other drawing functions are allowed 
// (no beginShape or images). 
// Bring to class a design of an ice cream cone. Yes, an ice cream cone.

var i,j;

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var width = 300;
var height = 300;

r.rect(250,250, width, height)
  .fill(255,0,0)
  .stroke(0,255,0);

r.rect(250,250,width/3,height/3)
  .fill(0,255,0)
  .stroke(255,0,0)
  .rotate(45,width, height);  


r.draw();

// var bigSize = 300;
// var smallSize = 

