import * as THREE from 'three';

export default class Note {
    constructor(laneIndex, lane_x, lane_z, noteRadius, laneWidth, laneHeight, color) {
        this.laneIndex = laneIndex;
        this.noteRadius = noteRadius;
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.color = color;
        this.x = lane_x;
        this.z = lane_z;
        this.max_y = laneHeight / 2;
        this.min_y = -laneHeight / 2;

        // Start from the top and ensure it is in front of the fretboard
        this.starting_position = new THREE.Vector3(this.x, this.max_y, this.z);

        // Define materials
        const mainMaterial = new THREE.MeshStandardMaterial({
            color: this.color, // Base color of the material
            metalness: 0.4,  // Fully metallic
            roughness: 0.2   // Slightly smooth for a reflective look
        });
        const sideMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff
        });
        const mainMaterialSpecial = new THREE.MeshNormalMaterial();
        
        // Normal circular note
        this.mesh = this.createMesh(32, mainMaterial, sideMaterial);
        // this.mesh.castShadow = true; // Ensure the note casts shadows
        // this.mesh.receiveShadow = true; // Ensure the note receives shadows

        // Special octagonal note
        // this.mesh = this.createMesh(8, mainMaterialSpecial, sideMaterial);

        // Other parameters
        this.speed = 0.1;
        this.collided = false;
        this.accuracy = 0;
        this.hit = false;
    }

    createMesh(numSides, mainMaterial, sideMaterial) {
        const bottomRadius = .95*this.noteRadius;
        const topRadius = .5*this.noteRadius;  
        const topTopRadius = .3*this.noteRadius;
        const smallHeight = .1*this.noteRadius;
        const bigHeight = .4*this.noteRadius;

        // Bottom - White torus
        // const bottomGeometry = new THREE.CylinderGeometry(bottomRadius, bottomRadius, smallHeight, numSides, 1);
        const bottomGeometry = new THREE.TorusGeometry(bottomRadius, smallHeight, 12, numSides);
        const bottomMesh = new THREE.Mesh(bottomGeometry, sideMaterial);
        // bottomMesh.rotation.x = Math.PI / 2;
        // bottomMesh.rotation.y = Math.PI / 2;

        // Central mesh - Colored half-cone
        const centralGeometry = new THREE.CylinderGeometry(topRadius, bottomRadius, bigHeight, numSides, 1);
        const centralMesh = new THREE.Mesh(centralGeometry, mainMaterial);
        centralMesh.rotation.x = Math.PI / 2;
        centralMesh.rotation.y = Math.PI / 2;
        centralMesh.position.z = (bigHeight/2) + smallHeight;
        
        // Top - White half-cone
        const topGeometry = new THREE.CylinderGeometry(topTopRadius, topRadius, smallHeight, numSides, 1);
        const topMesh = new THREE.Mesh(topGeometry, sideMaterial);
        topMesh.rotation.x = Math.PI / 2;
        topMesh.rotation.y = Math.PI / 2;
        topMesh.position.z = bigHeight + 1.5*smallHeight;

        // FINAL NOTE
        const mesh = new THREE.Object3D();
        mesh.add(bottomMesh);
        mesh.add(centralMesh);
        mesh.add(topMesh);
        mesh.position.copy(this.starting_position);

        return mesh

        // this.geometry = new THREE.SphereGeometry(this.noteRadius*0.9, 32, 32);
        // this.material = new THREE.MeshBasicMaterial({ color: this.color });
        // this.mesh = new THREE.Mesh(this.geometry, this.material);

        // Position the note at the top of the lane
        // this.mesh.position.copy(this.starting_position);
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
        // Put it back on topgrou
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
