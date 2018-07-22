import { Scene } from 'phaser'
import { GameWidth, GameHeight } from '../consts'
import { Button } from '../ui/button'

export class Title extends Scene {
  constructor () {
    super({ key: 'title' })
  }

  create () {
    // Listen keydown event to change scene
    this.input.keyboard.once('keydown', () => {
      this.scene.manager.remove('title')
      this.scene.manager.start('game')
    })

    // Create background
    this.add.tileSprite(
      GameWidth / 2, GameHeight / 2,
      GameWidth, GameHeight,
      'bg'
    )

    // Create title
    const title = this.add.text(
      0, 0,
      'Radio Defense',
      {
        fontFamily: 'Kenney Future Narrow',
        fontSize: 64,
        color: '#FFFFFF'
      }
    )

    title.setOrigin(0.5)
    title.setPosition(GameWidth / 2, GameHeight / 2 - 60)

    // Create text
    const text = this.add.text(
      0, 0,
      'Press ANY key to start',
      {
        fontFamily: 'Kenney Future Narrow',
        fontSize: 24,
        color: '#FFFFFF'
      }
    )

    text.setOrigin(0.5)
    text.setPosition(GameWidth / 2, GameHeight / 2 + 160)
    text.setAlpha(0)

    this.tweens.add({
      targets: text,
      duration: 500,
      alpha: 1,
      yoyo: true,
      loop: -1
    })
  }
}
