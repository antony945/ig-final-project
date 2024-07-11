import * as THREE from 'three';
import Lane from './Lane.js';

export default class Fretboard {
    constructor(numLanes, asLines=true) {
        this.geometry = new THREE.PlaneGeometry(5, 20);
        this.material = new THREE.MeshBasicMaterial({ color: 0x696969, wireframe: false });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.z = -0.1; // Move the fretboard back so the notes can be in front of it

        // Create lanes
        this.createLanes(numLanes, asLines);
    }

    createLanes(numLanes, asLines=true) {
        this.numLanes = numLanes;
        this.laneWidth = this.geometry.parameters.width / this.numLanes; // Width of each lane
        this.laneHeight = this.geometry.parameters.height;

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, this.geometry, asLines);
            this.lanes.push(lane);
        }
    }

    addNoteToLane(laneIndex) {
        const note = this.lanes[laneIndex].addNote();
        return note.mesh;
    }

    addToScene(scene) {
        scene.add(this.mesh);
        this.lanes.forEach(lane => lane.addToScene(scene));
    }

    update() {
        this.lanes.forEach(lane => lane.update());
    }
}
