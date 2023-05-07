class Shark extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene,x,y,texture,frame);
        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.speed = 5
        this.setBounce(0);
    }
  
    update() {
        this.x -= this.speed;
        if (this.x <= 0 - this.width) {
            this.x = w + 50;
        }
    }
}