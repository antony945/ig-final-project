import * as THREE from 'three';

export default class Note {
    constructor(lane_x, laneWidth, laneHeight, color) {
        this.laneWidth = laneWidth;

        this.x = lane_x
        this.max_y = laneHeight / 2;
        this.min_y = -laneHeight / 2;

        this.laneHeight = laneHeight;
        this.color = color;

        // Create the geometry and material for the note
        this.geometry = new THREE.SphereGeometry(this.laneWidth / 4, 32, 32);
        this.material = new THREE.MeshBasicMaterial({ color: this.color });
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        // Position the note at the top of the lane
        this.mesh.position.x = this.x; // Center lanes around 0
        this.mesh.position.y = this.max_y; // Start from the top
        this.mesh.position.z = 0.1; // Ensure it is in front of the fretboard

        this.speed = 0.1; // Adjust the speed as needed
    }

    update() {
        this.mesh.position.y -= this.speed;
        if (this.mesh.position.y < this.min_y) {
            // Note has reached the bottom of the lane
            // this.mesh.visible = false;
            // Put it back on top
            this.mesh.position.y = this.max_y;
        }
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    checkCollision() {
        // Check if the note is at the correct position and time
    }
}
