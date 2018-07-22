import { GameObjects } from 'phaser'

export class Button extends GameObjects.Container {
  constructor (scene, text, style = null, x = 0, y = 0) {
    super(scene, x, y)
    this.text = text
    this.style = style
    this._text = null
    this.create()
  }

  create () {
    this._text = new GameObjects.Text(this.scene, 0, 0, this.text, this.style)
    this._text.setOrigin(0.5)
    this.add(this._text)

    // this.add(new GameObjects.Image(this.scene, 0, 0, 'ui', 'barHorizontal_white_mid.png'))
    const border = new GameObjects.Graphics(this.scene, 0, 0)
    border.lineStyle(3, 0xFFFFFF, 1)
    border.strokeRoundedRect(-50, -20, 100, 40)

    this.add(border)
  }
}
