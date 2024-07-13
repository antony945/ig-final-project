import * as THREE from 'three';
import Lane from './Lane.js';
import * as Utils from './utils.js'; // Adjust the path as necessary

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
        this.colors = {
            0: 0x00ff00,
            1: 0xff0000,
            2: 0xffff00,
            3: 0x0000ff,
            4: 0xffa500
        }; // Green, Red, Yellow, Blue, Orange

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = 0;
        this.mesh.position.z = -0.01; // Move the fretboard back so the notes can be in front of it
        
        // Create lanes
        this.createLanes(numLanes, asLines);

        // Create pickup area
        this.createPickupArea(numLanes, this.laneWidth, this.laneHeight);
    }

    rotate(x_angle) {
        this.mesh.rotation.x = x_angle;
        this.lanes.forEach(lane => {
            lane.mesh.rotation.x = x_angle;            
        });
    }

    createPickupArea(numLanes, laneWidth, laneHeight) {
        this.pickupWidth = numLanes * laneWidth; // Width of pickup area
        this.pickupHeight = 0.8; // Height of pickup area
    
        this.holeRadius = laneWidth / 4; // Radius of holes for notes
        this.holeDistance = laneWidth; // Distance between holes (aligned with lanes)
    
        // Create a plane geometry for the pickup area
        const geometry = new THREE.PlaneGeometry(this.pickupWidth, this.pickupHeight);
    
        // Create material for the pickup area (transparent)
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
    
        // Create mesh for the pickup area
        const pickupMesh = new THREE.Mesh(geometry, material);
        pickupMesh.position.set(
            0,
            -(laneHeight / 2) + 0.5,
            0.01
        ); // Adjust position at the bottom of the fretboard
    
        // Create spherical holes (representing notes)
        const holeGeometry = new THREE.SphereGeometry(this.holeRadius, 16, 16,
            -Math.PI,
            Math.PI
        );

        for (let i = 0; i < numLanes; i++) {
            const holeMaterial = new THREE.MeshStandardMaterial({
                color: this.colors[i],
                transparent: true,
                opacity: 1.0,
                side: THREE.DoubleSide,
                wireframe: false
            });
            const holeMesh = new THREE.Mesh(holeGeometry, holeMaterial);
            holeMesh.position.set(
                -(this.pickupWidth / 2) + (i + 0.5) * this.holeDistance,
                0,
                0.05
            ); // Adjust hole position based on lane
            
            pickupMesh.add(holeMesh); // Add hole mesh to the pickup area mesh
        }
    
        this.mesh.add(pickupMesh); // Add the pickup area to the fretboard mesh
    }

    createLanes(numLanes, asLines) {
        this.numLanes = numLanes;
        this.asLines = asLines;

        this.laneWidth = this.geometry.parameters.width / this.numLanes; // Width of each lane
        this.laneHeight = this.geometry.parameters.height;

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, this.geometry, this.colors, this.asLines);
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
