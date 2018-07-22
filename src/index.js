/* eslint no-unused-vars:0 */

import * as Phaser from 'phaser'
import { Preloader } from './scenes/preloader'
import { Title } from './scenes/title'
import { Game } from './scenes/game'
import { GameWidth, GameHeight } from './consts'

var config = {
  type: Phaser.AUTO,
  width: GameWidth,
  height: GameHeight,
  scene: [
    Preloader,
    Title,
    Game
  ]
}

var game = new Phaser.Game(config)
