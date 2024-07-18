import * as THREE from 'three';
import Note from './Note.js';

export default class Lane {
    static lane_z = 0.00; // TODO: This breaks collision if 0.01

    constructor(laneIndex, laneWidth, laneHeight, laneZ, fretboardWidth, pickupHeight, pickupOffset, colors) {
        this.laneIndex = laneIndex;
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.isCurrentlyPressed = false;
        
        this.collidingNote = null;
        this.notes = {};
        
        // Points defining lane
        this.p1 = new THREE.Vector3(0, this.laneHeight / 2, 0);
        this.p2 = new THREE.Vector3(0, -this.laneHeight / 2 + (1.5*pickupHeight + pickupOffset), 0);
        
        this.x = -(fretboardWidth/2) + (this.laneWidth / 2) + this.laneIndex * this.laneWidth
        this.z = laneZ;
        this.radius = 0.015;
        this.isMetallic = true;

        this.mesh = this.createCylinderLane(this.isMetallic, this.p1, this.p2, this.radius);
        
        this.mesh.position.x = this.x;
        this.mesh.position.z = this.z;
    }

    // Not used
    createPlaneLane() {
        this.geometry = new THREE.PlaneGeometry(this.laneWidth, this.laneHeight);
        this.material = new THREE.MeshBasicMaterial({ color: Lane.colors[this.laneIndex], wireframe: false }); // Adjust color as needed
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(
            this.x,
            0,
            0
        )
    }

    // Not used
    createLineLane(isMetallic) {
        if (isMetallic) {
            this.color = 0xaaaaaa;
        } else {
            this.color = 0xffffff;
        }

        this.material = new THREE.LineBasicMaterial({ color: this.color });
        this.points = [];

        // Top point
        this.points.push(
            new THREE.Vector3(
                this.x,
                this.laneHeight / 2,
                0
            )
        );

        // Bottom point
        this.points.push(
            new THREE.Vector3(
                this.x,
                -this.laneHeight / 2,
                0
            )
        );

        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        this.mesh = new THREE.Line(this.geometry, this.material);
    }

    createCylinderLane(isMetallic, p1, p2, radius) {
        if (isMetallic) {
            this.color = 0xaaaaaa;
            this.metalness = 0.9;
            this.roughness = 0.3;
        } else {
            this.color = 0xeeeeee;
            this.metalness = 0.0;
            this.roughness = 0.8;
        }

        // Create a material for strings
        this.material = new THREE.MeshStandardMaterial({
            color: this.color,
            metalness: this.metalness,
            roughness: this.roughness
        });

        this.geometry = new THREE.CylinderGeometry(radius, radius, p1.distanceTo(p2), 32);
        return new THREE.Mesh(this.geometry, this.material);
    }

    // Not used
    addToScene(scene) {
        scene.add(this.mesh);
        // Object.keys(this.notes).forEach(measure => this.notes[measure].addToScene(scene));
    }

    // Not used
    getNote(measure) {
        return this.notes[measure];
    }

    // Not used
    update(holeMesh) {  
        Object.keys(this.notes).forEach( measure => {
            const note = this.notes[measure]; 
            note.update();
            note.checkCollision(holeMesh);

            if (note.collided) {
                this.collidingNote = note;
                // console.log(`Lane ${this.index}: Note collision with accuracy ${this.collidingNote.accuracy}`);
                // TODO: Clean code later
            } else {
                this.collidingNote = null;
            }
        });

        return this.collidingNote;
    }
}
