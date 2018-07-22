import { GameObjects } from 'phaser'

export class Bullet extends GameObjects.Image {
  constructor (scene, frame) {
    super(scene, 0, 0, 'sheet', frame)
    this.speed = 0
    this.born = 0
  }

  fire (player) {
    this.setPosition(player.x, player.y)

    

    this.born = 0
  }

  update (time, delta) {
    this.x += this.speed * delta
    this.born += delta

    if (this.born > 1000) {
      this.setActive(false)
      this.setVisible(false)
    }
  }
}
