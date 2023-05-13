class Pancake extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, minHeight, maxHeight, texture, frame) {
        super(scene,x,y,texture,frame);


        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.speed = 2;
        
    }
  
    update() {
        this.x -= this.speed;
    }

    stop() {
        this.setRandomPosition(w + this.width / 2, this.minHeight, this.width, this.maxHeight - this.minHeight);
        this.speed = 0;
    }
}