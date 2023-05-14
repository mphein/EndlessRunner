class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }
  
  preload() {
    this.load.image('Logo', './assets/SeaPancake.png')
  }

  create() {
    this.add.rectangle(0,0,w*2,h/8 * 2,'#000000');
    this.add.rectangle(0, h,w*2,h/8 * 2,'#000000');
    this.add.image(0,h/8, 'Logo').setOrigin(0,0);
    keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.backgroundMusic = this.sound.add('menuSong', {volume: .4})
    this.backgroundMusic.play();   

    this.menuConfig = {
      fontFamily: 'CTrebuchet MS',
      fontSize: '28px',
      color: '#FFFFFF',
      padding: {
          top: 5,
          bottom: 5,
      },
      fixedWidth: 0
  }
    this.menuInstruct = this.add.text(w/2, 30, 'Tap ↑ to swim up and ↓ to swim down', this.menuConfig).setOrigin(.5);
    this.add.text(w/2, h - 30, 'Press (P) to play!', this.menuConfig).setOrigin(.5);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyP)) {
      this.sound.play('waterBoop')
      this.backgroundMusic.stop();
      this.scene.start('playScene');
    }
  }
}