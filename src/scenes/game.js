import { Scene } from 'phaser'
import { Player } from '../objects/player'
import { Bullet } from '../objects/bullet'
import { GameWidth, GameHeight } from '../consts'

export class Game extends Scene {
  constructor () {
    super({ key: 'game' })
    this.player = null
  }

  create () {
    this.cursors = this.input.keyboard.createCursorKeys();

    const bullets = this.add.group({ 
      classType: Bullet, 
      runChildUpdate: true 
    })
    this.player = new Player(this, bullets)
    this.children.add(this.player)
    this.player.setPosition(GameWidth / 2, GameHeight / 2)
  }

  update (time, delta) {

    this.player.fire()

    if (this.cursors.left.isDown) {
      this.player.rotateLeft()
    }

    if (this.cursors.right.isDown) {
      this.player.rotateRight()
    }
  }
}
