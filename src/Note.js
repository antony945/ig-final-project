export default class Note {
    constructor(lane, position, speed) {
        this.lane = lane;
        this.position = position;
        this.speed = speed;
    }

    update() {
        this.position.y -= this.speed;
    }

    checkCollision() {
        // Check if the note is at the correct position and time
    }
}
