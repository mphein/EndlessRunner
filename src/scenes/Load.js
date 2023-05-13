class Load extends Phaser.Scene {
    constructor() {
      super("loadScene");
    }
    
    preload() { 
      // loading bar
      // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
      let loadingBar = this.add.graphics();
      this.load.on('progress', (value) => {
        loadingBar.clear();                                 // reset fill/line style
        loadingBar.fillStyle(0x40FFEA, 1);                  // (color, alpha)
        loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
      });
      this.load.on('complete', () => {
        loadingBar.destroy();
      });

      this.load.audio('munch', './assets/munch.wav');
      this.load.audio('waterBoop', './assets/rain.wav');
      this.load.audio('menuSong', './assets/menu.mp3');
      this.load.audio('playSong', './assets/run.mp3');
      
    }
  
    create() {
        this.scene.start('menuScene');
    }
  }