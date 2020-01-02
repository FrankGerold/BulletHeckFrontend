const Game = (x) => {
  x.setup = () => {
    let gameCanvas = x.createCanvas(640, 480)
    gameCanvas.parent(renderArea);
    x.noStroke();

    x.drawingContext.shadowOffsetX = 5;
    x.drawingContext.shadowOffsetY = 5;
    // x.drawingContext.shadowBlur = 10;
    x.drawingContext.shadowColor = "#F3F7F4";
    // x.background(200);
    x.frameRate(60);
  }

  let rectX = 10
  let rectY = 100
  let randX = Math.floor(Math.random() * 640)
  let randY = Math.floor(Math.random() * 480)
  let randMotion = (num) => {
    if (randY >= 480/2) {
      return -3
    }
    else {
      return 3
    }
  }
  let traj = randMotion()

  x.draw = () => {
    x.background('#BA3B52');
    let score = x.text(Math.round(x.frameCount/30), 100, 100)
    x.fill('#FF7083');
    let oval = x.ellipse(x.mouseX, x.mouseY, 30, 20);


    if ((x.keyIsPressed == true) && (x.keyCode === 37)) {
      rectX -= 5;
    }

    if ((x.keyIsPressed == true) && (x.keyCode === 39)) {
      rectX += 5;
    }

    if ((x.keyIsPressed == true) && (x.keyCode === 38)) {
      rectY -= 5;
    }

    if ((x.keyIsPressed == true) && (x.keyCode === 40)) {
      rectY += 5;
    }

    let rectangle = x.rect(rectX, rectY, 50, 30);

    x.fill ('#241926')


    randX += traj
    randY += traj
    let bullet = x.square(randX, randY, 10, 3);

  }
}
