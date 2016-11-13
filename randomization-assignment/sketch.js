// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800
});

// Create colors
// -------------------------------------

var colors = [
  [ new Rune.Color('hsv', 0, 85, 22), new Rune.Color('hsv', 0, 80, 77, 0.8) ],  // reds
  [ new Rune.Color('hsv', 85, 84, 20), new Rune.Color('hsv', 85, 79, 38, 0.8) ], // greens
  [ new Rune.Color('hsv', 205, 28, 48), new Rune.Color('hsv', 205, 18, 59, 0.8) ], // blues
  [ new Rune.Color('hsv', 43, 94, 59), new Rune.Color('hsv', 43, 91, 89, 0.8) ], // yellows
];

var colors2 = [
  [ new Rune.Color('hsv', 0, 95, 22), new Rune.Color('hsv', 0, 80, 77, 0.8) ],  // reds
  [ new Rune.Color('hsv', 85, 94, 20), new Rune.Color('hsv', 85, 79, 38, 0.8) ], // greens
  [ new Rune.Color('hsv', 205, 98, 48), new Rune.Color('hsv', 205, 18, 59, 0.8) ], // blues
  [ new Rune.Color('hsv', 43, 104, 59), new Rune.Color('hsv', 43, 91, 89, 0.8) ], // yellows
];

// Find random points for the gray line
// -------------------------------------

var noise = new Rune.Noise();
var linePoints = [];

var x = -300;
var y = 0;


while (x < 1000) {
  // increment x with a random amount
  x += Rune.random(160, 350);
  // use noise to find a y value from 500 to 600.
  y = 500 + (noise.get(x / 500) * 500);
  // push this point into the array
  linePoints.push(new Rune.Vector(x, y));
}


var cur = 0;
var curLine = 0;

r.on('update', function(){
  

  for(var i=0; i<linePoints.length-1; i++) 
  {
      var bottomLeft = linePoints[i];
      var bottomRight = linePoints[i+1];

      var ranHeightY = Rune.random(150,350);
      var ranHeightX = Rune.random(150,350);

      var shape = [{fromVec: new Rune.Vector(bottomLeft.x, bottomLeft.y), toVec: new Rune.Vector(ranHeightX, ranHeightY)}];

      console.log(shape)

      var pos = shape[curLine].fromVec.lerp(shape[curLine].toVec, cur)

      console.log(pos);

      r.rect(pos.x, pos.y, 1, 1).fill(0).stroke();
      cur += 0.001;

      if(cur > 1) {
      curLine++;
      cur = 0;
    }

   if(!shape[curLine]) r.pause()
  } 
  

});


r.play();

  

// Draw shapes based on those points
// -------------------------------------

// loop through each point but the last one
// for(var i = 0; i < linePoints.length - 1; i++)
// {
//   // first find a random height for this rectangle
//   var ranHeight = Rune.random(150, 350);

//   // then find all the points we need for this rectangle
//   var bottomLeft  = linePoints[i];
//   var bottomRight = linePoints[i + 1];

//   // and calculcate the top points from this
//   var topLeft = bottomLeft.sub(new Rune.Vector(0, ranHeight));
//   var topRight = bottomRight.sub(new Rune.Vector(0, ranHeight));

//   // get a random set of colors. We could do this with weighted random
//   // based on the number of times the colors appear in the original.
//   var colorset = colors[Math.floor(Rune.random(colors.length))];

//   // now draw the triangles to make the real rectangles
//   r.triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, topRight.x, topRight.y)
//     .fill(colorset[0])
//     .stroke(false);

//   r.triangle(topLeft.x, topLeft.y, topRight.x, topRight.y, bottomRight.x, bottomRight.y)
//     .fill(colorset[1])
//     .stroke(false);

//   // aaaand the line
//   // var lines = r.line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y)
//   //   .strokeWidth(2)
//   //   .stroke(0, 0, 0.5);

//   var lines = [{fromVec: new Rune.Vector(bottomLeft.x, bottomLeft.y), toVec: new Rune.Vector(bottomRight.x, bottomRight.y)}];
//   }


// var cur = 0;
// var curLine = 0;

// r.on('update', function(){

