class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
  
  preload() {
    this.load.image('ocean', './assets/Background/Ocean.png');
    this.load.image('clouds', './assets/Background/Cloud.png');
    this.load.image('sun', './assets/Background/Sun.png');

    this.load.spritesheet('stingray', './assets/Stingray/Stingray.png', {frameWidth: 96, frameHeight: 32, startFrame: 0, endFrame: 17});
  }

  create() {
    this.sun = this.add.tileSprite(0,0,640,480,'sun').setOrigin(0,0);
    this.ocean = this.add.tileSprite(0,0,640,480,'ocean').setOrigin(0,0);
    this.clouds = this.add.tileSprite(0,0,640,480,'clouds').setOrigin(0,0);

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
    this.sun.tilePositionX += .1;
    this.clouds.tilePositionX += .25;
    this.ocean.tilePositionX += 1;
  }
}

