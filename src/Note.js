import * as THREE from 'three';

export default class Note {
    constructor(laneIndex, lane_x, noteRadius, laneWidth, laneHeight, color) {
        this.laneIndex = laneIndex;
        this.noteRadius = noteRadius;
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.color = color;
        this.x = lane_x
        this.max_y = laneHeight / 2;
        this.min_y = -laneHeight / 2;

        // Start from the top and ensure it is in front of the fretboard
        this.starting_position = new THREE.Vector3(this.x, this.max_y, 0.1);

        // Create the geometry and material for the note
        this.geometry = new THREE.SphereGeometry(this.noteRadius, 32, 32);
        this.material = new THREE.MeshBasicMaterial({ color: this.color });
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        // Position the note at the top of the lane
        this.mesh.position.copy(this.starting_position);

        // Other parameters
        this.speed = 0.05;
        this.collided = false;
        this.accuracy = 0;
        this.hit = false;
    }

    update() {
        this.mesh.position.y -= this.speed;
        if (this.mesh.position.y < this.min_y) {
            // Note has reached the bottom of the lane
            // this.mesh.visible = false;
            this.reset();
        }
    }
    
    reset() {
        // Put it back on top
        this.mesh.position.copy(this.starting_position);
        // Reset other parameters
        this.accuracy = 0;
        this.collided = false;
        this.hit = false;
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    removeFromScene(scene) {
        // scene.remove(this.mesh);
        // TODO: This would have to remove the note from the scene once hitted
        // But now for testing purpose it's just reset it on original position
        this.reset();
    }

    checkCollision(pickupHoleMesh) {
        // Check if the note collide with the pickup hole mesh
        const noteBox = new THREE.Box3().setFromObject(this.mesh);
        const pickupBox = new THREE.Box3().setFromObject(pickupHoleMesh);

        this.collided = noteBox.intersectsBox(pickupBox);
        this.accuracy = 0;
        if (this.collided) {
            // Calculate collision accuracy
            const noteCenterY = this.mesh.position.y;
            const pickupCenterY = pickupBox.min.y + (pickupBox.max.y - pickupBox.min.y) / 2;

            // Accuracy is higher when note is closer to the center of the pickup
            const distance = Math.abs(noteCenterY - pickupCenterY);
            const maxDistance = (pickupBox.max.y - pickupBox.min.y) / 2;

            this.accuracy = Math.max(0, 1 - (distance / maxDistance));
        }
        return { collided: this.collided, accuracy: this.accuracy };
    }
}
