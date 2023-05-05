let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
      x: 0,
      y: 0
      }
    }
  }
}

let game = new Phaser.Game(config);

let keyUp, keyDown, keyJump;