// You can only use black (0) and white (255). 
// You are only allowed to use triangle(), rect() and ellipse() once each, 
// and no other drawing functions are allowed 
// (no beginShape or images). 
// Bring to class a design of an ice cream cone. Yes, an ice cream cone.

var i,j;

var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1200,
  debug: true
});

// r.triangle(400, 250, 525, 600, 650, 250)
//   .fill(0, 0, 0)
//   .stroke(true)

//distant earth
r.ellipse(650, 200, 30, 30)
  .fill(255, 255, 255)
  .stroke(true)

//path
r.polygon(0, 0)
  .lineTo(525, 625) 
  .lineTo(575, 625)
  .lineTo(700, 800)
  .lineTo(100, 800)
  .fill(255);

  //astronaut
r.ellipse(30, 950, 150, 150)
  .fill(255, 255, 255)
  .stroke(true)

r.ellipse(5, 960, 150, 150)
  .fill()
  .stroke(true)

r.rect(0, 1000, 135, 200)
  .fill()
  .stroke()

// r.path(0, 0)
//   .lineTo(100, 0)
//   .curveTo(100, 100, 0, 100, 0, 0);


// var x = 525;
// for(var i = 4; i < 17; i++) {
//   r.rect(x, i * 20, 5, 5);
//   if(i < 10) {
//     x += 10;  
//   } else {
//     x -= 10;
//   }
  
// }

// for(var k = 525; k < 650; k+=15){
// 	rectangle(k , 200);	
// }

// for(var k = 200; k < 335; k+=15){
// 	rectangle(525,k);	
// }

// for(var i = 525; i < 650; i+=15){
// 	for (var j = 200; j < 300; j+=15){
// 	r.rect(i, j, 5, 5)
//   	 .fill(255)
//   	 .stroke(true)
// 	}
// }  

r.draw();

// function rectangle(i,j){

// 	r.rect(i,j,5,5)
// 		.fill(255)
// 		.stroke(true)
// }