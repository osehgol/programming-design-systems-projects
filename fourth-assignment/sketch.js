var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1200,
  frameRate: 24
});

// \/
r.path(100, 150)
  .lineTo(75,250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("5a72a0")
  .fill("5a72a0")
  .closePath();

// \/

r.path(425,149)
  .lineTo(75,250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("952500")
  .fill("952500")
  .closePath();


// \/

r.path(500, 650)
  .lineTo(75, 250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("cd3a2d")
  .fill("cd3a2d")
  .closePath();

// \/

r.path(925,749)
  .lineTo(75,250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("cd3a2d")
  .fill("cd3a2d")
  .closePath();

// \/

r.path(500, 150)
  .lineTo(75, 250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("cd3a2d")
  .fill("cd3a2d")
  .closePath();

// \/

r.path(925,149)
  .lineTo(75,250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("cd3a2d")
  .fill("cd3a2d")
  .closePath();


// \/
r.path(100, 650)
  .lineTo(75,250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("5a72a0")
  .fill("5a72a0")
  .closePath();

// \/

r.path(425,749)
  .lineTo(75,250)
  .lineTo(325,0)
  .curveTo(75,250,100,300,75.250)
  .stroke("ee5701")
  .fill("ee5701")
  .closePath();


r.play();