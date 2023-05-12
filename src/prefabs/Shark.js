class Shark extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, minHeight, maxHeight, texture, frame) {
        super(scene,x,y,texture,frame);

        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.speed = 5
        this.setBounce(0);
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
    }
  
    update() {
        this.x -= this.speed;
        if (this.x <= 0 - this.width) {
            this.setRandomPosition(w - 1, this.minHeight, w + (this.width / 2), this.maxHeight - this.minHeight);
        }
    }
}