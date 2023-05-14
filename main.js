// Michael Hein
// SeaPancake
// 35 hours
// I am particularly proud of the "floatiness" of the Stingray controls. I worked a long time learning and playing around with the physics.
// I wanted it to feel pretty weightless, consequential without player input, and the ability to swim pretty quickly if the player is focused.
// I am also happy with the simple solution to having the sharks apply pressure to both halves of the water so that they couldn't spawn directly
// on top of one another.
// I am proud of the artwork I did for this project, I spent a lot longer on the stingray than originally anticipated. I am not very artsy/art oriented
// and I think it turned out pretty well!

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
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
