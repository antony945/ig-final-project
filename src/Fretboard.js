import * as THREE from 'three';

export default class Fretboard {
    constructor(numLanes) {
        this.numLanes = numLanes;
        this.geometry = new THREE.PlaneGeometry(5, 20);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.z = -0.1; // Move the fretboard back so the notes can be in front of it

        // Create lanes
        this.createLanes();
    }

    createLanes() {
        this.lanes = [];
        
        this.laneWidth = this.geometry.parameters.width / this.numLanes; // Width of each lane


        this.laneHeight = this.geometry.parameters.height / this.numLanes;
        this.laneSpacing = 1; // Spacing between lanes

        for (let i = 0; i < this.numLanes; i++) {
            const laneGeometry = new THREE.PlaneGeometry(this.laneWidth, this.geometry.parameters.height);
            const laneMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }); // Adjust color as needed
            const laneMesh = new THREE.Mesh(laneGeometry, laneMaterial);
            laneMesh.position.set(
                -(this.geometry.parameters.width/2) + (this.laneWidth / 2) + i * this.laneWidth,
                0,
                0
            )

            // Set position
            // laneMesh.position.set(
            //     -(this.geometry.parameters.width / 2) + (this.laneWidth / 2), 
            //     (i + 0.5) * laneHeight - (this.geometry.parameters.height / 2), 
            //     0
            // );
            this.lanes.push(laneMesh);
            // break;
        }
    }

    addToScene(scene) {
        scene.add(this.mesh);
        this.lanes.forEach(lane => scene.add(lane));
    }
}
