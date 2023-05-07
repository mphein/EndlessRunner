class Stingray extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene,x,y,texture,frame);

    scene.physics.add.existing(this);
    this.scene.add.existing(this);
    this.alive = true;
  }

  create() {
  
  }

  update() {
    if (this.alive) {
      if (Phaser.Input.Keyboard.JustDown(keyUP)) {
        console.log(this.get);
        console.log(this.acceleration);
        this.body.velocity.y -= 500;
        
      }
    }
    
  }
}