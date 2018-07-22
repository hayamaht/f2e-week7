import { GameObjects } from 'phaser'

const MAX_RANK = 77
const RANK_COLS = 13

export class Rank extends GameObjects.TileSprite {
  constructor (scene, x, y) {
    super(scene, x, y, 64, 64, 'rank')
    this.value = 0
  }

  getValue () {
    return this.value
  }

  rankUp (val = 0) {
    let v = this.value + val
    if (v > MAX_RANK) { v = MAX_RANK }
    this.value = v
    this.render()
  }

  rankDown (val = 0) {
    let v = this.value - val
    if (v < 0) { v = 0 }
    this.value = v
    this.render()
  }

  render () {
    this.setTilePosition(
      this.value % RANK_COLS * 64,
      Math.floor(this.value / RANK_COLS) * 64
    )
  }
}
