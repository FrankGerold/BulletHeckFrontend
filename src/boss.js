

class Bullet {

  // static all = []

  constructor () {

   this.randX = Math.floor(Math.random() * 640)
   this.randY = Math.floor(Math.random() * 480)

   this.traj = this.randMotion()

    //
    // x.fill('#241926')
    // x.square(this.randX, this.randY, 10, 3);

    // Bullet.all.push(this)
  }

  renderBullet = function (x) {
    x.fill('#241926')
    
    this.randX += this.traj
    this.randY += this.traj
    x.square(this.randX, this.randY, 10, 3);
  }

  randMotion = function() {
    if (this.randY >= 480/2) {
      return -3
    }
    else {
      return 3
    }
  }
}
