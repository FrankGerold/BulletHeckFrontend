

class Bullet {

  // static all = []

  constructor () {

   this.randX = Math.floor(Math.random() * 640)
   this.randY = Math.floor(Math.random() * 480)

   this.traj = this.randMotion()

  }

  renderBullet = function (x) {
    x.fill('#241926')

    this.randX += this.traj;
    this.randY += this.traj;
    this.wall(x)
    x.square(this.randX, this.randY, 10, 3);
  }

  randMotion = function() {
    if (this.randY >= 480/2) {
      return -5
    }
    else {
      return 5
    }
  }

  wall = function (x) {
    if (this.randX < 5 || this.randX > 633) {
      this.traj = -this.traj
    }
    if (this.randY < 10 || this.randY > 480) {
      this.traj = -this.traj
    }
  }
}
//
// const fireBullet = (x) => {
//   let bull = new Bullet
//   bull.renderBullet(x)
// }
