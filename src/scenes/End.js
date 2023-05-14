class End extends Phaser.Scene {
    constructor() {
      super("endScene");
    }
    
    preload() {
        // Load images used in end scene
        this.load.image('ocean', './assets/Background/Ocean.png');
        this.load.image('clouds', './assets/Background/Cloud.png');
        this.load.image('sun', './assets/Background/Sun.png');
        this.load.atlas('PancakeF', './assets/PancakeFront/Pancake.png','./assets/PancakeFront/Pancake.json');
        this.load.atlas('PancakeR', './assets/PancakeRev/Pancake.png','./assets/PancakeRev/Pancake.json');
        this.load.atlas('Stingray', './assets/Stingray/Stingray.png', './assets/Stingray/Stingray.json');
    }
  
    create() {
        // Add restard input 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        // Create scene sounds
        this.backgroundMusic = this.sound.add('menuSong', {volume: .4, loop: true});
        this.backgroundMusic.play();
        this.munch = this.sound.add('munch', {volume: .1});
        this.bubbles = this.sound.add('bubbleUp', {volume: .5});



        // Swimming Stingray
        this.anims.create({
            key: "swim",
            frameRate: 16,
            frames: this.anims.generateFrameNames('Stingray', {
              prefix: 'Stingray',
              suffix: '.png',
              start: 0,
              end: 31
            }),
            repeat: -1,
          })

          // Eat forward animation
          this.anims.create({
            key: "eatF",
            frameRate: 12,
            frames: this.anims.generateFrameNames('PancakeF', {
              prefix: 'Pancake',
              suffix: '.png',
              start: 0,
              end: 6
            }),
          })
          // Eat reverse animation
          this.anims.create({
            key: "eatR",
            frameRate: 16,
            frames: this.anims.generateFrameNames('PancakeR', {
              prefix: 'Pancake',
              suffix: '.png',
              start: 0,
              end: 6
            }),
          })
          // Create scene GameObjects
          this.pancake1 = new Pancake(this, w/2 - 75, h/2, 0, 0, 'PancakeR', 'Pancake0.png').setOrigin(.5,0);
          this.pancake2 = new Pancake(this, w/2 + 75, h/2, 0, 0, 'PancakeF', 'Pancake0.png').setOrigin(.5,0);
          this.stingray = new Stingray(this, w/2, h/2, 'Stingray', 'Stingray0.png').setOrigin(.5,0);
          this.stingray.setGravity(0);
          this.stingray.play('swim');

         this.flipped = false; 
         // Text configuration for End scene
         this.gameOverConfig = {
            fontFamily: 'CTrebuchet MS',
            fontSize: '28px',
            color: '#000000',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // Text for score and credits
        this.add.text(w/2, h/4, 'You scored: ' + score, this.gameOverConfig).setOrigin(0.5);
        this.add.text(w/2, h/3, 'High score: ' + highScore, this.gameOverConfig).setOrigin(0.5);
        this.add.text(w/2, h/3 + 40, 'Press (R) to Restart', this.gameOverConfig).setOrigin(0.5);
        this.add.text(w/2, h/2 + 70, 'Artwork and Programming by Michael Hein', this.gameOverConfig).setOrigin(0.5);
        this.gameOverConfig.fontSize = 12
        this.add.text(w/2, h/2 + 110, 'Chewing, Breadstick, Single, E.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org', this.gameOverConfig).setOrigin(0.5);
        this.add.text(w/2, h/2 + 140, 'Background music from pixelbay Royalty free music', this.gameOverConfig).setOrigin(0.5);
        this.add.text(w/2, h/2 + 170, '(Summer Surf by AudioCoffee + Waves and Tears by JuliusH)', this.gameOverConfig).setOrigin(0.5);
        this.add.text(w/2, h/2 + 200, 'All other SFX created at jsfxr.me', this.gameOverConfig).setOrigin(0.5);

        // Cute stingray flipping time
        this.flipStingray = this.time.addEvent({
            delay: 1000, 
            callback: ()=> {
            if (!this.flipped) {
                this.bubbles.play();
                this.stingray.toggleFlipX();
                this.pancake1.play('eatR')
                this.flipped = !this.flipped;
            } else {
                this.stingray.toggleFlipX();
                this.munch.play();
                this.pancake2.play('eatF')
                this.flipped = !this.flipped;
            }
        },
            loop: true
          })

    }

    update() {
        // Replay
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.sound.play('waterBoop')
            this.backgroundMusic.stop();
            this.scene.start('playScene');
        }
    }
  }