var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  frameRate: 24
});

// \/
r.path(200, 150)
  .lineTo(75,250)
  .lineTo(125,0)
  .curveTo(75,250,100,300,75.250)
  .fill(255)
  .closePath();

// \/

r.path(325,149)
  .lineTo(75,250)
  .lineTo(125,0)
  .curveTo(75,250,100,300,75.250)
  .closePath();

// // fall
// r.path(500, 400)
//  .fill(255)
//  .curveTo(-55, 100, 5, 40)

// splash group
var splashGroup = r.group(395, 413);

// splash
r.path(50, -20, splashGroup)
 .fill(255, 1)
 .curveTo(-17, 35, -15, 75) 

r.path(0, -20, splashGroup)
 .fill(255, 1)
 .curveTo(17, 30, 10, 75)

// droplet group 
var dropletGroup = r.group(395, 413);

// droplet
r.path(0, 0, dropletGroup)
 .fill(255, 1)
 .curveTo(0, 0, 5, -5, 50, 0)
 .curveTo(50, 0, 45, 5, 45, 30)
 .curveTo(45, 30, 30, 25, 5, 30)
 .curveTo(5, 30, 5, 20, 0, 0)

r.path(45, 30, dropletGroup)
 .fill(255, 1)
 .curveTo(0, 0, -5, 5, -40, 0)


// playful circle

var circleSize = 100;
var numPoints = 30;
var angle = 360 / numPoints;

// first make a polygon by using sin and cos
var poly = r.polygon(200, 200)
  .fill(false)
  .stroke(0, 0, 0, 0.5);

for(var i = 0; i < numPoints; i++) {
  var x = Math.cos(Rune.radians(angle * i)) * circleSize;
  var y = Math.sin(Rune.radians(angle * i)) * circleSize;
  poly.lineTo(x, y);
}

// r.on('draw', function(stage) {
//   poly = poly.copy();
//   for(var i = 0; i < poly.vars.vectors.length; i++){
//     poly.vars.vectors[i].x += Rune.random(-2,2);
//     poly.vars.vectors[i].y += Rune.random(-2,2);
//   }
// });

r.on('mousemove', function(mouse) {
  poly.move(mouse.x, mouse.y);
});

r.play();