//   var pos = lines[curLine].fromVec.lerp(lines[curLine].toVec, cur);
  
//     r.rect(pos.x, pos.y, 5, 5).fill(0).stroke(false);
  
//     cur += 0.01;

//   if(cur > 1){
//     curLine++;
//     cur = 0;
//   }

//   if(!lines[curLine]) r.pause()



// });

// r.play();

 // r.draw();




// // grid
// var grid = r.grid({
//   x: 50,
//   y: 50,
//   width: r.width - 100,
//   height: r.height - 100,
//   gutter: 20,
//   columns: 8,
//   rows: 8
// });

// // grid parameters
// var gridWidth = grid.state.width;
// var gridHeight = grid.state.height;
// var gridGutter = grid.state.gutter; 
// var innerSquareWidth = gridWidth / grid.state.rows;
// var gridModuleHeight = grid.state.moduleHeight*2 - gridGutter;
// var gridModuleWidth = grid.state.moduleWidth*2 - gridGutter;


// // letters T & S
// var lines = [
//   { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight)},
//   { fromVec: new Rune.Vector(gridModuleWidth*1.75, gridModuleHeight), toVec: new Rune.Vector(gridModuleWidth*1.75, gridModuleHeight*1.75)},

//   { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2)},
//   { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2.35)},
//   { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2.35), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2.35)},

//   { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2.35), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2.75)},
//   { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*2.75), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*2.75)},


//   { fromVec: new Rune.Vector(gridModuleWidth*4, gridModuleHeight), toVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight)},
//   { fromVec: new Rune.Vector(gridModuleWidth*4.75, gridModuleHeight), toVec: new Rune.Vector(gridModuleWidth*4.75, gridModuleHeight*1.75)},
//   { fromVec: new Rune.Vector(gridModuleWidth*4.75, gridModuleHeight*1.75), toVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*1.75)},
//   { fromVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*1.75), toVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*2.35)},
//   { fromVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*2.35), toVec: new Rune.Vector(gridModuleWidth*4, gridModuleHeight*2.35)},

//   { fromVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*4), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*4)},
//   { fromVec: new Rune.Vector(gridModuleWidth*1.75, gridModuleHeight*4), toVec: new Rune.Vector(gridModuleWidth*1.75, gridModuleHeight*4.35)},
//   { fromVec: new Rune.Vector(gridModuleWidth*2, gridModuleHeight*4.35), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*4.35)},
//   { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*4.35), toVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*4.75)},
//   { fromVec: new Rune.Vector(gridModuleWidth*2.5, gridModuleHeight*4.75), toVec: new Rune.Vector(gridModuleWidth, gridModuleHeight*4.75)},


//   { fromVec: new Rune.Vector(gridModuleWidth*4, gridModuleHeight*4), toVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*4)},
//   { fromVec: new Rune.Vector(gridModuleWidth*4.75, gridModuleHeight*4), toVec: new Rune.Vector(gridModuleWidth*4.75, gridModuleHeight*4.35)},
//   { fromVec: new Rune.Vector(gridModuleWidth*4, gridModuleHeight*4.65), toVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*4.65)},
//   { fromVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*4.65), toVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*5.05)},
//   { fromVec: new Rune.Vector(gridModuleWidth*5.5, gridModuleHeight*5.05), toVec: new Rune.Vector(gridModuleWidth*4, gridModuleHeight*5.05)}

// ];


// var cur = 0;
// var curLine = 0;

// // draw
// r.on('update', function() {

// var hue = (Math.floor(Math.random() * 256));
// var hue2 = (Math.floor(Math.random() * 256));
// var hue3 = (Math.floor(Math.random() * 256));

//   var pos = lines[curLine].fromVec.lerp(lines[curLine].toVec, cur);

// if(pos.x >= 400) {
//     r.rect(pos.x, pos.y, gridGutter, gridGutter).fill(hue,hue2,0).stroke(false);
// } else {
//     r.rect(pos.x, pos.y, gridGutter, gridGutter).fill(255,0,0).stroke(false);
// }

//   cur += 0.01;  

//   if(cur > 1) {
//     curLine++;
//     cur = 0;
//   }

//   if(!lines[curLine]) r.pause()
  
// });

// r.play();

