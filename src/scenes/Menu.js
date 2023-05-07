class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }
  
  preload() {
  }

  create() {
    this.backgroundMusic = this.sound.add('menuSong')
    this.backgroundMusic.play();
    this.add.text(20, 20, "Sea Pancake");
    this.backgroundMusic.stop();
    this.scene.start('playScene');
  }
}