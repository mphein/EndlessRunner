let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Load, Menu, Play, End ],
  fps: {
    target: 60,
    forceSetTimeOut: true
  },
  backgroundColor: '#ADD8E6',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
      x: 0,
      y: 0
      }
    }
  }
}

let game = new Phaser.Game(config);

// shortcuts for frequently used measurements
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;


let keyR, keyP, keyUP, keyDOWN, keyJUMP, keyM;
let highScore = 0;
let score = 0;