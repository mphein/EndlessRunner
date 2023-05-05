class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
  
  preload() {
    this.load.image('ocean', './assets/endlessRunnerBackground.png');
    this.load.image('stingray', './assets/stingray.png')
  }

  create() {
    this.ocean = this.add.tileSprite(0,0,640,480,'ocean').setOrigin(0,0);
    this.stingray = new Stingray(this, 50, game.config.height / 1.5, 'stingray').setOrigin(.5,0);
  }

  update(){
    this.ocean.tilePositionX += .5;
  }
}

