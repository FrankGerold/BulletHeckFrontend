const Game = (x) => {
  x.setup = () => {
    let gameCanvas = x.createCanvas(640, 480)
    gameCanvas.parent(renderArea);
    x.noStroke();

    x.drawingContext.shadowOffsetX = 5;
    x.drawingContext.shadowOffsetY = 5;
    // x.drawingContext.shadowBlur = 10;
    x.drawingContext.shadowColor = "pink";
    // x.background(200);
  }

  x.draw = () => {
    x.background('#FF7083');
    let score = x.text(Math.round(x.frameCount/30), 100, 100)
    // x.background(0);
    // x.fill(255);
    let oval = x.ellipse(x.mouseX, x.mouseY, 80, 50);

    let rectangle = x.rect(0, 0, 50, 30);
    if ((x.keyIsPressed == true) && (x.key == 'ArrowLeft')) {
      rectangle.x -= 7;
    }
    if ((x.keyIsPressed == true) && (x.key == 'ArrowRight')) {
      rectangle.x += 7;
    }
  }
}
