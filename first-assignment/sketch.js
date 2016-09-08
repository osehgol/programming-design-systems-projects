// You can only use black (0) and white (255). 
// You are only allowed to use triangle(), rect() and ellipse() once each, 
// and no other drawing functions are allowed 
// (no beginShape or images). 
// Bring to class a design of an ice cream cone. Yes, an ice cream cone.


var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.triangle(400, 250, 525, 600, 650, 250)
  .fill(0, 0, 0)
  .stroke(true)

r.ellipse(525, 200, 250, 250)
  .fill(255, 255, 255)
  .stroke(true)

for(var i = 525; i < 650; i+=15){
	for (var j = 0; j < 650; j+=15){
	r.rect(i, j, 5, 5)
  	 .fill(255)
  	 .stroke(true)
	}

}  

r.draw();