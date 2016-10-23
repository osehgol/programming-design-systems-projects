var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

// Create a rectangle to fill the entire screen
// and a smaller rectangle on top
var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 60,
  columns: 3,
  rows: 3
});

console.log(grid.state.moduleWidth);

var size = 40;

for(var i = 0; i < 50; i++)
{
  var color = new Rune.Color(Rune.random(0, 255), Rune.random(0, 255), Rune.random(0, 255));
  var x = Rune.random(size, grid.state.moduleWidth - size);
  var y = Rune.random(size, grid.state.moduleHeight - size);
  var circle = r.circle(x, y, size).fill(color).stroke(false);

  // we use .ceil because numbers start at 1
  var randomCol = Math.ceil(Rune.random(grid.state.columns));
  var randomRow = Math.ceil(Rune.random(grid.state.rows));
  grid.add(circle, randomCol, randomRow);
}

r.draw();