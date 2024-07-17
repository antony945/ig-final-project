import * as THREE from 'three';
import Note from './Note.js';

export default class Lane {
    static lane_z = 0.00; // TODO: This breaks collision if 0.01

    constructor(index, laneWidth, laneHeight, fretboardWidth, pickupHeight, pickupOffset, colors, asLines=true) {
        this.index = index;
        this.notes = {};
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.colors = colors;

        this.collidingNote = null;

        // Starting offset of lane
        this.x = -(fretboardWidth/2) + (this.laneWidth / 2) + this.index * this.laneWidth
        this.pickupHeight = pickupHeight;
        this.pickupOffset = pickupOffset;
        this.z = Lane.lane_z;

        if (asLines) {
            const isMetallic = true;
            // this.createLineLane(isMetallic);
            this.createCylinderLane(isMetallic)
        } else {
            this.createPlaneLane();
        }
    }

    createPlaneLane() {
        this.geometry = new THREE.PlaneGeometry(this.laneWidth, this.laneHeight);
        this.material = new THREE.MeshBasicMaterial({ color: this.colors[this.index], wireframe: false }); // Adjust color as needed
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(
            this.x,
            0,
            0
        )
    }

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

    createCylinderLane(isMetallic) {
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

        // Top point
        const p1 = new THREE.Vector3(this.x, this.laneHeight / 2, 0)
        const p2 = new THREE.Vector3(this.x, -this.laneHeight / 2 + (1.5*this.pickupHeight + this.pickupOffset), 0)
        this.geometry = new THREE.CylinderGeometry(0.015, 0.015, p1.distanceTo(p2), 32);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = this.x;
        this.mesh.position.z = this.z;
    }

    addToScene(scene) {
        scene.add(this.mesh);
        Object.keys(this.notes).forEach(measure => this.notes[measure].addToScene(scene));
    }

    addNote(measure) {
        // Only one note for measure at time
        if (!this.notes[measure]) {
            const note = new Note(this.index, this.x, this.z, this.laneWidth/4, this.laneWidth, this.laneHeight, this.colors[this.index]);
            this.notes[measure] = note;
            return note
        }

        return null;
    }

    getNote(measure) {
        return this.notes[measure];
    }

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
