import { GameObjects } from 'phaser'

export class Player extends GameObjects.Container {
  constructor (scene, bullets) {
    super(scene, 0, 0)
    this.bullets = bullets
    this.lastFired = 0
    this.ship = null
    this.create()
  }

  create () {
    this.ship = new GameObjects.Image(this.scene, 0, 0, 'spaceshotter', 'playerShip2_red.png')
    this.add(this.ship)
  }

  update (time, delta) {
    if (time > this.lastFired) {
      this.fire()
      this.lastFired = time + 100
    }
  }

  fire () {
    const bullet = this.bullets.get()

    if (!bullet) { return }

    bullet.setActive(true)
    bullet.setVisible(true)
    bullet.fire(this)
  }

  rotateLeft () {
    this.ship.angle -= 10
  }

  rotateRight () {
    this.ship.angle += 10
  }
}
