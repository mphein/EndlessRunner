class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }
  
  preload() {
  }

  create() {
    keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.backgroundMusic = this.sound.add('menuSong', {volume: .4})
    this.backgroundMusic.play();
    this.add.text(20, 20, "Sea Pancake");    

    this.menuConfig = {
      fontFamily: 'CTrebuchet MS',
      fontSize: '28px',
      color: '#000000',
      padding: {
          top: 5,
          bottom: 5,
      },
      fixedWidth: 0
  }
    this.menuInstruct = this.add.text(w/2, h/2, 'Tap ↑ to swim up and ↓ to swim down', this.menuConfig).setOrigin(.5);
    this.add.text(w/2, h/2 + 30, 'Press (P) to play!', this.menuConfig).setOrigin(.5);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyP)) {
      this.backgroundMusic.stop();
      this.scene.start('playScene');
    }
  }
}