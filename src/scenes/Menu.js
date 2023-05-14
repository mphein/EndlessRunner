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
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyP)) {
      this.backgroundMusic.stop();
      this.scene.start('playScene');
    }
  }
}