import * as THREE from 'three';
import Note from './Note.js';

export default class Lane {
    constructor(index, laneWidth, laneHeight, fretGeometry, colors, asLines=true) {
        this.index = index;
        this.notes = [];
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.colors = colors;

        // Starting offset of lane
        this.lane_x = -(fretGeometry.parameters.width/2) + (this.laneWidth / 2) + this.index * this.laneWidth

        if (asLines) {
            this.createLineLane()
        } else {
            this.createPlaneLane()
        }
    }

    createPlaneLane() {
        this.geometry = new THREE.PlaneGeometry(this.laneWidth, this.laneHeight);
        this.material = new THREE.MeshBasicMaterial({ color: this.colors[this.index], wireframe: false }); // Adjust color as needed
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(
            this.lane_x,
            0,
            0
        )
    }

    createLineLane() {
        this.material = new THREE.LineBasicMaterial({ color: this.colors[this.index] });
        this.points = [];

        // Top point
        this.points.push(
            new THREE.Vector3(
                this.lane_x,
                this.laneHeight / 2,
                0
            )
        );

        // Bottom point
        this.points.push(
            new THREE.Vector3(
                this.lane_x,
                -this.laneHeight / 2,
                0
            )
        );

        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        this.mesh = new THREE.Line(this.geometry, this.material);
    }

    addToScene(scene) {
        scene.add(this.mesh);
        this.notes.forEach(note => note.addToScene(scene));
    }

    addNote() {
        // Add a note to this lane
        const note = new Note(this.lane_x, this.laneWidth/4, this.laneWidth, this.laneHeight, this.colors[this.index]);
        this.notes.push(note);
        return note;
    }

    update() {
        this.notes.forEach(note => note.update());
    }
}
