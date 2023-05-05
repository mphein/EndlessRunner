class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
  
  preload() {
    this.load.image('ocean', './assets/endlessRunnerBackground.png');
    this.load.spritesheet('stingray', './assets/Stingray.png', {frameWidth: 96, frameHeight: 32, startFrame: 0, endFrame: 17});
  }

  create() {
    this.ocean = this.add.tileSprite(0,0,640,480,'ocean').setOrigin(0,0);
    this.stingray = new Stingray(this, 50, game.config.height / 1.5, 'Stingray').setOrigin(.5,0);
    this.anims.create({
      key: 'swim',
      frames: this.anims.generateFrameNumbers('stingray', {
      prefix: 'Stingray',
      suffix: '.png',
      start: 0, end: 29, first: 0}),
      frameRate: 17
    })
    this.stingray.play('swim');
  }

  update(){
    this.ocean.tilePositionX += 2;
  }
}

