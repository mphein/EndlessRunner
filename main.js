let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Load, Menu, Play ],
  fps: {
    target: 60,
    forceSetTimeOut: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
      x: 0,
      y: 0
      }
    }
  }
}

let game = new Phaser.Game(config);

// See Nathan Altice PaddleParkourP3 https://github.com/nathanaltice/PaddleParkourP3/blob/master/src/main.js
// shortcuts for frequently used measurements
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;


let keyR, keyUP, keyDOWN, keyJUMP