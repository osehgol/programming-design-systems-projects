var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 850
});

var size = 50;
var sides = [3, 4, 6, 40];

for(var i = 0; i < sides.length; i++) {

  var shape = r.polygon(r.width/2, 125 + (i * 200));

  console.log(shape);
  var angle = 360/sides[i];
  console.log("spacing: "+angle);

  for(var j = 0; j < sides[i]; j++) {
    var x = Math.cos(r.radians(j * angle)) * size;
    var y = Math.sin(r.radians(j * angle)) * size;
    shape.lineTo(x, y);

console.log("x: "+x+" y: "+y);

  }

}

r.draw();