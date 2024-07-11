import * as THREE from 'three';
import Lane from './Lane.js';

export default class Fretboard {
    constructor(numLanes, asLines=true) {
        this.geometry = new THREE.PlaneGeometry(5, 15);
        this.material = new THREE.MeshPhongMaterial(
            {
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: .6
            }
        );

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        // this.mesh.rotateX(-10);
        this.mesh.position.y = 0; // Move the fretboard back so the notes can be in front of it
        this.mesh.position.z = -0.01; // Move the fretboard back so the notes can be in front of it

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
