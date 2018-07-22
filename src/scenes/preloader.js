import { Scene } from 'phaser'
import { GameHeight, GameWidth } from '../consts'

export class Preloader extends Scene {
  constructor () {
    super({ key: 'preloader' })
  }

  preload () {
    const progress = this.add.graphics()

    this.load.path = './assets/'

    this.load.on('progress', (value) => {
      progress.clear()
      progress.fillStyle(0xFFFFFF, 1)
      progress.fillRect(0, GameHeight - 5, GameWidth * value, 5)
    })

    this.load.on('complete', () => {
      console.log('load complete')
      progress.destroy()
      this.scene.manager.start('title')
    })

    this.load.atlasXML({
      key: 'spaceshotter',
      textureURL: 'altas/sheet.png',
      atlasURL: 'altas/sheet.xml'
    })

    this.load.atlasXML({
      key: 'ui',
      textureURL: 'altas/ui.png',
      atlasURL: 'altas/ui.xml'
    })

    this.load.image({
      key: 'rank',
      url: 'tiles/rank/default_silver.png'
    })

    this.load.image({
      key: 'bg',
      url: 'images/backgrounds/blue.png'
    })
  }
}
