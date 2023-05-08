class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
  
  preload() {
    this.load.image('ocean', './assets/Background/Ocean.png');
    this.load.image('clouds', './assets/Background/Cloud.png');
    this.load.image('sun', './assets/Background/Sun.png');
    this.load.image('shark', './assets/Shark.png')
    
    this.load.atlas('Stingray', './assets/Stingray/Stingray.png', './assets/Stingray/Stingray.json');
  }

  create() {
    this.backgroundMusic = this.sound.add('playSong', {volume: .5, loop: true});
    this.backgroundMusic.play();
    this.anims.create({
      key: "swim",
      frameRate: 32,
      frames: this.anims.generateFrameNames('Stingray', {
        prefix: 'Stingray',
        suffix: '.png',
        start: 0,
        end: 31
      }),
      repeat: -1,
    })
    this.sun = this.add.tileSprite(0,0,640,480,'sun').setOrigin(0,0);
    this.ocean = this.add.tileSprite(0,0,640,480,'ocean').setOrigin(0,0);
    this.clouds = this.add.tileSprite(0,0,640,480,'clouds').setOrigin(0,0);

    this.shark1 = new Shark(this, w, 200, 'shark').setOrigin(0,0)
    this.shark2 = new Shark(this, w, 400, 'shark').setOrigin(0,0)

    this.stingray = new Stingray(this, 50, game.config.height / 1.5, 'Stingray', 'Stingray0.png').setOrigin(.5,0);
    this.stingray.play('swim');
    this.stingray.eaten = false;
    //define keys
    keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  }

  update() {
    this.sun.tilePositionX += .25;
    this.clouds.tilePositionX += .5;
    this.ocean.tilePositionX += 4;
    if (!this.stingray.eaten) {
      this.stingray.update();
    }
    this.shark1.update();
    this.shark2.update();

    this.physics.world.collide(this.stingray, this.shark1, this.sharkCollision, null, this);
    this.physics.world.collide(this.stingray, this.shark2, this.sharkCollision, null, this);

  }

  sharkCollision() {
    this.stingray.eaten = true;
    this.stingray.destroy();
  }
}

