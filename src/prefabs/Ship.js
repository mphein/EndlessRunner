class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        this.speed = .75;
        
    }
  
    update() {
        this.x -= this.speed;
        if (this.x <= 0 - this.width) {
            this.x = w + this.width;
        }
    }
}