import * as THREE from 'three';
import Lane from './Lane.js';
import { removeObject3D } from './utils.js'; // Adjust the path as necessary

export default class Fretboard {
    constructor(width, height, numLanes, asLines=true) {  
        this.geometry = new THREE.PlaneGeometry(width, height);
        this.material = new THREE.MeshPhongMaterial(
            {
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: .6
            }
        );

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = 0;
        this.mesh.position.z = -0.01; // Move the fretboard back so the notes can be in front of it
        
        // Create lanes
        this.createLanes(numLanes, asLines);
    }

    rotate(x_angle) {
        this.mesh.rotation.x = x_angle;
        this.lanes.forEach(lane => {
            lane.mesh.rotation.x = x_angle;            
        });
    }

    createLanes(numLanes, asLines) {
        this.numLanes = numLanes;
        this.asLines = asLines;

        this.laneWidth = this.geometry.parameters.width / this.numLanes; // Width of each lane
        this.laneHeight = this.geometry.parameters.height;

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, this.geometry, this.asLines);
            // TODO: Think if it is better to attach Lanes to Fretboard or not
            // this.mesh.add(lane.mesh);
            this.lanes.push(lane);
        }
    }

    // TODO: Don't use this, doesn't work
    removeLanes() {
        console.log("before: ", this.mesh.children)
        this.mesh.clear()
        console.log("after: ", this.mesh.children)
        
        // Dispose Lane objects
        this.lanes.forEach(lane => {
            removeObject3D(lane.mesh);
        });
    }

    // TODO: Don't use this, doesn't work
    updateLanes(numLanes, asLines) {
        // Remove old lanes from the scene
        this.removeLanes();

        this.createLanes(numLanes, asLines);
    }

    addNoteToLane(laneIndex) {
        const note = this.lanes[laneIndex].addNote();
        return note.mesh;
    }

    addToScene(scene) {
        scene.add(this.mesh);
        // TODO: Comment this line if you decide to have Lanes as childrens of Fretboard
        this.lanes.forEach(lane => lane.addToScene(scene));
    }

    update() {
        this.lanes.forEach(lane => lane.update());
    }
}
